export interface Node {
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
  
export interface Link {
    source: string | Node;
    target: string | Node;
    value: number;
}
  
export interface GraphData {
    nodes: Node[];
    links: Link[];
}
  