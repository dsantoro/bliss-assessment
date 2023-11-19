import React from "react";
import "./skeleton.css";

interface SkeletonProps {
  height?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ height }) => {
  return (
    <div className="skeleton" style={{ height: height }}>
      <div className="skeleton__header">
        <div className="skeleton__element--image skeleton__animation"></div>
        <div className="stacked">
          <div className="skeleton__element--text skeleton__animation"></div>
          <div className="skeleton__element--text skeleton__animation"></div>
        </div>
      </div>

      <div className="divider skeleton__animation"></div>

      <div className="skeleton__body">
        <div className="skeleton__body__elements skeleton__animation"></div>
        <div className="skeleton__body__elements skeleton__animation"></div>
        <div className="skeleton__body__elements skeleton__animation"></div>
        <div className="skeleton__body__elements skeleton__animation"></div>
      </div>
    </div>
  );
};

export default Skeleton;
