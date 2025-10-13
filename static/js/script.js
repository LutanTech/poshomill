function checkdont() {
  var _0x4b1549 = localStorage.getItem("Dont");
  var _0x59cf46 = document.getElementById("continue");
  var _0x249f3a = document.getElementById("dontact");
  if (_0x4b1549) {
    _0x59cf46.click();
    _0x249f3a.style.display = 'block';
  } else {
    return;
    _0x249f3a.style.display = 'none';
  }
}
function removedont() {
  localStorage.removeItem("Dont");
  alert("Information page restored. You page will reload automatically");
  document.getElementById("reload").click();
}
var landingPage = document.getElementById("landing-loading-page");
setTimeout(() => {
  loadsave();
  landingPage.style.display = 'none';
}, 0x3a98);
var continueto = document.getElementById("continue");
var info = document.getElementById("info-backg");
continueto.addEventListener("click", () => {
  info.style.display = "none";
});
setInterval(() => animated(), 0x1388);
function animated() {
  var _0x3657dd = document.getElementById("allgoods");
  _0x3657dd.style.animation = "dig 25s infinite";
}
var whatinner = document.getElementById("What43edo7yout34want").value;
var flourgrindingDiv = document.getElementById("flour-making-items_border");
var whatdoyouwant = document.getElementById("What43edo7yout34want");
var buyC = document.getElementById("buy_cereals_Main");
var AllGoods = document.getElementById("all-cereals-availableDiv");
function nullify() {
  flourgrindingDiv.style.display = "none";
  buyC.style.display = "none";
  AllGoods.style.display = 'none';
}
function checkvalue() {
  loadsave();
  var _0x56ea9e = document.getElementById("What43edo7yout34want").value;
  var _0x52b6b4 = document.getElementById("flour-making-items_border");
  var _0x4cfabf = document.getElementById("buy_cereals_Main");
  var _0x330ab7 = document.getElementById("state");
  var _0x26d2cc = document.getElementById("all-cereals-availableDiv");
  var _0x51791c = document.getElementById("statusofservice");
  if (_0x56ea9e == 'Kusiaga') {
    nullify();
    _0x52b6b4.style.display = "block";
  }
  if (_0x56ea9e == "Buy Cereals") {
    nullify();
    _0x4cfabf.style.display = "block";
    _0x330ab7.innerHTML = "purchase";
    _0x51791c.innerHTML = "purchase";
  }
  if (_0x56ea9e == "Book Cereals") {
    nullify();
    _0x4cfabf.style.display = "block";
    _0x330ab7.innerHTML = 'book';
    _0x51791c.innerHTML = 'book';
  }
  if (_0x56ea9e == "Order Delivery") {
    nullify();
    _0x4cfabf.style.display = "block";
    _0x330ab7.innerHTML = "order";
    _0x51791c.innerHTML = " order";
  }
  if (_0x56ea9e == "View Goods") {
    nullify();
    _0x26d2cc.style.display = "block";
  } else {
    null;
  }
}
function productSelected(_0x12bcbd) {
  var _0x374eee = document.getElementById('product-selected-div-specifications');
  _0x374eee.style.display = 'block';
  setTimeout(() => deliveryInfo(), 0x7d0);
  var _0x18a99a = document.getElementById("status");
  var _0x296d9c = document.getElementById("state");
  var _0x2fb835 = document.getElementById("statusb");
  var _0x2a4028 = document.getElementById("itemselectedb");
  _0x18a99a.innerHTML = _0x296d9c.innerHTML;
  _0x2fb835.innerHTML = _0x296d9c.innerHTML;
  var _0x258f69 = document.getElementById('itemselected');
  _0x258f69.innerHTML = _0x12bcbd.innerText;
  var _0x2b53ea = _0x12bcbd.innerText.toLowerCase();
  _0x2a4028.innerText = _0x12bcbd.innerText;
  var _0x5c929c = document.getElementById("priceinner");
  switch (_0x2b53ea) {
    case "sorghum":
      _0x5c929c.innerText = "125";
      break;
    case "maize":
      _0x5c929c.innerText = '65';
      break;
    case "millet":
      _0x5c929c.innerText = "130";
      break;
    case "corn maize":
      _0x5c929c.innerText = "130";
      break;
    case "grinded maize":
      _0x5c929c.innerText = '70';
      break;
    case "beans":
      _0x5c929c.innerText = "125";
      break;
    case "rice":
      _0x5c929c.innerText = "120";
      break;
    case "ground nuts":
      _0x5c929c.innerText = "250";
      break;
    case "ndengu":
      _0x5c929c.innerText = "225";
      break;
    case 'cassava':
      _0x5c929c.innerText = "125";
      break;
    case "unga(maize flour)":
      _0x5c929c.innerText = "specify below";
      break;
    default:
      _0x5c929c.innerText = '0';
  }
}
var G1 = document.getElementById('G1');
G1.addEventListener("click", () => {
  document.getElementById('priceinner').innerText = '80';
  G1.disabled = false;
  G2.disabled = true;
});
var G2 = document.getElementById('G2');
G2.addEventListener("click", () => {
  document.getElementById("priceinner").innerText = '70';
  G1.disabled = true;
  G2.disabled = false;
});
var clear = document.getElementById('clear');
loadsave();
clear.addEventListener('click', () => {
  var _0x46ebae = document.getElementById("Quantity");
  _0x46ebae.disabled = false;
  document.getElementById("Total").innerHTML = '0';
  document.getElementById("Quantitydisp").innerHTML = '0';
  document.getElementById('G1').disabled = false;
  document.getElementById('G2').disabled = false;
  document.getElementById("Quantitydisp").innerText = '0';
  document.getElementById("ItemType").innerText = "null";
  deliveryInfo();
});
var buttons = document.querySelectorAll(".buttons_flex button");
buttons.forEach(function (_0xa15209) {
  _0xa15209.addEventListener("click", function () {
    load();
    productSelected(this);
    ungadivshow();
  });
});
function ViewPrices() {
  load();
  var _0x138750 = document.getElementById("all-cereals-availableDiv");
  nullify();
  _0x138750.style.display = "block";
}
function ViewPricesclose() {
  var _0x116305 = document.getElementById("all-cereals-availableDiv");
  nullify();
  _0x116305.style.display = 'none';
}
var Quantityinp = document.getElementById('Quantity');
Quantityinp.disabled = false;
var Quantityinp = document.getElementById('Quantity');
var Quantity = document.getElementById("Quantity").value;
Quantityinp.addEventListener("input", () => {
  var _0x2facc8 = document.getElementById("Quantity");
  var _0x87618d = document.getElementById("Quantity").value;
  if (_0x87618d > 0x64) {
    _0x2facc8.disabled = true;
    alert("Maximum purchase quantity is 100Kgs!");
    loadsave();
    document.getElementById('clear').click();
  }
});
function closeProductSelection() {
  loadsave();
  var _0x2b6828 = document.getElementById("product-selected-div-specifications");
  _0x2b6828.style.display = "none";
}
var nmbg = document.getElementById("input-name-background");
var Sn = document.getElementById("SaveName");
var usnInput = document.getElementById('Username');
var nm = document.getElementById("Username").value;
Sn.disabled = true;
usnInput.addEventListener("input", () => {
  var _0x9442d9 = document.getElementById("SaveName");
  var _0x12f717 = document.getElementById("Username").value;
  _0x9442d9.disabled = true;
  if (_0x12f717.length < 0x3) {
    _0x9442d9.disabled = true;
  } else {
    _0x9442d9.disabled = false;
  }
});
function bookdateshow() {
  loadsave();
  var _0x30babb = document.getElementById('status');
  var _0x17cbdc = document.getElementById("bookdates");
  if (_0x30babb.innerText === "Book" || _0x30babb.innerText === "book") {
    _0x17cbdc.style.display = "block";
  } else {
    _0x17cbdc.style.display = "none";
  }
}
SaveName.addEventListener("click", () => {
  loadsave();
  var _0x47e42a = document.getElementById("SaveName");
  var _0x130820 = document.getElementById("Username").value;
  _0x47e42a.disabled = true;
  setTimeout(() => {
    alert("Your name has been saved successfully!");
    localStorage.setItem("Name", _0x130820);
    nmbg.style.display = "none";
  }, 0xbb8);
});
function checkname() {
  var _0xb2f6c5 = document.getElementById("input-name-background");
  var _0x2bfe58 = localStorage.getItem("Name");
  if (_0x2bfe58) {
    _0xb2f6c5.style.display = "none";
    checkdont();
  } else {
    _0xb2f6c5.style.display = "block";
    setInterval(() => updatenm(), 0x7d0);
    checkdont();
  }
}
setTimeout(() => checkname(), 0xc8);
function updatenm() {
  var _0x579015 = document.getElementById("Buyersname");
  var _0x2c5983 = localStorage.getItem("Name");
  _0x579015.innerHTML = _0x2c5983;
  var _0xddee18 = document.getElementById("customerName");
  var _0x40b71c = document.getElementById('welcomeName');
  _0x40b71c.innerHTML = _0x579015.innerHTML;
  _0xddee18.innerHTML = _0x579015.innerHTML;
  var _0x3eb2ca = document.getElementById('statusofservice');
  var _0x3f040b = document.getElementById("statusb");
  _0x3eb2ca.innerHTML = _0x3f040b.innerHTML;
  checkdont();
}
setTimeout(() => updatenm(), 0x1388);
function prepareSend() {
  load();
  copyToClipboard();
  const cartText = document.getElementById("Cart")?.innerText || "No message";
  const popup = window.open(`https://wa.me/${"254717233222"}?text=${encodeURIComponent(cartText)}`, "_blank");
  if (!popup || popup.closed || typeof popup.closed == "undefined") {
    alert("Pop-up blocked! Please allow pop-ups for this site.");
  }
}
function proceed() {
  load();
  copyToClipboard();
  setTimeout(() => prepareSend(), 0xbb8);
}
function copyToClipboard() {
  const _0x49303a = document.getElementById('Cart');
  const _0xe280df = document.createRange();
  _0xe280df.selectNode(_0x49303a);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(_0xe280df);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert("You are being redirected to Whatsapp / Whatsapp web. Just press the send key once Whatsapp opens. If it redirects you to whatsapp web and you have whatsapp installed, press 'continue with app' on the pop up in the whatsapp web.");
}
var Quantity = document.getElementById("Quantity");
var Name = document.getElementById("customerName");
Name.innerHTML = localStorage.getItem("Name");
Quantity.addEventListener("input", () => {
  var _0x3d1651 = document.getElementById("itemselectedb");
  var _0x3e6f6c = document.getElementById('Quantity').value;
  var _0x444b55 = document.getElementById('Quantitydisp');
  if (_0x3e6f6c == '0' || _0x3e6f6c == '') {
    document.getElementById("clear").click();
  } else {
    bookdateshow();
    ItemType.innerHTML = _0x3d1651.innerText;
    _0x444b55.innerHTML = _0x3e6f6c + " Kgs";
    calculateTotal();
  }
});
function pbtn() {
  loadsave();
  var _0x3a63ff = document.getElementById('Quantitydisp').innerHTML;
  var _0x598999 = document.getElementById("status");
  var _0x3e3166 = document.getElementById("proceed-btn");
  if (_0x3a63ff.length < 0x5) {
    _0x3e3166.disabled = true;
  } else {
    if (_0x598999.innerText === "Book") {
      _0x3e3166.disabled = false;
    }
    if (_0x598999.innerText === "Purchase") {
      _0x3e3166.disabled = false;
    }
    if (_0x598999.innerText === "Order") {
      _0x3e3166.disabled = false;
    }
  }
}
setInterval(() => pbtn(), 0x3e8);
var paid = document.getElementById("paid-true");
paid.addEventListener("click", () => {
  var _0x17b727 = document.getElementById("mpesadet");
  if (paid.checked) {
    _0x17b727.style.display = "block";
    _0x17b727.style.animation = "flash 2s infinite";
    loadsave();
  } else {
    _0x17b727.style.display = "none";
  }
});
var mpnminput = document.getElementById("mpnminput");
mpnminput.addEventListener('input', () => {
  loadsave();
  var _0x40dce7 = document.getElementById('mpnminput').value;
  var _0x57d870 = document.getElementById("mpname");
  var _0x5e5395 = document.getElementById('Mpesaname');
  var _0x150e01 = document.getElementById("mpesadet");
  _0x57d870.style.display = "block";
  _0x5e5395.innerHTML = _0x40dce7;
  _0x150e01.style.animation = "none";
});
var dateInput = document.getElementById('dateInput');
dateInput.addEventListener('input', () => {
  var _0x12bc3f = dateInput.value;
  var _0x2266bf = document.getElementById("Pickupdate");
  var _0x177f58 = document.getElementById("innerdate");
  alert("The date you've set is " + _0x12bc3f);
  _0x2266bf.style.display = "block";
  _0x177f58.innerText = _0x12bc3f;
  loadsave();
});
let today = new Date().toISOString().split('T')[0x0];
let maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 0x7);
maxDate = maxDate.toISOString().split('T')[0x0];
document.getElementById("dateInput").setAttribute("min", today);
document.getElementById("dateInput").setAttribute("max", maxDate);
function calculateTotal() {
  loadsave();
  var _0xd2e122 = document.getElementById("Quantity").value;
  var _0x457d26 = document.getElementById("Total");
  var _0x12fb3a = document.getElementById('priceinner').innerText;
  var _0x35bc0d = parseFloat(_0x12fb3a);
  var _0x34526e = _0xd2e122 * _0x35bc0d;
  _0x457d26.innerText = "Ksh." + _0x34526e;
}
function closeinfo() {
  load();
  document.getElementById('deliveryInfoBackground').style.display = 'none';
}
function sdi() {
  load();
  document.getElementById("deliveryInfoBackground").style.display = 'block';
}
var save = document.getElementById('savedeliveryinfo');
save.addEventListener("click", () => {
  var _0x1a1a10 = document.getElementById("locality").value;
  var _0x535616 = document.getElementById("apartment").value;
  var _0x44089c = document.getElementById("roomno").value;
  var _0x213ebd = document.getElementById("phonenumber").value;
  if (_0x1a1a10.length < 0x4 || _0x44089c.length < 0x1 || _0x213ebd.length < 0xa || _0x535616.length < 0x2) {
    return;
  } else {
    savedeliveryinfo();
    loadtime();
    setTimeout(() => {
      closeinfo();
    }, 0x1388);
  }
});
function loadtime() {
  var _0x1cc96a = document.getElementById("loaderbackground");
  var _0x4c902d = document.getElementById("loader");
  var _0x48e5c5 = document.getElementById('okaysave');
  _0x1cc96a.style.display = "block";
  setTimeout(() => _0x4c902d.style.display = "none", 0x1194);
  setTimeout(() => _0x48e5c5.style.display = 'block', 0x11c6);
}
var oks = document.getElementById("okaysave");
oks.addEventListener("click", () => {
  document.getElementById("loaderbackground").style.display = 'none';
});
function load() {
  var _0x4b9180 = document.getElementById("loadermain");
  _0x4b9180.style.display = "block";
  setTimeout(() => _0x4b9180.style.display = "none", 0xdac);
}
function updateInternetStatus() {
  const _0x5c3097 = document.getElementById("no-internet");
  if (!navigator.onLine) {
    _0x5c3097.style.display = "block";
  } else {
    loadsave();
    _0x5c3097.style.display = 'none';
  }
}
window.addEventListener("load", updateInternetStatus);
window.addEventListener('online', updateInternetStatus);
window.addEventListener("offline", updateInternetStatus);
updateInternetStatus();
var noInternetDiv = document.getElementById("no-internet");
noInternetDiv.addEventListener('click', () => {
  alert("Please check your internet connection. You are currently offline!");
});
function loadsave() {
  var _0x146776 = document.getElementById("loadersave");
  _0x146776.style.display = "block";
  setTimeout(() => {
    _0x146776.style.display = "none";
  }, 0x2710);
}
function aisearch() {
  var _0xb94f4d = document.getElementById("ailoader");
  _0xb94f4d.style.display = "block";
  setTimeout(() => _0xb94f4d.style.display = "none", 0x1194);
}
function navpsee() {
  var _0x2b793f = document.getElementById('quickaccess');
  var _0x58f67c = document.getElementById("navigationpane");
  _0x58f67c.classList.add("seen");
  _0x2b793f.content = '';
}
navpclose();
function navpclose() {
  var _0x448cce = document.getElementById("navigationpane");
  _0x448cce.classList.remove('seen');
  _0x448cce.content = '';
}
function deliveryInfo() {
  navpclose();
  loadsave();
  var _0x569a1a = document.getElementById("status");
  var _0x2958be = document.getElementById("delivery");
  if (_0x569a1a.innerText === 'Order' || _0x569a1a.innerText === "order") {
    _0x2958be.style.display = "block";
    statusofservice.innerText = "order";
  } else {
    _0x2958be.style.display = 'none';
  }
}
function savedeliveryinfo() {
  document.getElementById("proceed-btn").disabled = false;
  document.getElementById("deliverydetails").style.display = 'block';
  var _0x1e5f2c = document.getElementById("locality").value;
  var _0x333137 = document.getElementById('apartment').value;
  var _0x267c50 = document.getElementById("roomno").value;
  var _0x4bbebf = document.getElementById("phonenumber").value;
  document.getElementById("locality-output").innerText = _0x1e5f2c;
  document.getElementById('apartment-output').innerText = _0x333137;
  document.getElementById('roomno-output').innerText = _0x267c50;
  document.getElementById("mobileno-output").innerText = _0x4bbebf;
  document.getElementById("proceed-btn").disabled = false;
}
function ungasee() {
  var _0x4e03f2 = document.getElementById("unga-div");
  if (_0x4e03f2.classList.contains("seen")) {
    _0x4e03f2.classList.remove("seen");
  } else {
    _0x4e03f2.classList.add('seen');
  }
}
function ungadivshow() {
  loadsave();
  var _0x458b8d = document.getElementById("itemselected");
  var _0x131bfc = document.getElementById('unga-grade');
  if (_0x458b8d.innerText === "Unga(Maize Flour)") {
    _0x131bfc.style.display = 'block';
  } else {
    _0x131bfc.style.display = 'none';
  }
}
function viewnav() {
  document.getElementById('continue').click();
  closeinfo();
  closeProductSelection();
  setTimeout(() => ViewPrices(), 0x7d0);
}
function buygoodsflash() {
  closeinfo();
  closeProductSelection();
  closeinfo();
  navpclose();
  var _0x1fb944 = document.getElementById("What43edo7yout34want");
  document.querySelector(".togglemenu").click();
  document.getElementById("continue").click();
  setTimeout(() => {
    _0x1fb944.style.animation = "bxs 2s infinite";
  }, 0x3e8);
  setTimeout(() => _0x1fb944.style.animation = "none", 0x2710);
}
function searchgoodsflash() {
  closeinfo();
  closeProductSelection();
  closeinfo();
  navpclose();
  closeinfo();
  var _0x3946a1 = document.getElementById("search-div");
  document.querySelector('.togglemenu').click();
  document.getElementById("continue").click();
  setTimeout(() => {
    _0x3946a1.style.animation = "bxs 2s infinite";
  }, 0x7d0);
  setTimeout(() => _0x3946a1.style.animation = 'none', 0x2710);
}
function menushow() {
  var _0x568817 = document.getElementById("navigationpane");
  _0x568817.classList.toggle("visible");
}
function dsi() {
  localStorage.setItem('Dont', "Dont show info Div again.");
}
const mockDatabase = [{
  'id': 0x1,
  'item': "Maize",
  'price': {
    '2kg': "Ksh. 130",
    '1kg': "Ksh. 65",
    '1/2kg': "Ksh. 35"
  }
}, {
  'id': 0x2,
  'item': "Grinded Maize",
  'price': {
    '2kg': "Ksh. 140",
    '1kg': "Ksh. 70",
    '1/2kg': "Ksh. 40"
  }
}, {
  'id': 0x3,
  'item': "Corn Maize",
  'price': {
    '2kg': "Ksh. 400",
    '1kg': "Ksh. 200",
    '1/2kg': "Ksh. 100"
  }
}, {
  'id': 0x4,
  'item': "Millet",
  'price': {
    '2kg': "Ksh. 300",
    '1kg': "Ksh. 150",
    '1/2kg': "Ksh. 75"
  }
}, {
  'id': 0x5,
  'item': "Wheat",
  'price': {
    '2kg': "Ksh. 250",
    '1kg': "Ksh. 125",
    '1/2kg': "Ksh. 65"
  }
}, {
  'id': 0x6,
  'item': "Sorghum",
  'price': {
    '2kg': "Ksh. 250",
    '1kg': "Ksh. 125",
    '1/2kg': "Ksh. 65"
  }
}, {
  'id': 0x7,
  'item': "Groundnuts",
  'price': {
    '2kg': "Ksh. 500",
    '1kg': "Ksh. 250",
    '1/2kg': "Ksh. 125"
  }
}, {
  'id': 0x8,
  'item': "Cassava",
  'price': {
    '2kg': "Ksh. 250",
    '1kg': "Ksh. 125",
    '1/2kg': "Ksh. 65"
  }
}, {
  'id': 0x9,
  'item': "Ndengu",
  'price': {
    '2kg': "Ksh. 450",
    '1kg': "Ksh. 225",
    '1/2kg': "Ksh. 115"
  }
}, {
  'id': 0xa,
  'item': "Rice",
  'price': {
    '2kg': "Ksh. 240",
    '1kg': "Ksh. 120",
    '1/2kg': "Ksh. 60"
  }
}, {
  'id': 0xb,
  'item': "Beans",
  'price': {
    '2kg': "Ksh. 250",
    '1kg': "Ksh. 125",
    '1/2kg': "Ksh. 65"
  }
}];
const idx = lunr(function () {
  this.ref('id');
  this.field("item");
  console.log("Lunr is Running");
  mockDatabase.forEach(_0x429ed4 => {
    this.add(_0x429ed4);
  });
});
document.getElementById("search-btn").addEventListener("click", () => {
  const _0x8a6e1c = document.getElementById("searchQuery").value.trim().toLowerCase();
  var _0x56c4ce = document.getElementById('results');
  _0x56c4ce.innerHTML = '';
  if (!_0x8a6e1c || _0x8a6e1c.length < 0x2) {
    return;
  }
  aisearch();
  setTimeout(() => {
    const _0x4cdcf8 = idx.search(_0x8a6e1c);
    displayResults(_0x4cdcf8, _0x8a6e1c);
  }, 0x1194);
});
function displayResults(_0x3fdd01, _0x41c6a0) {
  const _0x13a270 = document.getElementById("results");
  _0x13a270.innerHTML = '';
  if (_0x3fdd01.length > 0x0) {
    _0x3fdd01.forEach(_0x19830e => {
      const _0x15b139 = mockDatabase.find(_0x113eaf => _0x113eaf.id == _0x19830e.ref);
      const _0x9eda9e = highlightText(_0x15b139.item, _0x41c6a0);
      const _0x17c69b = _0x15b139.price;
      const _0x1e6bde = "\n<hr>\n<div><b>2kg: </b>" + highlightText(_0x17c69b["2kg"], _0x41c6a0) + "</div>\n\n<div><b>1kg:</b> " + highlightText(_0x17c69b["1kg"], _0x41c6a0) + "</div>\n\n<div><b>1/2kg:</b> " + highlightText(_0x17c69b["1/2kg"], _0x41c6a0) + "</div>\n";
      const _0x552f11 = document.createElement("div");
      _0x552f11.className = "result-item";
      _0x552f11.innerHTML = "<p></p><b style='font-size:1.5em; color:Green;'><hr>Item: " + _0x9eda9e + "</b><br>" + _0x1e6bde;
      _0x13a270.appendChild(_0x552f11);
    });
  } else {
    _0x13a270.textContent = "No results found.";
  }
}
function highlightText(_0x39b1fe, _0x4be772) {
  const _0x240228 = new RegExp('(' + _0x4be772 + ')', 'gi');
  return _0x39b1fe.replace(_0x240228, "<span class=\"highlight\">$1</span>");
}
function divaiload() {
  try {
    if (typeof lunr === "undefined") {
      throw new Error("Please check you network connection. Lunr is not running");
    }
  } catch (_0x48eb3f) {
    console.error(_0x48eb3f);
    var _0x10410b = document.getElementById("ailoader");
    _0x10410b.style.display = 'block';
  }
}
window.onbeforeunload = function (_0x366ce0) {
  var _0x2d0917 = document.getElementById("quantity").value;
  var _0x33813a = document.getElementById('bookdates').value;
  if (_0x2d0917.trim() !== '') {
    _0x366ce0.returnValue = "You have unsaved changes. Are you sure you want to leave?";
    return "You have unsaved changes. Are you sure you want to leave?";
  } else {
    if (_0x33813a.trim() !== '') {
      _0x366ce0.returnValue = message;
      return message;
    }
  }
};
document.getElementById('searchQuery').addEventListener('input', () => {
  divaiload();
});
setTimeout(() => {
  window.addEventListener('click', e => {
    var pd = document.getElementById('pf_div');
    var sgds = document.getElementById('sgds');
    var oai = document.getElementById('open_ai');
    if (e.target !== pd && !pd.contains(e.target) && e.target !== oai && pd.classList.contains('appear') && e.target !== sgds) {
      pd.classList.remove('appear');
    }
  });
}, 5000);
function buygoodsflashM() {
  menuremove();
  closeinfo();
  closeProductSelection();
  closeinfo();
  navpclose();
  var element = document.getElementById("What43edo7yout34want");
  document.getElementById("continue").click();
  element.focus();
  setTimeout(() => {
    element.style.animation = "bxs 2s infinite";
  }, 1000);
  setTimeout(() => {
    element.style.animation = "none";
  }, 10000);
}
function searchgoodsflashM() {
  settimeout(() => {
    document.getElementById('open_ai').click();
    1000;
  });
  closeinfo();
  closeProductSelection();
  closeinfo();
  navpclose();
  closeinfo();
  var element = document.getElementById("search-div");
  document.getElementById("continue").click();
  setTimeout(() => {
    element.style.animation = "bxs 2s infinite";
  }, 1000);
  setTimeout(() => {
    element.style.animation = "none";
  }, 10000);
}
function menuremove() {
  var menuElement = document.getElementById("navigationpane");
  menuElement.classList.remove("show");
}