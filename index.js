class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditor: true,
            formLists: []
        }
    }

    viewChange() {
        this.setState({
            isEditor: !this.state.isEditor
        });
    }

    addElement(type) {
        let formLists = this.state.formLists;
        formLists.push(type);
        this.setState({
            formLists: formLists
        });
    }

    render() {
        return <div>
            <button onClick={this.viewChange.bind(this)}>{this.state.isEditor ? "Preview" : "Edit"}</button>
            <div className={this.state.isEditor ? "" : "hidden"}>
                <Editor onAdd={this.addElement.bind(this)} formLists={this.state.formLists}/>
            </div>
            <div className={this.state.isEditor ? "hidden" : ""}>
                <Preview/>
            </div>
        </div>;
    }
}

class Editor extends React.Component {
    render() {
        return <div>
            <RightButton onAdd={this.props.onAdd}/>
            <LeftPanel formLists={this.props.formLists}/>
        </div>;
    }
}

class LeftPanel extends React.Component {
    render() {
        const formLists = this.props.formLists.map((formList, index) => {
            return <div key={index}>
                <input type={formList}/>
                <button>X</button>
            </div>
        });

        return <div>
            {formLists}
        </div>
    }
}

class RightButton extends React.Component {
    add(type) {
        this.props.onAdd(type);
    }

    render() {
        return <div>
            <button onClick={this.add.bind(this, 'text')}>Text</button>
            <button onClick={this.add.bind(this, 'date')}>Date</button>
        </div>
    }
}

class Preview extends React.Component {
    render() {
        return <h1>Preview</h1>
    }
}

ReactDOM.render(<View/>, document.getElementById('app'));