function LoadRateTable() {
	var tBody = document.getElementById("rate-table-body");
	while (tBody.hasChildNodes()) {
	    tBody.removeChild(tBody.childNodes[0]);
    }
    for (var i = 0; i < rates.length; i++) {
		var trElement = document.createElement("tr");
		if (i & 1) trElement.className = "odd-row";
		else trElement.className = "even-row";

		var tdName = document.createElement("td");
		tdName.className = "bank-name";
		if (rates[i].name == "URBank") tdName.style.fontWeight = "bold";
		tdName.appendChild(document.createTextNode(rates[i].name));
		trElement.appendChild(tdName);

		var tdAPY = document.createElement("td");
		tdAPY.className = "bank-rates";
		tdAPY.appendChild(document.createTextNode(rates[i].apy));
		trElement.appendChild(tdAPY);

		var tdEarnings = document.createElement("td");
		tdEarnings.className = "bank-earnings";
		tdEarnings.appendChild(document.createTextNode(rates[i].earnings));
		trElement.appendChild(tdEarnings);

		tBody.appendChild(trElement);
    }

}

function ClickContractTab() {
	document.getElementById("header-tab-contract").className = 'header-tab-selected';
	document.getElementById("header-tab-services").className = 'header-tab';
	document.getElementById("header-tab-company").className = 'header-tab';
	document.getElementById("header-tab-employee").className = 'header-tab';
	document.getElementById("header-tab-home").className = 'header-tab';
	document.getElementById("footer-tab-contract").className = 'footer-tab-selected';
	document.getElementById("footer-tab-services").className = 'footer-tab';
	document.getElementById("footer-tab-company").className = 'footer-tab';
	document.getElementById("footer-tab-employee").className = 'footer-tab';
	document.getElementById("footer-tab-home").className = 'footer-tab';
}

function ClickServicesTab() {
	document.getElementById("header-tab-contract").className = 'header-tab';
	document.getElementById("header-tab-services").className = 'header-tab-selected';
	document.getElementById("header-tab-company").className = 'header-tab';
	document.getElementById("header-tab-employee").className = 'header-tab';
	document.getElementById("header-tab-home").className = 'header-tab';
	document.getElementById("footer-tab-contract").className = 'footer-tab';
	document.getElementById("footer-tab-services").className = 'footer-tab-selected';
	document.getElementById("footer-tab-company").className = 'footer-tab';
	document.getElementById("footer-tab-employee").className = 'footer-tab';
	document.getElementById("footer-tab-home").className = 'footer-tab';
}

function ClickCompanyTab() {
	document.getElementById("header-tab-contract").className = 'header-tab';
	document.getElementById("header-tab-services").className = 'header-tab';
	document.getElementById("header-tab-company").className = 'header-tab-selected';
	document.getElementById("header-tab-employee").className = 'header-tab';
	document.getElementById("header-tab-home").className = 'header-tab';
	document.getElementById("footer-tab-contract").className = 'footer-tab';
	document.getElementById("footer-tab-services").className = 'footer-tab';
	document.getElementById("footer-tab-company").className = 'footer-tab-selected';
	document.getElementById("footer-tab-employee").className = 'footer-tab';
	document.getElementById("footer-tab-home").className = 'footer-tab';
}

function ClickEmployeeTab() {
	document.getElementById("header-tab-contract").className = 'header-tab';
	document.getElementById("header-tab-services").className = 'header-tab';
	document.getElementById("header-tab-company").className = 'header-tab';
	document.getElementById("header-tab-employee").className = 'header-tab-selected';
	document.getElementById("header-tab-home").className = 'header-tab';
	document.getElementById("footer-tab-contract").className = 'footer-tab';
	document.getElementById("footer-tab-services").className = 'footer-tab';
	document.getElementById("footer-tab-company").className = 'footer-tab';
	document.getElementById("footer-tab-employee").className = 'footer-tab-selected';
	document.getElementById("footer-tab-home").className = 'footer-tab';
}

function ClickHomeTab() {
	document.getElementById("header-tab-contract").className = 'header-tab';
	document.getElementById("header-tab-services").className = 'header-tab';
	document.getElementById("header-tab-company").className = 'header-tab';
	document.getElementById("header-tab-employee").className = 'header-tab';
	document.getElementById("header-tab-home").className = 'header-tab-selected';
	document.getElementById("footer-tab-contract").className = 'footer-tab';
	document.getElementById("footer-tab-services").className = 'footer-tab';
	document.getElementById("footer-tab-company").className = 'footer-tab';
	document.getElementById("footer-tab-employee").className = 'footer-tab';
	document.getElementById("footer-tab-home").className = 'footer-tab-selected';
}

function ShowLoginDialog() {
	document.getElementById("modal-background").style.visibility = 'visible';
	document.getElementById("login-screen").style.visibility = 'visible';
}

function HideLoginDialog() {
	document.getElementById("modal-background").style.visibility = 'hidden';
	document.getElementById("login-screen").style.visibility = 'hidden';
}

function CompleteLoginDialog() {
	HideLoginDialog();
}

function ClickNewsTab() {
	document.getElementById("news-tab").className = 'news-tab-selected';
	document.getElementById("archive-tab").className = 'archive-tab-deselected';
	document.getElementById("archive-tab-content").style.display = 'none';
	document.getElementById("news-tab-content").style.display = 'block';
}

function ClickArchiveTab() {
	document.getElementById("news-tab").className = 'news-tab-deselected';
	document.getElementById("archive-tab").className = 'archive-tab-selected';
	document.getElementById("news-tab-content").style.display = 'none';
	document.getElementById("archive-tab-content").style.display = 'block';
}