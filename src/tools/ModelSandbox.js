import React, { useCallback, useEffect } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import EarthGlobe from '../lib/model-visualizer';

const viewerRef = React.createRef();

function ModelSandbox({ form }) {
  const { getFieldDecorator } = form;
  const formItemLayout = {
  };

  let earthGlobe = new EarthGlobe();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { imageUrl } = e.target;
    earthGlobe.setBasemapUrl(imageUrl.value);
    e.target.reset();
  }, [earthGlobe]);

  const resetBasemap = useCallback(() => earthGlobe.resetBasemap(), [earthGlobe]);

  useEffect(() => {
    earthGlobe.start(viewerRef.current);

    return function cleanup() {
      earthGlobe.stop();
      viewerRef.current.removeChild(earthGlobe.renderer.domElement);
    }
  }, [earthGlobe]);

  return (
    <div>
      <Row gutter={16}>
        <Col>
          <Form layout="inline" onSubmit={handleSubmit} noValidate autoComplete="off">
            <Form.Item {...formItemLayout}>
              {getFieldDecorator('imageUrl', {
                rules: [{ required: true, message: 'Please paste a valid URL!' }],
              })(
                <Input placeholder="Paste your image URL here" />
              )}
            </Form.Item>
            <Form.Item {...formItemLayout}>
              <Button type="primary" htmlType="submit">Try!</Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={resetBasemap}>Reset basemap</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row gutter={16}>
        <div
          ref={viewerRef}
          style={{ width: '100%', height: '720px' }}
        />
      </Row>
    </div>
  );
}

export default Form.create({ name: 'globe_sandbox' })(ModelSandbox);
