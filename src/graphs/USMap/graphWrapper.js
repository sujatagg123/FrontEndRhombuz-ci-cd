import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GraphContainer, GraphWrp } from '../../styles/index.sc';
import { actualOneD } from '../utils/mockData';
import ResizeHandlerHOC from '../utils/resizeHandlerHOC';
import USMapGraph from './usMap.graph';

const USMapChart = (props) => {
  const refElement = useRef(null);
  const graphRef = useRef(null);

  useEffect(() => {
    let graph = graphRef.current;

    if (props.data) {
      if (!graph) {
        graphRef.current = new USMapGraph(refElement.current);
        graph = graphRef.current;
      }
      graph.setData(props.data || actualOneD);
      graph.setConfig({ ...props.config });
      graph.drawGraph();
    }
  }, [props.data, props.config, props.rerender]);

  return (
    <GraphContainer className=" us-map-chart graph-container">
      <GraphWrp className="graph-wrp" ref={refElement} />
    </GraphContainer>
  );
};

USMapChart.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object,
  rerender: PropTypes.bool,
};

export default ResizeHandlerHOC(USMapChart);
