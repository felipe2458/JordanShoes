import { Component, Input } from '@angular/core';
import { ProductsComponent } from "./components/products/products.component";
import { Products } from '../../interfaces/interface';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Products[] = [
    {
      name: "Air Jordan 1 Mid Dutch Green",
      price: "1.199,99",
      url_image: "https://s3-alpha-sig.figma.com/img/4863/6370/9b5927e593df335a56605239c4a949a3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kJrCYo~LPCl21GwmtyLxwxARde5-x-WiMy2942e0N~EkuYTuwyidb2sRGBGaKXFBI3Mr~iSiwNkCu3kxnsbpZJsLuju2XHYdnIsuMyXq1b8wHQhn0qICK3xFMgKvAT6JFnvTNfd0aLEVvezm~oU5s0LN439k2gnBPaQEFl-SdOlHVyaMQQykkJmaXfWYFdeRkKEEZ-KbgcpApn1qi-nLg2FdF3vUTAhMcnF3FPxGXCRKJTwRoqdXnXVAtCuxQNHsM35ZZ4aBjP4GxRqgEjIledSHHd8ZmkM0aFfi3pTVBW3UyXfxKwZJ2FuHeFNwIF5SZueujIrnkpWXjBzHjvc0ZQ__"
    },
    {
      name: "Air Jordan 1 High Zoom CMFT Tropical Twist",
      price: "1.049,00",
      url_image: "https://s3-alpha-sig.figma.com/img/c406/0bea/eb63edf5d34982b0e4cc8b14fc542122?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SVaXYKUBK0-WJMFUXwVnzjvKpCV57l4K1KpJobAZXiCNN1oNlnbgal0bNMESijXZbv4qoRP1sN8zsliY8gnGPdbeZhb0Pf2z9-2e7nvw81MHaC05CxOCBwP~jhGUQWHva1-qcx2c9Rhy-X~j1t8m5PI78mHLWCwtCXuPjY9xoWgY6gLJ-p30Akbum8jABY9Udup6aOLJtZrAXiLoLsNSLyQiIL8JpWQsWFZ6TaIvzlUBkoJ8xyEBzNAven9qSvkqqzNREE5f01qMz2fNzwGNzTinGb3EK3JQ0L5kOtuKLBavPoj6zEBINU5R62HdsXsZHCtiyyoyS17pB0o3ah2fhw__"
    },
    {
      name: "Air Jordan 1 Mid Dutch Green",
      price: "1.350,00",
      url_image: "https://s3-alpha-sig.figma.com/img/1450/ff06/f64042cf03065610f87624cc584ac785?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TijbP-bxicaJO2seSaz2TAVjMg97RV~Qhe14IAKB5KeZ9qlz6xRZqN90CuiuNHBE7RFXJ7TcmD5tBcZsDx91NqlTtYeHlggtp18w2hQOK8zMdD6e~YQ-A52cMlXC8Lk5qFy9bYK4fOIQUq2cRmHcIrc6Sn6ORAlAMIAyQurJg9K5HuyXePE-JWQJbCvtbfwiC--EiLordI-x5dBXN9Mi~pS8KX7ZSXUcxEo5HZRyT0ZjTCn7gHK1JbbrYVCuHZKwb4dyM4V1r7ZVCX5LjgeYUV-9v2JDpqNQItOT3AbjHwQE00GqErYAzRuM4uH5h~wTITocV-3gwBfLWZJ5M2vYnw__"
    },
    {
      name: 'Air Jordan 1 Mid GS "Light Smoke Grey"',
      price: "1.585,00",
      url_image: "https://s3-alpha-sig.figma.com/img/5b39/87c9/4aa299cce4dd9b7558378e4f997582be?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TImZZF41ErMvv0rUpgvL3NRuhGwENknpNrsQ-kClMh3dIehiS6GUjehHgxrVX-QEHj7SFlwMr2XBsYXLRutsUmqZj4AMu7~LWiXLNTKqfRofu4wQ3C0~pcZM9FtjLZEqrzrbG8kcu6CH-DqUk3p7DWeU5xv9VcsDIK4b85zQuuzyu7HLypyN~q17CKG9ZxkyT8iRma1sLqe-~mTit05tHylC3g5Twp1OwFwrDNRDF89YpYjKzbez7CtoNt95a9XQBUljskcwqdA8pL9aj~m75rnptsT2MVEglrN8JOM0-FWF2FIsmV~O74iDb9onOJeK6QEOXxF5iID1xG0yrk5S4A__"
    },
    {
      name: "Air Jordan 1 Mid SE Bright Citrus",
      price: "949,99",
      url_image: "https://s3-alpha-sig.figma.com/img/3dab/12da/f60d21bdea49c2b4bd406aaac9edd00c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WM010CUUpAq1hRNG34u8~UCZIIAlLj17R4CiNw5otkpdc2IfTbzQX7pdJaRnma5VR3svvREsG8xPLqg3UcLo9K2NTVzg57HrxN1yzehFjzQ9wNEN7JfSehdWGnGyW7z8S7kdLEEYaej-HFgtL1RhH3wUvurKuk6dcqGjnjjsgY~RKHV~rOgdMer0hDAgLb~FD92fCjuQwZXgO3LC5FpeTqHWlf9RrqfJgQYgNvET-v0i9mdw8OKpgYSnZ~lRdsdQN~fuDias1nvzdnACb6VXjoIjqm~UtTLysXiHuwKEPtrleUtaWr8~DNswUVX9gPCOJssqx0XcrceL8Rukf0upuQ__"
    },
    {
      name: "Air Jordan 1 Mid Grey Camo",
      price: "999,99",
      url_image: "https://s3-alpha-sig.figma.com/img/6755/c234/6dc7bb5e844109337d2ab63009eba1d4?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TityMB40vCYzZ3FNXrZRubL19tsrgwHGxrVJttSkxdh2TCnwnycyNr4xgmfnIc0OSUu2wxpgNx28kVF7~v4j~S0ILIT2LEImSe6ai4mdp0kT2MwG7hmWzoXQW0MLQt~rhTE~V6n6FBvsqIpR6n4AbUoRiOiGeKWrXMcuik89wnz3R4RYygGNvxYgyc-7uFcTQhDLIBGjtjMvSCR5~Do~JEaoFKasZ9Nk7xPnvA5WG5n9rSgCJiLWFSaP9PLkdylBZlkw4xPaQzcaFVatC-ktCx-6HtnEZ72dkGiIvWv3e1UGCmG9NsKSL4a4Mb~K8dV-~VfAM~zUaod0M1M5YLQxmw__"
    }
  ];
}
