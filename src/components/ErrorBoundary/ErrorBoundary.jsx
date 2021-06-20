import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo, error });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <div>
            <p>
              There was an error in loading this page.
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <span
                className="link"
                onClick={() => {
                  global.window.location.reload();
                }}
              >
                Reload this page
              </span>
            </p>
          </div>
        </div>
      );
    }

    return children;
  }
}
