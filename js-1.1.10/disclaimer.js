var disclaimerText = "<form><div class='row'><div class='col-sm-12'><strong>Welcome to the DKA Calculator</strong><br><br>Please read and accept the disclaimer below to proceed.<br><br></div></div><div class='row'><div class='col-sm-1'></div><div class='col-sm-10'><div class='panel panel-default'><div class='panel-body'>By using this website and by using the template protocol, and the calculation formulae contained within it, you confirm that you accept the terms of this disclaimer. If you do not agree to such terms, you must not use this site. We are the owner or the licensee of all intellectual property rights in our site.<br><br>Our site is made available free of charge. We do not guarantee that our site, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of our site for business and operational reasons.<br><br>Although we make reasonable efforts to check this website, the template protocol, and the calculation formulae for accuracy, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete, free from error or up to date, and it remains strictly the treating clinician’s responsibility to check the protocol and calculated values produced by this website manually. The content on our site is provided for general information only. It is not intended to amount to advice on which you should rely.<br><br>The DKA calculator allows a maximum weight for age of +2SDS or 80kg (whichever is lower), and a minimum weight for age of -2SDS. There is the facility to override these weight limits but clinicians do this at their own risk and the BSPED accepts no liability for any adverse events. Neither BSPED nor the ICP or website authors accept any liability for any errors arising from the use of this tool or protocols generated.<br><br>We exclude all implied conditions, warranties, representations or other terms that may apply to our site or any content on it.<br><br>We will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with, use of, or inability to use, our site; or use of or reliance protocol and calculated values produced on our site.<br><br>We do not guarantee that our site will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programmes and platform to access our site. You should use your own virus protection software. You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material that is malicious or technologically harmful.<br><br>The terms of this disclaimer, its subject matter and its formation (and any non-contractual disputes or claims) are governed by English law. By using this website and the template protocol, and the calculation formulae contained within it, you confirm that you agree to the exclusive jurisdiction of the courts of England and Wales.</div></div></div></div></form>"

$(document).ready(function(){
    var dialog = bootbox.dialog({
        message: disclaimerText,
        size: 'large',
        backdrop: true,
        closeButton: false,
        buttons: {
            cancel: {
                label: 'Proceed'
            }
        }
    });
})