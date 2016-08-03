class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditor : true
        }
    }

    viewChange() {
        this.setState({
            isEditor: !this.state.isEditor
        });
    }

    render() {
        return <div>
            <button onClick={this.viewChange.bind(this)}>{this.state.isEditor ? "Preview" : "Edit"}</button>
            <div className={this.state.isEditor ? "" : "hidden"}>
                <Editor/>
            </div>
            <div className={this.state.isEditor ? "hidden" : ""}>
                <Preview/>
            </div>
        </div>;
    }
}

class Editor extends React.Component {
    render() {
        return <h1>Editor</h1>
    }
}

class Preview extends React.Component {
    render() {
        return <h1>Preview</h1>
    }
}

ReactDOM.render(<View/>, document.getElementById('app'));