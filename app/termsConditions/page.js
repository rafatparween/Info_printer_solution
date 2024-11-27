'use client';

const Home = () => {
    return (
        <div className="bg-white p-10">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-8">General Terms & Conditions</h1>

            {/* Content */}
            <div className="space-y-8 text-gray-700 leading-relaxed">

                {/* Acceptance of General Terms & Conditions */}
                <section>
                    <h2 className="text-xl font-bold mb-2">Acceptance of General Terms & Conditions</h2>
                    <p>Thank you for visiting <a href="https://www.eztechprintersolutions.com" className="underline">www.eztechprintersolutions.com</a> (“<strong>Site</strong>” or “<strong>EzTech PrinterSolutions</strong>”). Please read these General Terms and Conditions (“<strong>Terms</strong>”) carefully. These Terms govern your access and use of this Site, which is operated by EzTech PrinterSolutions, a company registered under the relevant laws of India, with its registered office located at [insert address]. By accessing or using this Site, you confirm that you are competent to contract under the relevant local laws and agree to be bound by these Terms and any additional guidelines or rules that may be posted in connection with specific sections or services on this Site. EzTech PrinterSolutions reserves the right to update these Terms at its discretion at any time without prior notice. Any changes to the Terms will be effective upon posting. Your continued use of the Site after changes have been posted constitutes your acceptance of the modified Terms.</p>
                    <p>You also agree that we may provide all legal communications and notices to you electronically by posting them on our Site or, at our discretion, by sending an e-mail to the address you provided when you registered on the Site. You may withdraw your consent to receive communications electronically by contacting customer support. However, if you withdraw consent, you must discontinue using the Site.</p>
                </section>

                {/* Eligibility to Use */}
                <section>
                    <h2 className="text-xl font-bold mb-2">Eligibility to Use</h2>
                    <p>Use of the Site is available only to individuals who are legally able to contract under the Indian Contract Act, 1872. Individuals who are "incompetent to contract" under the Indian Contract Act, such as minors or un-discharged insolvents, are not eligible to use the Site.</p>
                    <p>If a minor wishes to use or transact on the Site, they must do so through a legal guardian or parent.</p>
                    <p>By accepting the Terms or using the Site, you confirm that you are 18 years or older and capable of entering into a binding contract.</p>
                </section>

                {/* Copyrighted Materials for Limited Use */}
                <section>
                    <h2 className="text-xl font-bold mb-2">Copyrighted Materials for Limited Use</h2>
                    <p>This Site contains graphics, photographs, images, text, fonts, software tools, and other content (referred to as “<strong>Content</strong>”). The Content and the Site are the copyrighted property of EzTech PrinterSolutions or its licensors. All rights are reserved. You are prohibited from retaining, copying, distributing, or using any portion of the Content except as expressly allowed in these Terms. EzTech PrinterSolutions may modify or remove Content at any time without notice. The design tools provided on this Site are for limited use, and you do not gain any ownership rights over the content created using these tools. You agree to not infringe upon third-party intellectual property rights, and it is your responsibility to ensure any logo or design you create does not violate trademarks or other intellectual property laws.</p>
                </section>

                {/* Use of Site */}
                <section>
                    <h2 className="text-xl font-bold mb-2">Use of Site</h2>
                    <p>
                        You are granted permission to access and use the Site for the purpose of preparing, evaluating, and ordering products or services exclusively from EzTech PrinterSolutions (“Products”). You may not download, retain, or distribute Content other than for the creation of the ordered Products. You are responsible for ensuring that any third-party content you incorporate into your Products does not infringe upon copyright, trademark, or privacy rights. You also agree not to use the Site for unlawful, offensive, or harmful purposes.
                    </p>
                </section>

                {/* Taxes */}
                <section>
                    <h2 className="text-xl font-bold mb-2">Taxes</h2>
                    <p>
                        You agree to pay any applicable taxes, including GST or other similar taxes, imposed by relevant authorities. You are responsible for providing accurate tax details such as your GST registration number and Entity Name, if applicable. Failure to provide accurate tax information may result in your order being treated as “unregistered,” and you may not be able to avail input tax credit. Any tax liabilities resulting from inaccurate details or non-compliance will be your responsibility.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Home;
