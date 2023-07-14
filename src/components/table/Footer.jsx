import React from "react";
import '/src/css/Footer.css';

function Footer() {
    return(
        <>
            <tfoot className="row">
                <th colspan="4" className="text-footer">
                    <span className="span-footer">&lt;&lt;</span>
                    <span className="span-footer">&lt;</span>
                    <span className="span-footer">1</span>
                    <span className="span-footer">2</span>
                    <span className="span-footer">3</span>
                    <span className="span-footer">&gt;</span>
                    <span className="span-footer">&gt;&gt;</span>
                </th>
            </tfoot>
        </>
    )
}

export default Footer;