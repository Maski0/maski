import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import { Card } from "@/components/ui/card";
import * as d3 from "d3";
import { GraphData, Link, Node } from "@/types";
import { Button } from "./ui/button";
import { RefreshCcw } from "lucide-react";

interface ForceGraphProps {
  data?: GraphData;
  aspectRatio?: number;
}

// Define defaultData before the component
const defaultData: GraphData = {
  nodes: [
    { id: "Frontend", group: 1 },
    { id: "React", group: 2 },
    { id: "Next.js", group: 2 },
    { id: "Backend", group: 1 },
    { id: "Node.js", group: 2 },
    { id: "Express", group: 2 },
    { id: "Database", group: 1 },
    { id: "MongoDB", group: 2 },
    { id: "PostgreSQL", group: 2 },
  ],
  links: [
    { source: "Frontend", target: "React", value: 1 },
    { source: "Frontend", target: "Next.js", value: 1 },
    { source: "Backend", target: "Node.js", value: 1 },
    { source: "Backend", target: "Express", value: 1 },
    { source: "Database", target: "MongoDB", value: 1 },
    { source: "Database", target: "PostgreSQL", value: 1 },
  ],
};

// Define consistent color scheme
const colorScheme = {
  primary: "fill-purple-700 stroke-purple-600",
  secondary: "fill-indigo-600 stroke-indigo-500",
  tertiary: "fill-blue-500 stroke-blue-400" // For group 3
};

const baseUIClass = "absolute bg-purple-600 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300";

