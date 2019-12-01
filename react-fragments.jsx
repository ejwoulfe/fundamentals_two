// Fragments allow you to group a list of children (elements/nodes) without adding any extra nodes to the DOM.

class ExampleComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default ExampleComponent;
