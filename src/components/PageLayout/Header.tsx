import React from 'react';
import FvStore from '../../data/store';
import { Edition } from '../../data/edition';
import sgalogo from '../../images/sgalogo.png'
import variations from '../../images/intensity_legend.svg';
import EditionDot from '../helpers/EditionDot';

interface HeaderData {
    edition: Edition | undefined;
}

class Header extends React.Component<HeaderData> {

    render() {
        const editions = FvStore.editions.map((e, index) => 
            <label key={index} className='edition-label'><EditionDot edition={e} key={e.code}/>{e.name}</label>);
        let sga
        if (this.props.edition) {
            if (this.props.edition!.code === 'MS') {
                sga = <div id="sga">
                    <a href="http://shelleygodwinarchive.org/sc/oxford/frankenstein/volume/iii/#/p30"><img src={sgalogo}/></a>
                    <div>View the manuscript facsimile, transcription and more on the <a href="http://shelleygodwinarchive.org/sc/oxford/frankenstein/volume/iii/#/p30">Shelley-Godwin Archive</a></div>
                    <hr/>
                </div>
            }
        }
        return (
            <div>
                <header className='viewer__cols'>
                    <div id='viewer__legend-editions'>
                        {editions}
                    </div>
                    <div id='viewer__title'  className='center-label'>
                        {this.props.edition ?
                        <h2>{this.props.edition.name} Edition</h2>
                        : <h2>Edition</h2>}
                    </div>
                    <div id='viewer__legend-variance'>
                        <label>Amount of Variance</label>
                        <img className='variations' src={variations} alt="variations scale" />
                    </div>
                </header>

                <hr className='line' />
                <div className='viewer__cols'>
                    <div className='center-label'>Marginalia</div>
                    <div className='center-label'>Text</div>
                    <div className='center-label'>Variations</div>
                </div>
                {sga}
            </div>
        );
    }
}

export default Header;
