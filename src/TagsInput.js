import React from 'react'
import TagInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.


class TagsInput extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            tags: ['ewvvv', 'rvservreb', 'rfwrw4gtertg'],
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(changedTags) {
        console.log("[handleChange]",changedTags);
        this.setState({tags: changedTags});
    }

    render() {
        const { tags } = this.state;
        return (
            <form>
                <TagInput
                    name='form'
                    value={tags}
                    onChange={this.handleChange}
                    onlyUnique
                    validate={(tag) => {
                        console.log('[validate]', tag);
                        return false;
                    }}
                />
            </form>
        )
    }
}

export default TagsInput;
