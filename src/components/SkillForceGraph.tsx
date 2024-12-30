import React, { useEffect, useRef, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import * as d3 from "d3";
import { GraphData, Link, Node } from "@/types";

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

const ForceGraph: React.FC<ForceGraphProps> = ({
  data = defaultData,
  aspectRatio = 3 / 4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
      .extent([
        [0, 0],
        [width, height],
      ])
      .scaleExtent([0.5, 2])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

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
      .style("font-size", `${Math.max(width * 0.012, 12)}px`)
      .style("font-weight", "500");

    textSelection.each(function (d) {
      const textWidth = (this as SVGTextElement).getBBox().width;
      const padding = 10;
      d.radius = Math.max(textWidth / 2 + padding, 20);
    });

    const nodeRadius = (group: number) =>
      group === 1 ? Math.max(width * 0.03, 20) : Math.max(width * 0.02, 15);

    node
      .append("circle")
      .attr("r", (d) => d.radius ?? nodeRadius(d.group))
      .attr("class", (d) =>
        d.group === 1
          ? "fill-purple-900 stroke-purple-800"
          : "fill-purple-700 stroke-purple-500"
      )
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
    };
  }, [data, dimensions]);

  return (
    <Card className="w-full overflow-hidden bg-black/50 border-gray-800 ">
      <div className="p-4" ref={containerRef}>
        <svg
          ref={svgRef}
          className="w-full overflow-visible"
          style={{ minHeight: dimensions.height }}
        />
      </div>
    </Card>
  );
};

export default ForceGraph;
