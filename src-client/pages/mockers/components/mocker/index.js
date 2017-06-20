import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table, Card } from 'antd';

import { loadMocker, setMockerActiveModule } from '../../business/mocker/action';

class Mocker extends Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {
    console.log('Mocker componentDidMount', this.props);

    this.fetch();
  }

  fetch() {
    this.props.loadMocker(this.props.routeParams.mockerName);
  }

  getColumns() {
    const { mockerData } = this.props;
    const activeModule = mockerData.operation && mockerData.operation.activeModule || '';

    return [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <a href={record.cgi} target="_blank">{text}</a>
      ),
    }, {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    }, {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    }, {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          {
            (record.name !== activeModule) ?
              <a href="#">Active It</a>
              : <span>Aready active</span>
          }

          <span className="ant-divider" />
          <a href="#">Edit</a>

          <span className="ant-divider" />
          <a href="#">Delete</a>
        </span>
      ),
    }];
  }

  render() {
    const { isLoaded, mockerData, routeParams, route } = this.props;
    const mockerName = routeParams.mockerName;

    const data = mockerData.modules;
    const columns = this.getColumns();

    return (
      <div>
        <h3>location</h3>
        <p>{JSON.stringify(location)}</p>
        <h3>route</h3>
        <p>{JSON.stringify(route)}</p>


        <Card>
          <p>Hello, I am in {mockerName}</p>
        </Card>

        <Table loading={!isLoaded} rowKey="name" columns={columns} dataSource={data} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { mockerInfo } = state;

  return {
    isLoaded: mockerInfo.isLoaded,
    mockerData: mockerInfo.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMocker(mockerName){
      return dispatch(loadMocker(mockerName));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mocker);


