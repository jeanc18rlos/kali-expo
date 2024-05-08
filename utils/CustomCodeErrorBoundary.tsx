import React from "react";
import { Text, View } from "react-native";

export default class CustomCodeErrorBoundary extends React.Component<
  { children: React.ReactNode },
  {
    hasError: boolean;
    error: any;
  }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  render() {
    return (
      <>
        {this.state.hasError ? (
          <View style={{ padding: 8, backgroundColor: "red" }}>
            <Text style={{ color: "white" }}>
              There was a problem with the app, report this to the developer ?
            </Text>
            {this.state.error ? (
              <Text style={{ color: "white" }}>
                {`Error: ${this.state.error.toString()}`}
              </Text>
            ) : null}
          </View>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}
