import { Handle, Position } from "reactflow";

export const FunctionNode = ({ data }) => {
	return (
		<div
			style={{
				border: "#fff 2px solid",
				borderRadius: "0.5rem",
				padding: "0.5rem",
				background: "#111111",
				color: "white",
			}}
		>
			<Handle type="target" position={Position.Top} />
			<div>
				<h3>{data.label}</h3>
				<label htmlFor="name">Name: </label>
				<input id="name" name="name" value="main" className="nodrag" />
			</div>
			<Handle type="source" position={Position.Bottom} />
		</div>
	);
};
