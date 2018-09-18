/* eslint-disable react/no-unused-prop-types,no-unused-expressions */
// TODO:: Complete pagination component logic
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'; // eslint-disable-line
import './index.scss';

const PROP_TYPES = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired
};

export const initPagination = (node, customOptions) => {
  const $container = $(node);
  const sources = (() => {
    const result = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 196; i++) {
      result.push(i);
    }

    return result;
  })();

  const options = {
    pageNumber: customOptions.currentPage,
    pageSize: customOptions.perPage,
    dataSource: sources,
    callback(response, pagination) {
      window.console && console.log(response, pagination);

      let dataHtml = '<ul>';

      $.each(response, (index, item) => {
        dataHtml += `<li>${item}</li>`;
      });

      dataHtml += '</ul>';

      $container.prev().html(dataHtml);
    }
  };

  $container.addHook('beforeInit', () => {
    window.console && console.log('beforeInit...');
  });

  $container.addHook('beforePageOnClick', () => {
    window.console && console.log('beforePageOnClick...');
    // return false
  });

  $container.pagination(options);
};

export const destroyPagination = (node) => {
  const $container = $(node);
  $container.pagination('destroy');
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }
  componentDidMount() {
    initPagination(this.container.current, this.props);
  }
  componentWilllUnmount() {
    destroyPagination(this.container.current);
  }
  render() {
    return (
      <div id="pagination-container" ref={this.container} className="mx-auto" />
    );
  }
}

Pagination.propTypes = PROP_TYPES;

export default Pagination;
