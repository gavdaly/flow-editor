import * as React from "react";
import { online } from "../lib/online";

interface IConnectedProps {
  connected: React.ReactNode;
  disconnected: React.ReactNode;
}

export const Connected: React.FC<IConnectedProps> = ({
  connected,
  disconnected
}) => <div className="connection">{online() ? connected : disconnected}</div>;

export default Connected;
