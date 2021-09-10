import React from 'react';

const PageContent = (props) => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        {props.children}
      </div>
    </main>
  );
};

export default PageContent;
