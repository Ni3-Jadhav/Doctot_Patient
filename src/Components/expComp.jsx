import React, { useState } from 'react';


const ExpComp = () => {
    const [isTermsVisible, setIsTermsVisible] = useState(false);

    const showTerms = () => {
        setIsTermsVisible(!isTermsVisible);
    };

  return (
    <div className="form-checkbox">
    <div className="checkbox-container">
        <input type="checkbox" name="terms" id="terms" />
        <p>
            Accept All Terms & Conditions. <a onClick={showTerms} style={{ cursor: 'pointer' }}>Read All.</a>
        </p>
    </div>
    {isTermsVisible && (
        <div id="term-dropdown">
            <p>
                By registering with HealPoint Medical Clinic, you agree to adhere to our professional standards
                and provide compassionate, high-quality care to all patients.
            </p>
        </div>
    )}
</div>
  );
};

export default ExpComp;
