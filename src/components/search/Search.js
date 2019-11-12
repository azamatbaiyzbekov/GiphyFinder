import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';

class Search extends Component {
    state = {
        search: '',
        amount: 10,
        apiUrl: 'https://api.giphy.com/v1/gifs/search',
        apiKey: '8ve7HgxexCC2jqsm5FzBodjJVukUD6Ue',
        gifs: []
    };

    onTextChange = event => {
        const val = event.target.value
        this.setState({[event.target.name]: val}, () => {
            if (val === '') {
                this.setState({gifs: [] });
            } else {
                axios.get(`${this.state.apiUrl}?api_key=${this.state.apiKey}&q=${this.state.search}&limit=${this.state.amount}&offset=O&rating=G&lang=eng`)
                .then(res => this.setState({gifs: res.data.data}))
                .catch(err => console.log(err));
            }
            
        });
    };


    onAmountChange = (event, index, value) => this.setState({amount: value })



    render() {
        console.log(this.state.gifs)
        return (
            <div>
                <TextField
                    name="search"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search For GIFs..."                    fullWidth={true}
                />
                <br/>
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50" />

                 </SelectField>



                <br/>
                {this.state.gifs.length > 0 ? (<ImageResults images={this.state.gifs} />) : null}

            </div>
        )
    }
}

export default Search;