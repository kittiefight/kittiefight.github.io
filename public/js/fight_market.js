$(() => {
  // pagination
  (function(name) {
    const container = $(`#pagination-${name}`);
    const sources = (function() {
      const result = [];

      for (let i = 1; i < 196; i++) {
        result.push(i);
      }

      return result;
    })();

    const options = {
      dataSource: sources,
      callback(response, pagination) {
        window.console && console.log(response, pagination);

        let dataHtml = '<ul>';

        $.each(response, (index, item) => {
          dataHtml += `<li>${item}</li>`;
        });

        dataHtml += '</ul>';

        container.prev().html(dataHtml);
      },
    };

    // $.pagination(container, options);

    container.addHook('beforeInit', () => {
      window.console && console.log('beforeInit...');
    });
    container.pagination(options);

    container.addHook('beforePageOnClick', () => {
      window.console && console.log('beforePageOnClick...');
      // return false
    });
  })('container');
  // end pagination
});
