import React, { Component } from 'react';
import {FaPlus} from 'react-icons/fa/'

export default class ISI extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            showISI: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({showISI: !this.state.showISI});
    }

    render() {

        // let {showISI} = this.state;

    // let ISIDropDown = showISI ? 'show-ISI show-position' : 'show-ISI';

    return(
        <div className="isi-container">
            <div className="h3-container">
                <h3>Important Safety Information</h3>
                <div style={{color: '#F3F3F3'}}><FaPlus /></div>
            </div>

            <div className="medication-info">
                <p>ALLERGY DRUG is contraindicated in patients with hypersensitivity to revefenacin or any component of this product.</p>

                <p>ALLERGY DRUG should not be initiated in patients during acutely deteriorating or potentially life-threatening episodes of COPD, or for the relief of acute symptoms, i.e., as rescue therapy for the treatment of acute episodes of bronchospasm. Acute symptoms should be treated with an inhaled short-acting beta2-agonist.</p>

                <p>As with other inhaled medicines, ALLERGY DRUG can produce paradoxical bronchospasm that may be life-threatening. If paradoxical bronchospasm occurs following dosing with ALLERGY DRUG, it should be treated immediately with an inhaled, short-acting bronchodilator. ALLERGY DRUG should be discontinued immediately and alternative therapy should be instituted.</p>

                <p>ALLERGY DRUG should be used with caution in patients with narrow-angle glaucoma. Patients should be instructed to immediately consult their healthcare provider if they develop any signs and symptoms of acute narrow-angle glaucoma, including eye pain or discomfort, blurred vision, visual halos or colored images in association with red eyes from conjunctival congestion and corneal edema.</p>

                <p>Worsening of urinary retention may occur. Use with caution in patients with prostatic hyperplasia or bladder-neck obstruction and instruct patients to contact a healthcare provider immediately if symptoms occur.</p>

                <p>Immediate hypersensitivity reactions may occur after administration of ALLERGY DRUG. If a reaction occurs, ALLERGY DRUG should be stopped at once and alternative treatments considered.</p>

                <p>The most common adverse reactions occurring in clinical trials at an incidence greater than or equal to 2% in the ALLERGY DRUG group, and higher than placebo, included cough, nasopharyngitis, upper respiratory infection, headache and back pain.</p>

                <p>Coadministration of anticholinergic medicines or OATP1B1 and OATP1B3 inhibitors with ALLERGY DRUG is not recommended.</p>

                <p>ALLERGY DRUG is not recommended in patients with any degree of hepatic impairment.</p>

                <p>Indication <br/>
	            ALLERGY DRUG™ inhalation solution is indicated for the maintenance treatment of patients with chronic seasonal allergies.</p>
            </div>
        </div>
    )
    }
}