import ReactFlow, {
	Background,
	Controls,
	applyNodeChanges,
	applyEdgeChanges,
	addEdge,
} from "reactflow";
import { useEffect, useCallback, useMemo, useState } from "preact/compat";

import "reactflow/dist/style.css";
import { FunctionNode } from "./functionNode";

const initialNodes = [
	{
		id: "1",
		position: { x: 0, y: 0 },
		type: "function",
		data: { label: "Function" },
	},
	{ id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export const App = () => {
	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState(initialEdges);

	const onCompile = useEffect(() => {
		// TODO: generate mlir that can be compiled on a server
		console.log(`
		YEET
		`);
	});

	const nodeTypes = useMemo(() => ({ function: FunctionNode }), []);

	const onNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[],
	);
	const onEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[],
	);

	const onConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[],
	);

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={nodeTypes}
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
};