const ForceGraph: React.FC<ForceGraphProps> = memo(({
  data = defaultData,
  aspectRatio = 3 / 4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const computedStyle = window.getComputedStyle(container);
      const paddingLeft = parseFloat(computedStyle.paddingLeft);
      const paddingRight = parseFloat(computedStyle.paddingRight);
      const availableWidth = container.clientWidth - paddingLeft - paddingRight;
      const availableHeight = Math.max(availableWidth * aspectRatio, 400);

      setDimensions({
        width: availableWidth,
        height: availableHeight,
      });
    }
  }, [aspectRatio]);

  useEffect(() => {
    updateDimensions();
    const resizeHandler = () => {
      updateDimensions();
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [updateDimensions]);

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return;

    const { width, height } = dimensions;
    const padding = width * 0.05;

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "transparent");

    const patternSize = Math.max(width, height) * 0.025;
    const defs = svg.append("defs");
    const pattern = defs
      .append("pattern")
      .attr("id", "grid")
      .attr("width", patternSize)
      .attr("height", patternSize)
      .attr("patternUnits", "userSpaceOnUse");

    pattern
      .append("circle")
      .attr("cx", patternSize * 0.15)
      .attr("cy", patternSize * 0.15)
      .attr("r", patternSize * 0.05)
      .attr("fill", "#aaa");

    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "url(#grid)")
      .attr("rx", 8);

    const g = svg.append("g");

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .filter((event) => {
        // For wheel events, require Shift key to zoom
        if (event.type === "wheel") {
          return event.shiftKey;
        }
        // For mousedown events (panning), allow only if it's the main (left) button
        return !event.button;
      })
      .extent([
        [0, 0],
        [width, height],
      ])
      .scaleExtent([0.5, 2])
      // We hook into "start" and "end" to change the cursor when panning the background.
      .on("start", (event) => {
        // If it's a mouse-based start (not touch), set cursor to move
        if (event.sourceEvent && event.sourceEvent.type === "mousedown") {
          svg.style("cursor", "move");
        }
      })
      .on("end", () => {
        // Return the cursor to default (or "auto") once the zoom/pan ends
        svg.style("cursor", "default");
      })
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);
    zoomRef.current = zoom;

    const simulation = d3
      .forceSimulation<Node>()
      .nodes(data.nodes)
      .force(
        "link",
        d3
          .forceLink<Node, Link>(data.links)
          .id((d) => d.id)
          .distance(width * 0.1)
      )
      .force("charge", d3.forceManyBody<Node>().strength(-width * 0.25))
      .force("center", d3.forceCenter<Node>(width / 2, height / 2))
      .force("collision", d3.forceCollide<Node>().radius(width * 0.05))
      .force("x", d3.forceX<Node>(width / 2).strength(0.05))
      .force("y", d3.forceY<Node>(height / 2).strength(0.05))
      .alphaDecay(0.01)
      .alphaMin(0.001);

    const link = g
      .append("g")
      .selectAll<SVGLineElement, Link>("line")
      .data(data.links)
      .join("line")
      .attr("class", "stroke-gray-300")
      .attr("stroke-width", Math.max(width * 0.002, 1.5));

    const node = g
      .append("g")
      .selectAll<SVGGElement, Node>("g")
      .data(data.nodes)
      .join("g")
      .attr("class", "cursor-grab active:cursor-grabbing");

    const textSelection = node
      .append("text")
      .text((d) => d.id)
      .attr("class", "fill-gray-200 pointer-events-none")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .style("font-size", `${Math.max(Math.min(dimensions.width * 0.012, 16), 10)}px`)
      .style("font-weight", "500");

    textSelection.each(function (d) {
      const textWidth = (this as SVGTextElement).getBBox().width;
      const padding = 10;
      d.radius = Math.max(textWidth / 2 + padding, 20);
    });

    const filter = defs
      .append("filter")
      .attr("id", "glow")
      .attr("width", "400%")
      .attr("height", "400%");

    filter
      .append("feDropShadow")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("stdDeviation", 5)
      .attr("flood-color", "rgb(107,33,168)")
      .attr("flood-opacity", 1);

    node
      .append("circle")
      .attr("r", (d) => d.radius ?? 20)
      .style("filter", (d) => (d.group === 1 ? "url(#glow)" : null))
      .attr("class", (d) => {
        switch(d.group) {
          case 1: return colorScheme.primary;
          case 2: return colorScheme.secondary;
          case 3: return colorScheme.tertiary;
          default: return colorScheme.secondary;
        }
      })
      .attr("stroke-width", Math.max(width * 0.002, 1.5));

    textSelection.raise();
    const drag = d3
      .drag<SVGGElement, Node>()
      .on("start", (event, d) => {
        if (!event.active) {
          simulation.alphaTarget(0.3).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = Math.max(padding, Math.min(width - padding, event.x));
        d.fy = Math.max(padding, Math.min(height - padding, event.y));
      })
      .on("end", (event, d) => {
        if (!event.active) {
          simulation.alphaTarget(0.1);

          setTimeout(() => {
            d.fx = null;
            d.fy = null;
            simulation.alphaTarget(0.05);
          }, 200);

          setTimeout(() => {
            simulation.alphaTarget(0);
          }, 1000);
        }
      });

    node.call(drag);

    simulation.on("tick", () => {
      data.nodes.forEach((node) => {
        if (!node.fx && node.x !== undefined && node.y !== undefined) {
          node.x = Math.max(padding, Math.min(width - padding, node.x));
          node.y = Math.max(padding, Math.min(height - padding, node.y));
        }
      });

      link
        .attr("x1", (d) => (d.source as Node).x ?? 0)
        .attr("y1", (d) => (d.source as Node).y ?? 0)
        .attr("x2", (d) => (d.target as Node).x ?? 0)
        .attr("y2", (d) => (d.target as Node).y ?? 0);

      node.attr("transform", (d) => `translate(${d.x ?? 0},${d.y ?? 0})`);
    });

    return () => {
      simulation.stop();
      if (zoomRef.current && svgRef.current) {
        d3.select(svgRef.current).on('.zoom', null);
      }
    };
  }, [data, dimensions]);

  const handleResetZoom = useCallback(() => {
    if (zoomRef.current && svgRef.current) {
      d3.select(svgRef.current)
        .transition()
        .duration(750)
        .call(zoomRef.current.transform, d3.zoomIdentity);
    }
  }, []);

  return (
    <Card className="group relative w-full overflow-hidden bg-black/50 border-gray-800 ">
      <div className="pt-5 pl-5" ref={containerRef}>
        <svg
          ref={svgRef}
          className="w-full overflow-visible"
          style={{ minHeight: dimensions.height }}
        />
        <Button
          onClick={handleResetZoom}
          className={`${baseUIClass} top-4 right-4 z-10 px-3 py-1 rounded hover:bg-purple-700`}
        >
          <RefreshCcw />
        </Button>
        <div className={`${baseUIClass} bottom-4 left-4 px-4 py-2 rounded-lg text-sm`}>
          Shift + Scroll to Zoom
        </div>
      </div>
    </Card>
  );
});

ForceGraph.displayName = 'ForceGraph';

export default ForceGraph;
