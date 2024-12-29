// types.ts
interface Node {
  id: string;
  group: number;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
  index?: number;
  vx?: number;
  vy?: number;
}

interface Link {
  source: string | Node;
  target: string | Node;
  value: number;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

// ForceGraph.tsx
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import * as d3 from 'd3';

interface ForceGraphProps {
  data?: GraphData;
  width?: number;
  height?: number;
}

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
    { id: "PostgreSQL", group: 2 }
  ],
  links: [
    { source: "Frontend", target: "React", value: 1 },
    { source: "Frontend", target: "Next.js", value: 1 },
    { source: "Backend", target: "Node.js", value: 1 },
    { source: "Backend", target: "Express", value: 1 },
    { source: "Database", target: "MongoDB", value: 1 },
    { source: "Database", target: "PostgreSQL", value: 1 }
  ]
};

const ForceGraph: React.FC<ForceGraphProps> = ({ 
  data = defaultData,
  width: propWidth = 800,
  height: propHeight = 600
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const width = propWidth;
    const height = propHeight;
    const padding = 50;

    // Type-safe simulation
    const simulation = d3.forceSimulation<Node>()
      .nodes(data.nodes)
      .force("link", d3.forceLink<Node, Link>(data.links)
        .id((d) => d.id)
        .distance(100))
      .force("charge", d3.forceManyBody<Node>().strength(-200))
      .force("center", d3.forceCenter<Node>(width / 2, height / 2))
      .force("collision", d3.forceCollide<Node>().radius(50))
      .force("x", d3.forceX<Node>(width / 2).strength(0.05))
      .force("y", d3.forceY<Node>(height / 2).strength(0.05))
      .alphaDecay(0.01)
      .alphaMin(0.001);

    // Create SVG with proper typing
    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("class", "bg-white rounded-lg");

    // Create background pattern
    const defs = svg.append("defs");
    const pattern = defs.append("pattern")
      .attr("id", "grid")
      .attr("width", 20)
      .attr("height", 20)
      .attr("patternUnits", "userSpaceOnUse");

    pattern.append("circle")
      .attr("cx", 3)
      .attr("cy", 3)
      .attr("r", 1)
      .attr("fill", "#e2e8f0");

    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "url(#grid)");

    const g = svg.append("g");

    // Type-safe zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .extent([[0, 0], [width, height]])
      .scaleExtent([0.5, 2])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Create links with proper typing
    const link = g.append("g")
      .selectAll<SVGLineElement, Link>("line")
      .data(data.links)
      .join("line")
      .attr("class", "stroke-gray-300")
      .attr("stroke-width", 2);

    // Create nodes with proper typing
    const node = g.append("g")
      .selectAll<SVGGElement, Node>("g")
      .data(data.nodes)
      .join("g")
      .attr("class", "cursor-grab active:cursor-grabbing");

    node.append("circle")
      .attr("r", d => d.group === 1 ? 30 : 20)
      .attr("class", d => d.group === 1 
        ? "fill-blue-200 stroke-blue-500" 
        : "fill-green-200 stroke-green-500")
      .attr("stroke-width", 2);

    node.append("text")
      .text(d => d.id)
      .attr("class", "text-sm font-medium fill-gray-700 pointer-events-none")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em");

    // Type-safe drag behavior
    const drag = d3.drag<SVGGElement, Node>()
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
      // Type-safe boundary constraints
      data.nodes.forEach(node => {
        if (!node.fx && node.x !== undefined && node.y !== undefined) {
          node.x = Math.max(padding, Math.min(width - padding, node.x));
          node.y = Math.max(padding, Math.min(height - padding, node.y));
        }
      });

      link
        .attr("x1", d => (d.source as Node).x ?? 0)
        .attr("y1", d => (d.source as Node).y ?? 0)
        .attr("x2", d => (d.target as Node).x ?? 0)
        .attr("y2", d => (d.target as Node).y ?? 0);

      node
        .attr("transform", d => `translate(${d.x ?? 0},${d.y ?? 0})`);
    });

    return () => {
      simulation.stop();
    };
  }, [data, propWidth, propHeight]);

  return (
    <Card className="p-4 w-full">
      <svg ref={svgRef} width="100%" height={propHeight} />
    </Card>
  );
};

export default ForceGraph;