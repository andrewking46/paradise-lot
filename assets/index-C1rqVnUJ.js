(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={tropical:{name:`Tropical`,climate:`Islands and hot, wet coasts`,roof:`hip`,roofMaterial:`thatch`,pitch:.8,eaves:.25,walls:`stucco`,trim:`teal`,railing:`timber`,windows:`shuttered`,cottage:`Bungalow`,blurb:`Deep thatched eaves for shade and downpours, timber lanais, shuttered windows.`},mediterranean:{name:`Mediterranean`,climate:`Dry summers, mild winters`,roof:`hip`,roofMaterial:`roofTile`,pitch:.35,eaves:.12,walls:`stucco`,trim:`wood`,railing:`metal`,windows:`shuttered`,cottage:`Casita`,blurb:`White walls, low terracotta roofs, wooden shutters, wrought-iron balconies.`},alpine:{name:`Alpine`,climate:`Mountains and snow`,roof:`gable`,roofMaterial:`shingle`,pitch:.75,eaves:.35,walls:`timber`,base:`stone`,trim:`white`,railing:`timber`,windows:`shuttered`,cottage:`Chalet`,blurb:`A stone base, timber above, broad gables that hold the snow, balconies of carved wood.`},desert:{name:`Desert`,climate:`Hot, dry country`,roof:`flat`,roofMaterial:`adobe`,pitch:0,eaves:0,walls:`adobe`,trim:`teal`,railing:`wood`,windows:`deep`,parapet:!0,beams:!0,cottage:`Casita`,blurb:`Thick earthen walls that keep the heat out, small deep windows, flat roofs and vigas.`},coastal:{name:`Coastal shingle`,climate:`Cool coasts and lakes`,roof:`gable`,roofMaterial:`slate`,pitch:.7,eaves:.15,walls:`siding`,trim:`white`,railing:`white`,windows:`glazed`,cottage:`Cottage`,blurb:`Weathered shingle and clapboard, crisp white trim, steep gables and porches.`},modern:{name:`Modern`,climate:`Anywhere`,roof:`flat`,roofMaterial:`metal`,pitch:0,eaves:.2,walls:`white`,base:`stone`,trim:`wood`,railing:`metal`,windows:`glazed`,cottage:`Pavilion`,blurb:`Flat roofs with thin slabs, glass walls to the view, timber screens.`}},t=Object.keys(e),n={minLength:3,maxLength:12,maxFloors:4,floorHeight:3.2,depth:{single:2,double:3},roomCost:3800,perFloorAbove:.08},r={beds:`queens`,bath:`shower`,outdoor:`balcony`,extras:`none`},i={beds:{king:{name:`King bed`,cost:0,appeal:{honeymoon:1.12,wellness:1.06,family:.9},blurb:`Sleeps two. Couples prefer it.`},queens:{name:`Two queens`,cost:400,appeal:{family:1.08,young:1.06,honeymoon:.88},blurb:`Sleeps four: families and friends sharing.`}},bath:{shower:{name:`Shower`,cost:0,appeal:{},blurb:`A good shower. Nobody minds.`},tub:{name:`Soaking tub`,cost:1500,appeal:{honeymoon:1.08,wellness:1.1,family:1.03},blurb:`A deep tub. Couples and wellness guests love one.`},outdoor:{name:`Outdoor shower`,cost:1200,appeal:{honeymoon:1.1,wellness:1.07,young:1.05},blurb:`A private walled shower open to the sky.`}},outdoor:{balcony:{name:`Balcony or patio`,cost:0,appeal:{},blurb:`A balcony upstairs, a patio on the ground floor.`},plunge:{name:`Plunge pool`,cost:9e3,appeal:{honeymoon:1.3,wellness:1.2,young:1.12,family:1.06},blurb:`A private pool on a ground-floor patio. Upper floors keep their balconies.`}},extras:{none:{name:`Nothing extra`,cost:0,appeal:{},blurb:`Room service and the restaurants do the rest.`},kitchenette:{name:`Kitchenette`,cost:2500,appeal:{family:1.12,young:1.05},blurb:`A fridge and a hob. Families love it, and eat out less.`},connecting:{name:`Connecting doors`,cost:600,appeal:{family:1.1},blurb:`Pairs of rooms open into one, for bigger families.`}}},a=[{id:`front`,name:`View front`,from:60,rate:1.35},{id:`view`,name:`View`,from:32,rate:1.15},{id:`partial`,name:`Partial view`,from:12,rate:1},{id:`standard`,name:`Standard`,from:-1/0,rate:.85}];function o(e,t,r,a){let o=i.beds[e.beds].cost+i.bath[e.bath].cost+i.extras[e.extras].cost,s=a>0?i.outdoor[e.outdoor].cost*r/a:0;return(n.roomCost+o+s)*(1+n.perFloorAbove*(t-1))}var s={sunny:0,cloudy:1,showers:2,rain:3,heat:4,storm:5},c={0:`Sunny`,1:`Cloudy`,2:`Showers`,3:`Rain`,4:`Heat wave`,5:`Storm`},l={persistence:.35,warmth:{0:0,1:-1.5,2:-2,3:-3.5,4:4.5,5:-4},showerHours:[2,4],showerStarts:[10,16],rainHours:[7,20],stormMonths:[7,9],stormWarningDays:2,wet:.3},u={kaleo:{layout:`starter`,scenario:`kaleo`,seed:7,hour:8,guests:0,poolBias:1,settleTicks:0,camera:{x:53,y:40,rotation:2,zoom:0}},sandbox:{layout:`empty`,sandbox:!0,seed:7,hour:9,guests:0,poolBias:1,settleTicks:0,camera:{x:46,y:42,rotation:2,zoom:0}},play:{layout:`resort`,seed:7,hour:10,guests:0,stays:.6,poolBias:2,settleTicks:200,camera:{x:46,y:45,rotation:2,zoom:0}},afternoon:{layout:`resort`,seed:13,hour:15,guests:0,stays:.75,poolBias:2,settleTicks:1300,camera:{x:46,y:44,rotation:2,zoom:0},weather:s.sunny},coast:{layout:`empty`,seed:7,hour:11,guests:0,poolBias:1,settleTicks:0,camera:{x:30,y:40,rotation:2,zoom:0},weather:s.sunny},pooldeck:{layout:`resort`,seed:11,hour:14,guests:120,stays:1,poolBias:6,settleTicks:900,camera:{x:48,y:40,rotation:2,zoom:0},weather:s.sunny},sunset:{layout:`resort`,seed:7,hour:18.35,guests:30,poolBias:2,settleTicks:400,camera:{x:36,y:44,rotation:2,zoom:0},weather:s.sunny},night:{layout:`resort`,seed:7,hour:21.5,guests:30,poolBias:2,settleTicks:400,camera:{x:46,y:45,rotation:2,zoom:0},weather:s.sunny},objects:{layout:`objects`,seed:3,hour:11,guests:12,poolBias:1,settleTicks:120,camera:{x:48,y:36,rotation:0,zoom:1},weather:s.sunny},styles:{layout:`styles`,seed:3,hour:11,guests:0,poolBias:1,settleTicks:0,camera:{x:47,y:37,rotation:0,zoom:1},weather:s.sunny},dining:{layout:`dining`,seed:3,hour:11,guests:0,poolBias:1,settleTicks:0,camera:{x:46,y:37,rotation:0,zoom:1},weather:s.sunny},overview:{layout:`resort`,seed:7,hour:15,guests:30,poolBias:2,settleTicks:400,camera:{x:48,y:48,rotation:2,zoom:2},weather:s.sunny},terrain:{map:`lab`,layout:`lab`,seed:9,hour:13,guests:40,poolBias:1,settleTicks:300,camera:{x:40,y:46,rotation:0,zoom:1},weather:s.sunny},terraces:{map:`lab`,layout:`terraces`,seed:9,hour:15,guests:50,poolBias:6,settleTicks:400,camera:{x:48,y:41,rotation:0,zoom:0},weather:s.sunny},rain:{layout:`resort`,seed:13,hour:15,guests:0,stays:.75,poolBias:2,settleTicks:900,camera:{x:46,y:44,rotation:2,zoom:0},weather:s.rain},storm:{layout:`resort`,seed:13,hour:16,guests:0,stays:.75,poolBias:2,settleTicks:800,camera:{x:40,y:44,rotation:2,zoom:0},weather:s.storm},heatwave:{layout:`resort`,seed:11,hour:14,guests:60,stays:.9,poolBias:4,settleTicks:900,camera:{x:48,y:40,rotation:2,zoom:0},weather:s.heat},breakdown:{layout:`resort`,seed:13,hour:14,guests:0,stays:.75,poolBias:2,settleTicks:150,camera:{x:46,y:40,rotation:2,zoom:0},weather:s.sunny,broken:[[45,35],[34,31]]},reviews:{layout:`resort`,seed:7,hour:18,guests:0,stays:.7,poolBias:2,settleTicks:3900,camera:{x:46,y:45,rotation:2,zoom:0},weather:s.sunny},stress:{layout:`stress`,seed:5,hour:13,guests:600,poolBias:2,settleTicks:0,camera:{x:48,y:46,rotation:0,zoom:1},weather:s.sunny},sport:{layout:`sport`,seed:7,hour:17.25,guests:0,stays:.85,poolBias:2,settleTicks:1300,camera:{x:59,y:57,rotation:2,zoom:0},weather:s.sunny},sportMorning:{layout:`sport`,seed:13,hour:7.6,guests:0,stays:.85,poolBias:2,settleTicks:1300,camera:{x:58,y:53,rotation:2,zoom:0},weather:s.sunny},sportNight:{layout:`sport`,seed:7,hour:20.5,guests:0,stays:.85,poolBias:2,settleTicks:1300,camera:{x:59,y:57,rotation:2,zoom:0},weather:s.sunny},garden:{layout:`garden`,seed:7,hour:8.5,guests:0,stays:.6,poolBias:2,settleTicks:300,camera:{x:34,y:53,rotation:2,zoom:0},weather:s.sunny},dusk:{layout:`garden`,seed:7,hour:18.9,guests:0,stays:.6,poolBias:2,settleTicks:300,camera:{x:25,y:46,rotation:2,zoom:0},weather:s.sunny,nests:[[25,43,40]]},dolphins:{layout:`garden`,seed:7,hour:8,guests:0,stays:.6,poolBias:2,settleTicks:300,camera:{x:16,y:42,rotation:0,zoom:0},weather:s.sunny,dolphins:!0},hatchlings:{layout:`garden`,seed:7,hour:6.75,guests:0,stays:.6,poolBias:2,settleTicks:300,camera:{x:24,y:43,rotation:2,zoom:0},weather:s.sunny,nests:[[25,43,0],[26,38,40]]},nesting:{layout:`garden`,seed:7,hour:22.5,guests:0,stays:.6,poolBias:2,settleTicks:300,camera:{x:28,y:41,rotation:2,zoom:0},weather:s.sunny,nests:[[25,43,52]]}},d=(e,t,n)=>({type:`roomBlock`,x:e,y:t,orient:n}),f=(e,t)=>({type:`palm`,x:e,y:t,orient:0}),p=(e,t)=>({type:`torch`,x:e,y:t,orient:0}),m=(e,t)=>({type:`flowerBed`,x:e,y:t,orient:0}),h=(e,t)=>({type:`hedge`,x:e,y:t,orient:0}),g=[[26,46,56,46],[49,47,49,59],[40,28,40,60],[56,32,56,60],[40,32,56,32],[40,60,56,60],[40,28,51,28],[36,30,36,46],[36,32,40,32],[56,36,62,36],[48,43,48,45],[31,47,31,53]],_=[[43,33,43,34],[48,33,48,33],[44,34,48,34],[51,34,55,34],[49,33,50,33],[43,35,43,36],[43,38,43,42],[41,41,42,41],[44,42,52,42],[52,35,52,36],[52,40,52,41],[53,39,54,39],[53,40,53,41],[53,42,55,42]],v={x:41,y:35,rows:[`....ssssss.....`,`...ssddddss....`,`...sdrrrrdss...`,`...sdr..rddd...`,`...sdr..rdss...`,`...ssrrrrss....`,`....ssssss.....`,`...............`,`...............`,`kkkk...........`,`sskk...........`]},y=(e,t,n,i,a,o={})=>({type:`wing`,x:e,y:t,orient:n,design:{length:i,floors:a,loaded:`single`,room:{...r,...o}}}),b={paths:g,decks:_,bridges:[[48,34,48,38],[24,54,31,54]],servicePaths:[[41,52,48,52]],roads:[[57,44,63,45]],staff:{frontDesk:2,housekeeper:6,cook:1,server:6,lifeguard:2,therapist:2,maintenance:1,gardener:2},pool:[],poolHoles:[],poolMap:v,poolNames:[[45,35,`The Lagoon`],[41,44,`Splash Cove`]],objects:[{type:`lobby`,x:58,y:37,orient:0,design:{arrival:`court`}},{type:`parkingLot`,x:58,y:46,orient:1},{type:`parkingLot`,x:61,y:46,orient:1},h(57,47),h(57,48),h(57,49),h(57,50),h(58,50),h(59,50),h(60,50),h(61,50),h(62,50),h(63,50),{type:`gatehouse`,x:74,y:46,orient:2},{type:`entrySign`,x:74,y:42,orient:0},y(34,31,1,10,3,{beds:`king`,bath:`tub`}),y(41,29,0,10,2),y(41,61,0,10,2,{extras:`connecting`}),{type:`villa`,x:37,y:51,orient:3},{type:`villa`,x:37,y:55,orient:3},{type:`restaurant`,x:44,y:47,orient:2},{type:`poolBar`,x:54,y:40,orient:1},{type:`lifeguard`,x:55,y:41,orient:1},{type:`slide`,x:53,y:38,orient:1,design:{length:2}},{type:`waterfall`,x:43,y:37,orient:3},{type:`swimUpBar`,x:49,y:34,orient:0},{type:`cabana`,x:53,y:35,orient:0},{type:`cabana`,x:53,y:36,orient:0},{type:`cabana`,x:44,y:43,orient:0},f(47,38),m(48,39),{type:`lounger`,x:44,y:33,orient:0},{type:`lounger`,x:45,y:33,orient:0},{type:`umbrella`,x:46,y:33,orient:0},{type:`lounger`,x:47,y:33,orient:0},{type:`lounger`,x:42,y:36,orient:0},{type:`umbrella`,x:42,y:37,orient:0},{type:`lounger`,x:42,y:38,orient:0},{type:`lounger`,x:45,y:43,orient:0},{type:`lounger`,x:46,y:43,orient:0},{type:`umbrella`,x:47,y:43,orient:0},{type:`umbrella`,x:49,y:43,orient:0},{type:`lounger`,x:50,y:43,orient:0},{type:`lounger`,x:51,y:43,orient:0},{type:`restrooms`,x:42,y:40,orient:0},{type:`coffeeKiosk`,x:39,y:45,orient:0},{type:`beachShack`,x:29,y:47,orient:2},{type:`beachHut`,x:26,y:47,orient:2},{type:`lifeguard`,x:25,y:45,orient:1},{type:`spa`,x:50,y:50,orient:1},{type:`kidsClub`,x:47,y:50,orient:3},{type:`housekeeping`,x:41,y:50,orient:0},{type:`kitchen`,x:43,y:50,orient:0},{type:`maintenance`,x:45,y:51,orient:0},f(53,45),f(47,47),f(55,47),f(37,44),f(33,47),f(52,43),f(39,50),f(38,37),f(55,55),f(42,57),f(50,57),f(55,35),f(37,29),p(44,47),p(52,47),p(37,47),p(31,45),p(45,44),p(55,39),p(41,33),p(55,59),p(55,37),p(57,35),m(54,48),m(54,35),m(59,35),m(61,35),m(62,35),{type:`shadeTree`,x:54,y:54,orient:0},{type:`shadeTree`,x:54,y:57,orient:0},m(50,54),m(50,56),m(41,35),m(55,38)],destinations:[[28,46],[30,46],[36,36],[42,32],[47,32],[52,32],[42,60],[47,60],[52,60],[56,60],[56,40],[56,52],[40,46],[56,46],[40,54],[44,28],[50,28],[60,36]],poolDestinations:[[45,34],[47,34],[52,35],[43,39],[46,42],[50,42],[44,42],[52,41]],naturalScenery:!0},x=(e,t,n)=>({type:e,x:t,y:n,orient:0});({...b}),[...b.objects,...[52,53,54,55,56,57,58].map(e=>x(`bougainvillea`,31,e)),...[65,68,71].flatMap(e=>[x(`royalPalm`,e,43),x(`royalPalm`,e,46)])],{...b},[...g],b.objects.filter(e=>e.type!==`palm`||e.y<46),[...b.destinations];var S={paths:[[8,44,64,44],[8,45,64,45],[20,46,20,50],[44,46,44,50]],pool:[],poolHoles:[],objects:[d(24,40,0),d(50,47,2),f(14,42),f(40,47),p(30,46),p(58,46)],destinations:[[8,44],[64,45],[20,50],[44,50],[36,44],[56,45]],poolDestinations:[],naturalScenery:!0};t.map((e,t)=>({type:`wing`,x:34+t%3*9,y:t<3?32:39,orient:0,design:{length:6,floors:[2,3,2,3,2,4][t],loaded:t===3?`double`:`single`,style:e,room:{...r,outdoor:t%2?`plunge`:`balcony`}}})),{...S},[...S.paths],[...S.objects],{...b},[...g],{...b.staff},[...b.objects];var C=1e3,w=1001,T=1002,E=1003,D=1004,O=1005,k=1006,A=1007,j=1008,M=1009,ee=1010,te=1011,ne=1012,N=1013,re=1014,ie=1015,ae=1016,oe=1017,se=1018,ce=1020,le=35902,P=35899,ue=1021,de=1022,fe=1023,pe=1026,me=1027,he=1028,ge=1029,_e=1030,ve=1031,ye=1033,be=33776,xe=33777,Se=33778,Ce=33779,we=35840,Te=35841,Ee=35842,De=35843,Oe=36196,ke=37492,Ae=37496,je=37488,Me=37489,Ne=37490,Pe=37491,F=37808,Fe=37809,Ie=37810,Le=37811,I=37812,Re=37813,L=37814,R=37815,ze=37816,Be=37817,Ve=37818,He=37819,Ue=37820,We=37821,Ge=36492,Ke=36494,qe=36495,Je=36283,Ye=36284,Xe=36285,Ze=36286,Qe=2300,$e=2301,et=2302,tt=2303,nt=2400,rt=2401,it=2402,at=3200,ot=`srgb`,st=`srgb-linear`,ct=`linear`,lt=`srgb`,ut=7680,dt=35044,ft=35048,pt=`300 es`,mt=2e3;function ht(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function gt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function _t(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function vt(){let e=_t(`canvas`);return e.style.display=`block`,e}var yt={};function bt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function xt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=xt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=xt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function St(...e){let t=e.join(` `);t in yt||(yt[t]=!0,z(...e))}function Ct(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var wt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Et=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Dt=Math.PI/180,Ot=180/Math.PI;function kt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Et[e&255]+Et[e>>8&255]+Et[e>>16&255]+Et[e>>24&255]+`-`+Et[t&255]+Et[t>>8&255]+`-`+Et[t>>16&15|64]+Et[t>>24&255]+`-`+Et[n&63|128]+Et[n>>8&255]+`-`+Et[n>>16&255]+Et[n>>24&255]+Et[r&255]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]).toLowerCase()}function At(e,t,n){return Math.max(t,Math.min(n,e))}function jt(e,t){return(e%t+t)%t}function Mt(e,t,n){return(1-n)*e+n*t}function Nt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Pt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ft(e,t){if(t.constructor===Float32Array)return e;let n=Pt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function It(e,t){if(t.constructor===Float32Array)return e;let n=Pt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Lt=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zt.copy(this).projectOnVector(e),this.sub(zt)}reflect(e){return this.sub(zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zt=new V,Bt=new Rt,H=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return St(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Vt.makeScale(e,t)),this}rotate(e){return St(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Vt.makeRotation(-e)),this}translate(e,t){return St(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Vt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vt=new H,Ht=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ut=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wt(){let e={enabled:!0,workingColorSpace:st,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=qt(e.r),e.g=qt(e.g),e.b=qt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ct:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[st]:{primaries:t,whitePoint:r,transfer:ct,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:t,whitePoint:r,transfer:lt,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}}),e}var Gt=Wt();function Kt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Jt,Yt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jt===void 0&&(Jt=_t(`canvas`)),Jt.width=e.width,Jt.height=e.height;let t=Jt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Jt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=_t(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Kt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Kt(t[e]/255)*255):t[e]=Kt(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Xt=0,Zt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=kt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Qt(r[t].image)):e.push(Qt(r[t]))}else e=Qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Yt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var $t=0,en=new V,tn=class e extends Tt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=w,i=w,a=k,o=j,s=fe,c=M,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=kt(),this.name=``,this.source=new Zt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(en).x}get height(){return this.source.getSize(en).y}get depth(){return this.source.getSize(en).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?z(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case C:e.x-=Math.floor(e.x);break;case w:e.x=e.x<0?0:1;break;case T:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case C:e.y-=Math.floor(e.y);break;case w:e.y=e.y<0?0:1;break;case T:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=300,tn.DEFAULT_ANISOTROPY=1;var nn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rn=class extends Tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:k,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new tn({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:k,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},an=class extends rn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},on=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=E,this.minFilter=E,this.wrapR=w,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},sn=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=E,this.minFilter=E,this.wrapR=w,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},cn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ln.setFromMatrixColumn(e,0).length(),i=1/ln.setFromMatrixColumn(e,1).length(),a=1/ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dn,e,fn)}lookAt(e,t,n){let r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),pn.crossVectors(n,hn),pn.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),pn.crossVectors(n,hn)),pn.normalize(),mn.crossVectors(hn,pn),r[0]=pn.x,r[4]=mn.x,r[8]=hn.x,r[1]=pn.y,r[5]=mn.y,r[9]=hn.y,r[2]=pn.z,r[6]=mn.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],ee=r[3],te=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*ee,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*M+c*N,i[1]=l*x+u*T+d*k+f*ee,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*M+f*N,i[2]=p*x+m*T+h*k+g*ee,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*M+g*N,i[3]=_*x+v*T+y*k+b*ee,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*M+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ln.set(r[0],r[1],r[2]).length(),o=ln.set(r[4],r[5],r[6]).length(),s=ln.set(r[8],r[9],r[10]).length();i<0&&(a=-a),un.copy(this);let c=1/a,l=1/o,u=1/s;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=l,un.elements[5]*=l,un.elements[6]*=l,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=mt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=mt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ln=new V,un=new cn,dn=new V(0,0,0),fn=new V(1,1,1),pn=new V,mn=new V,hn=new V,gn=new cn,_n=new Rt,vn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-At(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(At(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _n.setFromEuler(this),this.setFromQuaternion(_n,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER=`XYZ`;var yn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},bn=0,xn=new V,Sn=new Rt,Cn=new cn,wn=new V,Tn=new V,En=new V,Dn=new Rt,On=new V(1,0,0),kn=new V(0,1,0),An=new V(0,0,1),jn={type:`added`},Mn={type:`removed`},Nn={type:`childadded`,child:null},Pn={type:`childremoved`,child:null},Fn=class e extends Tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bn++}),this.uuid=kt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new vn,r=new Rt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new cn},normalMatrix:{value:new H}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.multiply(Sn),this}rotateOnWorldAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.premultiply(Sn),this}rotateX(e){return this.rotateOnAxis(On,e)}rotateY(e){return this.rotateOnAxis(kn,e)}rotateZ(e){return this.rotateOnAxis(An,e)}translateOnAxis(e,t){return xn.copy(e).applyQuaternion(this.quaternion),this.position.add(xn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(On,e)}translateY(e){return this.translateOnAxis(kn,e)}translateZ(e){return this.translateOnAxis(An,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wn.copy(e):wn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Tn,wn,this.up):Cn.lookAt(wn,Tn,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Sn.setFromRotationMatrix(Cn),this.quaternion.premultiply(Sn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,e,En),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tn,Dn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Fn.DEFAULT_UP=new V(0,1,0),Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends Fn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ln={type:`move`},Rn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ln)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Vn={h:0,s:0,l:0};function Hn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Un=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Gt.workingColorSpace){if(e=jt(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Hn(i,r,e+1/3),this.g=Hn(i,r,e),this.b=Hn(i,r,e-1/3)}return Gt.colorSpaceToWorking(this,r),this}setStyle(e,t=ot){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){let n=zn[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}copyLinearToSRGB(e){return this.r=qt(e.r),this.g=qt(e.g),this.b=qt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Gt.workingToColorSpace(Wn.copy(this),e),Math.round(At(Wn.r*255,0,255))*65536+Math.round(At(Wn.g*255,0,255))*256+Math.round(At(Wn.b*255,0,255))}getHexString(e=ot){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(Wn.copy(this),t);let n=Wn.r,r=Wn.g,i=Wn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=ot){Gt.workingToColorSpace(Wn.copy(this),e);let t=Wn.r,n=Wn.g,r=Wn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Vn);let n=Mt(Bn.h,Vn.h,t),r=Mt(Bn.s,Vn.s,t),i=Mt(Bn.l,Vn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new Un;Un.NAMES=zn;var Gn=class extends Fn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new V,qn=new V,Jn=new V,Yn=new V,Xn=new V,Zn=new V,Qn=new V,$n=new V,er=new V,tr=new V,nr=new nn,rr=new nn,ir=new nn,ar=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kn.subVectors(e,t),r.cross(Kn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Kn.subVectors(r,t),qn.subVectors(n,t),Jn.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(qn),s=Kn.dot(Jn),c=qn.dot(qn),l=qn.dot(Jn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)!==null&&Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Yn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Yn.x),s.addScaledVector(a,Yn.y),s.addScaledVector(o,Yn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return nr.setScalar(0),rr.setScalar(0),ir.setScalar(0),nr.fromBufferAttribute(e,t),rr.fromBufferAttribute(e,n),ir.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nr,i.x),a.addScaledVector(rr,i.y),a.addScaledVector(ir,i.z),a}static isFrontFacing(e,t,n,r){return Kn.subVectors(n,t),qn.subVectors(e,t),Kn.cross(qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Kn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Xn.subVectors(r,n),Zn.subVectors(i,n),$n.subVectors(e,n);let s=Xn.dot($n),c=Zn.dot($n);if(s<=0&&c<=0)return t.copy(n);er.subVectors(e,r);let l=Xn.dot(er),u=Zn.dot(er);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Xn,a);tr.subVectors(e,i);let f=Xn.dot(tr),p=Zn.dot(tr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Qn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Qn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Xn,a).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},or=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,cr):cr.fromBufferAttribute(r,t),cr.applyMatrix4(e.matrixWorld),this.expandByPoint(cr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cr),cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),_r.subVectors(this.max,gr),ur.subVectors(e.a,gr),dr.subVectors(e.b,gr),fr.subVectors(e.c,gr),pr.subVectors(dr,ur),mr.subVectors(fr,dr),hr.subVectors(ur,fr);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-hr.z,hr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,hr.z,0,-hr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-hr.y,hr.x,0];return!br(t,ur,dr,fr,_r)||(t=[1,0,0,0,1,0,0,0,1],!br(t,ur,dr,fr,_r))?!1:(vr.crossVectors(pr,mr),t=[vr.x,vr.y,vr.z],br(t,ur,dr,fr,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sr=[new V,new V,new V,new V,new V,new V,new V,new V],cr=new V,lr=new or,ur=new V,dr=new V,fr=new V,pr=new V,mr=new V,hr=new V,gr=new V,_r=new V,vr=new V,yr=new V;function br(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){yr.fromArray(e,a);let o=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),s=t.dot(yr),c=n.dot(yr),l=r.dot(yr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var xr=new V,Sr=new Lt,Cr=0,wr=class extends Tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=dt,this.updateRanges=[],this.gpuType=ie,this.version=0,this._normalizationScale=e===void 0?void 0:Pt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix4(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyNormalMatrix(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.transformDirection(e),this.setXYZ(t,xr.x,xr.y,xr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Ft(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?It(e,this.array):Math.round(e*t)}},Tr=class extends wr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Er=class extends wr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Dr=class extends wr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Or=new or,kr=new V,Ar=new V,jr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Or.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(kr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Ar)),this.expandByPoint(kr.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mr=0,Nr=new cn,Pr=new Fn,Fr=new V,Ir=new or,Lr=new or,Rr=new V,zr=class e extends Tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=kt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ht(e)?Er:Tr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nr.makeRotationFromQuaternion(e),this.applyMatrix4(Nr),this}rotateX(e){return Nr.makeRotationX(e),this.applyMatrix4(Nr),this}rotateY(e){return Nr.makeRotationY(e),this.applyMatrix4(Nr),this}rotateZ(e){return Nr.makeRotationZ(e),this.applyMatrix4(Nr),this}translate(e,t,n){return Nr.makeTranslation(e,t,n),this.applyMatrix4(Nr),this}scale(e,t,n){return Nr.makeScale(e,t,n),this.applyMatrix4(Nr),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Dr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(this.boundingBox.min,Ir.min),this.boundingBox.expandByPoint(Rr),Rr.addVectors(this.boundingBox.max,Ir.max),this.boundingBox.expandByPoint(Rr)):(this.boundingBox.expandByPoint(Ir.min),this.boundingBox.expandByPoint(Ir.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(Ir.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lr.setFromBufferAttribute(n),this.morphTargetsRelative?(Rr.addVectors(Ir.min,Lr.min),Ir.expandByPoint(Rr),Rr.addVectors(Ir.max,Lr.max),Ir.expandByPoint(Rr)):(Ir.expandByPoint(Lr.min),Ir.expandByPoint(Lr.max))}Ir.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Rr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Rr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Rr.fromBufferAttribute(a,t),o&&(Fr.fromBufferAttribute(e,t),Rr.add(Fr)),r=Math.max(r,n.distanceToSquared(Rr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new wr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let l=new V,u=new V,d=new V,f=new Lt,p=new Lt,m=new Lt,h=new V,g=new V;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new V,b=new V,x=new V,S=new V;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new wr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rr.fromBufferAttribute(e,t),Rr.normalize(),e.setXYZ(t,Rr.x,Rr.y,Rr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new wr(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Br=new V,Vr=new V,Hr=new H,Ur=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Br.subVectors(n,t).cross(Vr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Br),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hr.getNormalMatrix(e),r=this.coplanarPoint(Br).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wr=0,Gr=class extends Tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wr++}),this.uuid=kt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Un(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ut,this.stencilZFail=ut,this.stencilZPass=ut,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?z(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Un().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ur().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Lt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Kr=new V,qr=new V,Jr=new V,Yr=new V,Xr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kr.copy(this.origin).addScaledVector(this.direction,t),Kr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qr.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(qr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=Yr.dot(this.direction),s=-Yr.dot(Jr),c=Yr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qr).addScaledVector(Jr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Kr.subVectors(e.center,this.origin);let n=Kr.dot(this.direction),r=Kr.dot(Kr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,ee;if(y>=b&&y>=x?(w=s,D=u,A=p,ee=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,ee=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,ee=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let te=S/w,ne=C/w,N=1/w,re=T-te*D,ie=E-ne*D,ae=O-te*A,oe=k-ne*A,se=j-te*ee,ce=M-ne*ee,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=N*(le*D+P*A+ue*ee);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zr=class extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Un(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qr=new cn,$r=new Xr,ei=new jr,ti=new V,ni=new V,ri=new V,ii=new V,ai=new V,oi=new V,si=new V,ci=new V,li=class extends Fn{constructor(e=new zr,t=new Zr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){oi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ai.fromBufferAttribute(s,e),a?oi.addScaledVector(ai,r):oi.addScaledVector(ai.sub(t),r))}t.add(oi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ei.copy(n.boundingSphere),ei.applyMatrix4(i),$r.copy(e.ray).recast(e.near),ei.containsPoint($r.origin)===!1&&($r.intersectSphere(ei,ti)===null||$r.origin.distanceToSquared(ti)>(e.far-e.near)**2)||(Qr.copy(i).invert(),$r.copy(e.ray).applyMatrix4(Qr),(n.boundingBox===null||$r.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=di(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=di(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=di(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=di(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ui(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ci.copy(s),ci.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ci);return l<n.near||l>n.far?null:{distance:l,point:ci.clone(),object:e}}function di(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ni),e.getVertexPosition(c,ri),e.getVertexPosition(l,ii);let u=ui(e,t,n,r,ni,ri,ii,si);if(u){let e=new V;ar.getBarycoord(si,ni,ri,ii,e),i&&(u.uv=ar.getInterpolatedAttribute(i,s,c,l,e,new Lt)),a&&(u.uv1=ar.getInterpolatedAttribute(a,s,c,l,e,new Lt)),o&&(u.normal=ar.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};ar.getNormal(ni,ri,ii,t.normal),u.face=t,u.barycoord=e}return u}var fi=class extends tn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=E,l=E,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pi=class extends wr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mi=new jr,hi=new Lt(.5,.5),gi=new V,_i=class{constructor(e=new Ur,t=new Ur,n=new Ur,r=new Ur,i=new Ur,a=new Ur){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476+hi.distanceTo(e.center),mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(gi.x=r.normal.x>0?e.max.x:e.min.x,gi.y=r.normal.y>0?e.max.y:e.min.y,gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vi=new cn,yi=class e{constructor(){this.coordinateSystem=mt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];vi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new _i),n[e].setFromProjectionMatrix(vi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new _i),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},bi=class extends tn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xi=class extends tn{constructor(e,t,n=re,r,i,a,o=E,s=E,c,l=pe,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Si=class extends xi{constructor(e,t=re,n=301,r,i,a=E,o=E,s,c=pe){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ci=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},wi=class e extends zr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Dr(c,3)),this.setAttribute(`normal`,new Dr(l,3)),this.setAttribute(`uv`,new Dr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ti=class e extends zr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Dr(p,3)),this.setAttribute(`normal`,new Dr(m,3)),this.setAttribute(`uv`,new Dr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ei(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Oi(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Oi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Di(e){let t={};for(let n=0;n<e.length;n++){let r=Ei(e[n]);for(let e in r)t[e]=r[e]}return t}function Oi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ki(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ai(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var ji={clone:Ei,merge:Di},Mi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ni=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pi=class extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mi,this.fragmentShader=Ni,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=ki(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Un().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Lt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new nn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new cn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fi=class extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ii=class extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=at,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Li=class extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ri(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function zi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Bi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Vi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nt,endingEnd:nt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case rt:i=e,o=2*t-n;break;case it:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case rt:a=e,s=2*n-t;break;case it:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Hi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ui=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wi=class extends Bi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=qi(n,t,g,y,r);i[p]=Gi(x,o,_,b,m)}return i}};function Gi(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ki(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function qi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Gi(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ki(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ji=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ri(t,this.TimeBufferType),this.values=Ri(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ri(e.times,Array),values:Ri(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),zi(e.settings)&&(n.settings={inTangents:Ri(e.settings.inTangents,Array),outTangents:Ri(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ui(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qe:t=this.InterpolantFactoryMethodDiscrete;break;case $e:t=this.InterpolantFactoryMethodLinear;break;case et:t=this.InterpolantFactoryMethodSmooth;break;case tt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qe;case this.InterpolantFactoryMethodLinear:return $e;case this.InterpolantFactoryMethodSmooth:return et;case this.InterpolantFactoryMethodBezier:return tt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;zi(this.settings)&&(Yi(this.settings.inTangents,e),Yi(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;zi(this.settings)&&(Xi(this.settings.inTangents,e),Xi(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&gt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===et,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,zi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Yi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Xi(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ji.prototype.ValueTypeName=``,Ji.prototype.TimeBufferType=Float32Array,Ji.prototype.ValueBufferType=Float32Array,Ji.prototype.DefaultInterpolation=$e;var Zi=class extends Ji{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName=`bool`,Zi.prototype.ValueBufferType=Array,Zi.prototype.DefaultInterpolation=Qe,Zi.prototype.InterpolantFactoryMethodLinear=void 0,Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}};Qi.prototype.ValueTypeName=`color`;var $i=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}};$i.prototype.ValueTypeName=`number`;var ea=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ta=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ea(this.times,this.values,this.getValueSize(),e)}};ta.prototype.ValueTypeName=`quaternion`,ta.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends Ji{constructor(e,t,n){super(e,t,n)}};na.prototype.ValueTypeName=`string`,na.prototype.ValueBufferType=Array,na.prototype.DefaultInterpolation=Qe,na.prototype.InterpolantFactoryMethodLinear=void 0,na.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends Ji{constructor(e,t,n,r){super(e,t,n,r)}};ra.prototype.ValueTypeName=`vector`;var ia=new V,aa=new Rt,oa=new V,sa=class extends Fn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=mt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ia,aa,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,aa,oa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ia,aa,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,aa,oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ca=new V,la=new Lt,ua=new Lt,da=class extends sa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ot*2*Math.atan(Math.tan(Dt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ca.x,ca.y).multiplyScalar(-e/ca.z),ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ca.x,ca.y).multiplyScalar(-e/ca.z)}getViewSize(e,t){return this.getViewBounds(e,la,ua),t.subVectors(ua,la)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fa=class extends sa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pa=class extends zr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ma=-90,ha=1,ga=class extends Fn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new da(ma,ha,e,t);r.layers=this.layers,this.add(r);let i=new da(ma,ha,e,t);i.layers=this.layers,this.add(i);let a=new da(ma,ha,e,t);a.layers=this.layers,this.add(a);let o=new da(ma,ha,e,t);o.layers=this.layers,this.add(o);let s=new da(ma,ha,e,t);s.layers=this.layers,this.add(s);let c=new da(ma,ha,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},_a=class extends da{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},va=`\\[\\]\\.:\\/`,ya=RegExp(`[\\[\\]\\.:\\/]`,`g`),ba=`[^\\[\\]\\.:\\/]`,xa=`[^`+va.replace(`\\.`,``)+`]`,Sa=`((?:WC+[\\/:])*)`.replace(`WC`,ba),Ca=`(WCOD+)?`.replace(`WCOD`,xa),wa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ba),Ta=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ba),Ea=RegExp(`^`+Sa+Ca+wa+Ta+`$`),Da=[`material`,`materials`,`bones`,`map`],Oa=class{constructor(e,t,n){let r=n||ka.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ka=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ya,``)}static parseTrackName(e){let t=Ea.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Da.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ka.Composite=Oa,ka.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ka.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ka.prototype.GetterByBindingType=[ka.prototype._getValue_direct,ka.prototype._getValue_array,ka.prototype._getValue_arrayElement,ka.prototype._getValue_toArray],ka.prototype.SetterByBindingTypeAndVersioning=[[ka.prototype._setValue_direct,ka.prototype._setValue_direct_setNeedsUpdate,ka.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ka.prototype._setValue_array,ka.prototype._setValue_array_setNeedsUpdate,ka.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ka.prototype._setValue_arrayElement,ka.prototype._setValue_arrayElement_setNeedsUpdate,ka.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ka.prototype._setValue_fromArray,ka.prototype._setValue_fromArray_setNeedsUpdate,ka.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Aa=new cn,ja=class{constructor(e,t,n=0,r=1/0){this.ray=new Xr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new yn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):B(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Aa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Aa),this}intersectObject(e,t=!0,n=[]){return Na(e,this,n,t),n.sort(Ma),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Na(e[r],this,n,t);return n.sort(Ma),n}};function Ma(e,t){return e.distance-t.distance}function Na(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Na(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Pa(e,t,n,r){let i=Fa(r);switch(n){case ue:return e*t;case he:return e*t/i.components*i.byteLength;case ge:return e*t/i.components*i.byteLength;case _e:return e*t*2/i.components*i.byteLength;case ve:return e*t*2/i.components*i.byteLength;case de:return e*t*3/i.components*i.byteLength;case fe:return e*t*4/i.components*i.byteLength;case ye:return e*t*4/i.components*i.byteLength;case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Se:case Ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Te:case De:return Math.max(e,16)*Math.max(t,8)/4;case we:case Ee:return Math.max(e,8)*Math.max(t,8)/2;case Oe:case ke:case je:case Me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ae:case Ne:case Pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ie:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Le:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case I:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Re:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case L:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case R:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ze:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ve:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case He:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ue:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case We:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ge:case Ke:case qe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Je:case Ye:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Xe:case Ze:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Fa(e){switch(e){case M:case ee:return{byteLength:1,components:1};case ne:case te:case ae:return{byteLength:2,components:1};case oe:case se:return{byteLength:2,components:4};case re:case N:case ie:return{byteLength:4,components:1};case le:case P:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ia(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function La(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ra={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},U={common:{diffuse:{value:new Un(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Un(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Un(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new Un(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},za={basic:{uniforms:Di([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.fog]),vertexShader:Ra.meshbasic_vert,fragmentShader:Ra.meshbasic_frag},lambert:{uniforms:Di([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new Un(0)},envMapIntensity:{value:1}}]),vertexShader:Ra.meshlambert_vert,fragmentShader:Ra.meshlambert_frag},phong:{uniforms:Di([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new Un(0)},specular:{value:new Un(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ra.meshphong_vert,fragmentShader:Ra.meshphong_frag},standard:{uniforms:Di([U.common,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.roughnessmap,U.metalnessmap,U.fog,U.lights,{emissive:{value:new Un(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ra.meshphysical_vert,fragmentShader:Ra.meshphysical_frag},toon:{uniforms:Di([U.common,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.gradientmap,U.fog,U.lights,{emissive:{value:new Un(0)}}]),vertexShader:Ra.meshtoon_vert,fragmentShader:Ra.meshtoon_frag},matcap:{uniforms:Di([U.common,U.bumpmap,U.normalmap,U.displacementmap,U.fog,{matcap:{value:null}}]),vertexShader:Ra.meshmatcap_vert,fragmentShader:Ra.meshmatcap_frag},points:{uniforms:Di([U.points,U.fog]),vertexShader:Ra.points_vert,fragmentShader:Ra.points_frag},dashed:{uniforms:Di([U.common,U.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ra.linedashed_vert,fragmentShader:Ra.linedashed_frag},depth:{uniforms:Di([U.common,U.displacementmap]),vertexShader:Ra.depth_vert,fragmentShader:Ra.depth_frag},normal:{uniforms:Di([U.common,U.bumpmap,U.normalmap,U.displacementmap,{opacity:{value:1}}]),vertexShader:Ra.meshnormal_vert,fragmentShader:Ra.meshnormal_frag},sprite:{uniforms:Di([U.sprite,U.fog]),vertexShader:Ra.sprite_vert,fragmentShader:Ra.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ra.background_vert,fragmentShader:Ra.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:Ra.backgroundCube_vert,fragmentShader:Ra.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ra.cube_vert,fragmentShader:Ra.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ra.equirect_vert,fragmentShader:Ra.equirect_frag},distance:{uniforms:Di([U.common,U.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ra.distance_vert,fragmentShader:Ra.distance_frag},shadow:{uniforms:Di([U.lights,U.fog,{color:{value:new Un(0)},opacity:{value:1}}]),vertexShader:Ra.shadow_vert,fragmentShader:Ra.shadow_frag}};za.physical={uniforms:Di([za.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new Un(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new Un(0)},specularColor:{value:new Un(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:Ra.meshphysical_vert,fragmentShader:Ra.meshphysical_frag};var Ba={r:0,b:0,g:0},Va=new cn,Ha=new H;Ha.set(-1,0,0,0,1,0,0,0,1);function Ua(e,t,n,r,i,a){let o=new Un(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new li(new wi(1,1,1),new Pi({name:`BackgroundCubeMaterial`,uniforms:Ei(za.backgroundCube.uniforms),vertexShader:za.backgroundCube.vertexShader,fragmentShader:za.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Va.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ha),l.material.toneMapped=Gt.getTransfer(i.colorSpace)!==lt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new li(new Ti(2,2),new Pi({name:`BackgroundMaterial`,uniforms:Ei(za.background.uniforms),vertexShader:za.background.vertexShader,fragmentShader:za.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(i.colorSpace)!==lt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ba,Ai(e)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Wa(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ga(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ka(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&z(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function qa(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ur,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ja=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wi(5,5,5),i=new Pi({name:`CubemapFromEquirect`,uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new li(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=k),new ga(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ya=256,Xa=3,Za=20,Qa=256,$a=16,eo=3,to=new V,no=new Un,ro=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ga(1,10,null),this._boxMesh=new li(new wi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=to}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(no));let h=new ga(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ya,Nt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Ya:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=io(e,!1,!1),n=Math.log2(e)-Xa;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=io(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=uo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=lo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=oo(),this._integrationMaterial=so());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/$a);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-eo)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Qa*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=co());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function io(e,t,n){return new Ja(e,{minFilter:j,generateMipmaps:t,type:ae,colorSpace:st,depthBuffer:n})}function ao(e,t,n){return new Pi({name:e,uniforms:t,vertexShader:Ra.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function oo(){return ao(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qa}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function so(){return ao(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$a}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function co(){return ao(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Za}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function lo(){return ao(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function uo(){return ao(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ja(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ro(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ro(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function po(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&St(`WebGLRenderer: `+e+` extension not supported.`),t}}}function mo(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Er:Tr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function ho(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function go(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function _o(e,t,n){let r=new WeakMap,i=new nn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new on(h,p,m,u);g.type=ie,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Lt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function vo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var yo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function bo(e,t,n,r,i,a){let o=new an(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new zr;u.setAttribute(`position`,new Dr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Dr([0,2,0,0,2,0],2));let d=new Fi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new li(u,d),p=new fa(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new an(t,n,{type:ae,depthBuffer:!1,stencilBuffer:!1}),c=new an(t,n,{type:ae,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new xi(t,n),a===!0&&(l.format=me,l.type=ce)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Gt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=yo[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var xo=new tn,So=new xi(1,1),Co=new Si(1),wo=new on,To=new sn,Eo=new bi,Do=[],Oo=[],ko=new Float32Array(16),Ao=new Float32Array(9),jo=new Float32Array(4);function Mo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Do[i];if(a===void 0&&(a=new Float32Array(i),Do[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function No(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Po(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Fo(e,t){let n=Oo[t];n===void 0&&(n=new Int32Array(t),Oo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Io(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Lo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(No(n,t))return;e.uniform2fv(this.addr,t),Po(n,t)}}function Ro(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(No(n,t))return;e.uniform3fv(this.addr,t),Po(n,t)}}function zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(No(n,t))return;e.uniform4fv(this.addr,t),Po(n,t)}}function Bo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(No(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Po(n,t)}else{if(No(n,r))return;jo.set(r),e.uniformMatrix2fv(this.addr,!1,jo),Po(n,r)}}function Vo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(No(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Po(n,t)}else{if(No(n,r))return;Ao.set(r),e.uniformMatrix3fv(this.addr,!1,Ao),Po(n,r)}}function Ho(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(No(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Po(n,t)}else{if(No(n,r))return;ko.set(r),e.uniformMatrix4fv(this.addr,!1,ko),Po(n,r)}}function Uo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Wo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(No(n,t))return;e.uniform2iv(this.addr,t),Po(n,t)}}function Go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(No(n,t))return;e.uniform3iv(this.addr,t),Po(n,t)}}function Ko(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(No(n,t))return;e.uniform4iv(this.addr,t),Po(n,t)}}function qo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(No(n,t))return;e.uniform2uiv(this.addr,t),Po(n,t)}}function Yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(No(n,t))return;e.uniform3uiv(this.addr,t),Po(n,t)}}function Xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(No(n,t))return;e.uniform4uiv(this.addr,t),Po(n,t)}}function Zo(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Qo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Zo(So):xo,n.setTexture2D(t||a,i)}function $o(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||To,i)}function es(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Zo(Co):Eo,n.setTextureCube(t||a,i)}function ts(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||wo,i)}function ns(e){switch(e){case 5126:return Io;case 35664:return Lo;case 35665:return Ro;case 35666:return zo;case 35674:return Bo;case 35675:return Vo;case 35676:return Ho;case 5124:case 35670:return Uo;case 35667:case 35671:return Wo;case 35668:case 35672:return Go;case 35669:case 35673:return Ko;case 5125:return qo;case 36294:return Jo;case 36295:return Yo;case 36296:return Xo;case 35678:case 36198:case 36298:case 36306:case 35682:return Qo;case 35679:case 36299:case 36307:return $o;case 35680:case 36300:case 36308:case 36293:return es;case 36289:case 36303:case 36311:case 36292:return ts}}function rs(e,t){e.uniform1fv(this.addr,t)}function is(e,t){let n=Mo(t,this.size,2);e.uniform2fv(this.addr,n)}function as(e,t){let n=Mo(t,this.size,3);e.uniform3fv(this.addr,n)}function os(e,t){let n=Mo(t,this.size,4);e.uniform4fv(this.addr,n)}function ss(e,t){let n=Mo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function cs(e,t){let n=Mo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ls(e,t){let n=Mo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function us(e,t){e.uniform1iv(this.addr,t)}function ds(e,t){e.uniform2iv(this.addr,t)}function fs(e,t){e.uniform3iv(this.addr,t)}function ps(e,t){e.uniform4iv(this.addr,t)}function ms(e,t){e.uniform1uiv(this.addr,t)}function hs(e,t){e.uniform2uiv(this.addr,t)}function gs(e,t){e.uniform3uiv(this.addr,t)}function _s(e,t){e.uniform4uiv(this.addr,t)}function vs(e,t,n){let r=this.cache,i=t.length,a=Fo(n,i);No(r,a)||(e.uniform1iv(this.addr,a),Po(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Zo(So):xo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ys(e,t,n){let r=this.cache,i=t.length,a=Fo(n,i);No(r,a)||(e.uniform1iv(this.addr,a),Po(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||To,a[e])}function bs(e,t,n){let r=this.cache,i=t.length,a=Fo(n,i);No(r,a)||(e.uniform1iv(this.addr,a),Po(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Zo(Co):Eo;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function xs(e,t,n){let r=this.cache,i=t.length,a=Fo(n,i);No(r,a)||(e.uniform1iv(this.addr,a),Po(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||wo,a[e])}function Ss(e){switch(e){case 5126:return rs;case 35664:return is;case 35665:return as;case 35666:return os;case 35674:return ss;case 35675:return cs;case 35676:return ls;case 5124:case 35670:return us;case 35667:case 35671:return ds;case 35668:case 35672:return fs;case 35669:case 35673:return ps;case 5125:return ms;case 36294:return hs;case 36295:return gs;case 36296:return _s;case 35678:case 36198:case 36298:case 36306:case 35682:return vs;case 35679:case 36299:case 36307:return ys;case 35680:case 36300:case 36308:case 36293:return bs;case 36289:case 36303:case 36311:case 36292:return xs}}var Cs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ns(t.type)}},ws=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ss(t.type)}},Ts=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Es=/(\w+)(\])?(\[|\.)?/g;function Ds(e,t){e.seq.push(t),e.map[t.id]=t}function Os(e,t,n){let r=e.name,i=r.length;for(Es.lastIndex=0;;){let a=Es.exec(r),o=Es.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ds(n,l===void 0?new Cs(s,e,t):new ws(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ts(s),Ds(n,e)),n=e}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Os(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function As(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var js=37297,Ms=0;function Ns(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ps=new H;function Fs(e){Gt._getMatrix(Ps,Gt.workingColorSpace,e);let t=`mat3( ${Ps.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(e)){case ct:return[t,`LinearTransferOETF`];case lt:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Is(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ns(e.getShaderSource(t),r)}return i}function Ls(e,t){let n=Fs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Rs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function zs(e,t){let n=Rs[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Bs=new V;function Vs(){return Gt.getLuminanceCoefficients(Bs),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Bs.x.toFixed(4)}, ${Bs.y.toFixed(4)}, ${Bs.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Hs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Gs).join(`
`)}function Us(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ws(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Gs(e){return e!==``}function Ks(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function qs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Js=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ys(e){return e.replace(Js,Xs)}function Xs(e,t){let n=Ra[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Ys(n)}var Zs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qs(e){return e.replace(Zs,$s)}function $s(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ec(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var tc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function nc(e){return tc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var rc={302:`ENVMAP_MODE_REFRACTION`};function ic(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:rc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ac={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function oc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ac[e.combine]||`ENVMAP_BLENDING_NONE`}function sc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=nc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=ic(n),d=oc(n),f=Hs(n),p=Us(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Gs).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Gs).join(`
`),g.length>0&&(g+=`
`)):(h=[ec(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Gs).join(`
`),g=[ec(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ra.tonemapping_pars_fragment,n.toneMapping===0?``:zs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ra.colorspace_pars_fragment,Ls(`linearToOutputTexel`,n.outputColorSpace),Vs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Gs).join(`
`)),o=Ys(o),o=Ks(o,n),o=qs(o,n),s=Ys(s),s=Ks(s,n),s=qs(s,n),o=Qs(o),s=Qs(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=As(i,i.VERTEX_SHADER,v),x=As(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Is(i,b,`vertex`),n=Is(i,x,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new ks(i,m),w=Ws(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,js)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ms++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var cc=0,lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uc(e),t.set(e,n)),n}},uc=class{constructor(e){this.id=cc++,this.code=e,this.usedTimes=0}};function dc(e){return e===1030||e===37490||e===36285}function fc(e,t,n,r,i,a){let o=new yn,s=new lc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=za[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,ee=m.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,N=!!b,re=N&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=de&&!!i.anisotropyMap,be=fe&&!!i.clearcoatMap,xe=fe&&!!i.clearcoatNormalMap,Se=fe&&!!i.clearcoatRoughnessMap,Ce=pe&&!!i.diffuseRoughnessMap,we=ge&&!!i.iridescenceMap,Te=ge&&!!i.iridescenceThicknessMap,Ee=_e&&!!i.sheenColorMap,De=_e&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ve&&!!i.transmissionMap,Me=ve&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,F=i.alphaTest>0,Fe=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Le=e.toneMapping);let I=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Re={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:ee,batchingColor:ee&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:N,envMapMode:N&&b.mapping,envMapPMREM:re,envMapMaxLod:re?I.length-1:null,envMapSize:re?I[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&dc(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ye,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:Ce,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ve,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:F,alphaHash:Fe,combine:i.combine,mapUv:te&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:P&&p(i.metalnessMap.channel),roughnessMapUv:ue&&p(i.roughnessMap.channel),anisotropyMapUv:ye&&p(i.anisotropyMap.channel),clearcoatMapUv:be&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:we&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(i.sheenRoughnessMap.channel),specularMapUv:Oe&&p(i.specularMap.channel),specularColorMapUv:ke&&p(i.specularColorMap.channel),specularIntensityMapUv:Ae&&p(i.specularIntensityMap.channel),transmissionMapUv:je&&p(i.transmissionMap.channel),thicknessMapUv:Me&&p(i.thicknessMap.channel),alphaMapUv:Pe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(te||Pe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Gt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=za[t];n=ji.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new sc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function pc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function mc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function hc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||mc),r.length>1&&r.sort(t||hc),i.length>1&&i.sort(t||hc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function _c(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new gc,e.set(t,[i])):n>=r.length?(i=new gc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function vc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new Un};break;case`SpotLight`:n={position:new V,direction:new V,color:new Un,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new Un,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new Un,groundColor:new Un};break;case`RectAreaLight`:n={color:new Un,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function yc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var bc=0;function xc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Sc(e){let t=new vc,n=yc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new cn,o=new cn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(xc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=U.LTC_FLOAT_1,r.rectAreaLTC2=U.LTC_FLOAT_2):(r.rectAreaLTC1=U.LTC_HALF_1,r.rectAreaLTC2=U.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=bc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Cc(e){let t=new Sc(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function wc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Cc(e),t.set(n,[a])):r>=i.length?(a=new Cc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Tc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ec=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dc=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Oc=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],kc=new cn,Ac=new V,jc=new V;function Mc(e,t,n){let r=new _i,i=new Lt,a=new Lt,o=new nn,s=new Ii,c=new Li,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Tc,fragmentShader:Ec}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new zr;m.setAttribute(`position`,new wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new li(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){z(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new an(i.x,i.y,{format:_e,type:ae,minFilter:k,magFilter:k,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new xi(i.x,i.y,ie),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=pe,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=E,d.map.depthTexture.magFilter=E}else l.isPointLight?(d.map=new Ja(i.x),d.map.depthTexture=new Si(i.x,re)):(d.map=new an(i.x,i.y),d.map.depthTexture=new xi(i.x,i.y,re)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=pe,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=k,d.map.depthTexture.magFilter=k):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=E,d.map.depthTexture.magFilter=E);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ac.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ac),jc.copy(e.position),jc.add(Dc[t]),e.up.copy(Oc[t]),e.lookAt(jc),e.updateMatrixWorld(),n.makeTranslation(-Ac.x,-Ac.y,-Ac.z),kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(kc,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new an(i.x,i.y,{format:_e,type:ae}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Nc(e,t){function n(){let t=!1,n=new nn,r=null,i=new nn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=wt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Un(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=te>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new nn().fromArray(ie),se=new nn().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(ee&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+M-1),N!==t&&(e.activeTexture(t),N=t)}function we(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+M-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function F(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Le(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function I(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function L(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function R(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Un(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Pe,texImage3D:F,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Re,uniformBlockBinding:L,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Le,viewport:I,reset:R}}function Pc(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):_t(`canvas`)}function v(e,t,n){let r=1,i=R(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ct:Gt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function M(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ee(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function ne(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function N(e){ie(e.target)}function re(e){ae(e.target)}function ie(e){e.removeEventListener(`dispose`,N),ne(e),se(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function ae(e){e.removeEventListener(`dispose`,re),ne(e),le(e)}function oe(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ae(t):ie(t))}m.clear(),d.clear()}function se(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ce(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function ce(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function le(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&ie(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let P=0;function ue(){P=0}function de(){return P}function fe(e){P=e}function pe(){let e=P;return e>=i.maxTextures&&z(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),P+=1,e}function he(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ge(t,i){let a=r.get(t);if(t.isVideoTexture&&Re(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{De(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function _e(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?De(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ve(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?De(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ye(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?Oe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let be={[C]:e.REPEAT,[w]:e.CLAMP_TO_EDGE,[T]:e.MIRRORED_REPEAT},xe={[E]:e.NEAREST,[D]:e.NEAREST_MIPMAP_NEAREST,[O]:e.NEAREST_MIPMAP_LINEAR,[k]:e.LINEAR,[A]:e.LINEAR_MIPMAP_NEAREST,[j]:e.LINEAR_MIPMAP_LINEAR},Se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Ce(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,be[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,be[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,be[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,xe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,xe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function we(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,N),te(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=he(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ce(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Te(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ee(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Te(n.start,r.width,4),c=Te(t.start,r.width,4);n.start<=i+1&&a===c&&Te(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function De(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=we(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Gt.getPrimaries(Gt.workingColorSpace),r=o.colorSpace===``?null:Gt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=L(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);Ce(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,C=u.dataReady,w=ee(o,t);if(o.isDepthTexture)m=M(o.format===me,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,w,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,w,m,t.width,t.height),C&&Ee(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,w,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(C){if(o.layerUpdates.size>0){let t=Pa(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,w,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,w,m,t.width,t.height,t.depth),C){if(o.layerUpdates.size>0){let i=Pa(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,w,m,t.width,t.height,t.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,w,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<w;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=R(g[0]);n.texStorage2D(e.TEXTURE_2D,w,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=R(t);n.texStorage2D(e.TEXTURE_2D,w,m,r.width,r.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Oe(t,o,s){if(o.image.length!==6)return;let c=we(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Gt.getPrimaries(Gt.workingColorSpace),r=o.colorSpace===``?null:Gt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=L(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),C=o.isVideoTexture!==!0,w=u.__version===void 0||c===!0,T=l.dataReady,E=ee(o,h);Ce(e.TEXTURE_CUBE_MAP,o);let D;if(o.isDepthTexture){if(x=M(o.format===me,o.type),w){if(C)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){C&&w&&n.texStorage2D(e.TEXTURE_CUBE_MAP,E,x,h.width,h.height);for(let t=0;t<6;t++){D=m[t].mipmaps;for(let r=0;r<D.length;r++){let i=D[r];o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(D=o.mipmaps,C&&w){D.length>0&&E++;let t=R(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,E,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){C?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<D.length;r++){let i=D[r].image[t].image;C?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{C?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<D.length;r++){let i=D[r];C?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ke(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Le(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=M(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function je(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ye(i.depthTexture,0):ge(i.depthTexture,0);let u=c.__webglTexture,d=Le(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Me(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)je(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?je(i.__webglFramebuffer[0],t,0):je(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ae(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ae(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(t,n,i){let a=r.get(t);n!==void 0&&ke(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Me(t)}function Pe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,re),te(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&I(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Le(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ae(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),Ce(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ke(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ke(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),Ce(c,a),ke(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),Ce(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ke(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ke(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Me(t)}function F(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Fe=[];function Ie(t){if(t.samples>0){if(I(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Fe.length=0,Fe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Fe.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Le(e){return Math.min(i.maxSamples,e.samples)}function I(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Re(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function L(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Gt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function R(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=fe,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=ve,this.setTextureCube=ye,this.rebindTextures=Ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=I,this.dispose=oe}function Fc(e,t){function n(n,r=``){let i,a=Gt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ic=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ci(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pi({vertexShader:Ic,fragmentShader:Lc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new li(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends Tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Rc,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Lt,C=null,w=null,T=new da;T.viewport=new nn;let E=new da;E.viewport=new nn;let D=[T,E],O=new _a,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Rn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Rn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Rn,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,te),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?me:pe,a=_.stencil?ce:re);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new an(d.textureWidth,d.textureHeight,{format:fe,type:M,depthTexture:new xi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new an(f.framebufferWidth,f.framebufferHeight,{format:fe,type:M,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),N(e,O,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new da,o.layers.enable(n),o.viewport=new nn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ci,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let oe=new Ia;oe.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},Bc=new cn,Vc=new H;Vc.set(-1,0,0,0,1,0,0,0,1);function Hc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ai(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Bc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Vc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Uc(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Wc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gc=null;function Kc(){return Gc===null&&(Gc=new fi(Wc,16,16,_e,ae),Gc.name=`DFG_LUT`,Gc.minFilter=k,Gc.magFilter=k,Gc.wrapS=w,Gc.wrapT=w,Gc.generateMipmaps=!1,Gc.needsUpdate=!0),Gc}var qc=class{constructor(e={}){let{canvas:t=vt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=M}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ye,ve,ge]),g=new Set([M,re,ne,ce,oe,se]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=ot;let ee=0,te=0,N=null,ie=-1,le=null,P=new nn,ue=new nn,de=null,fe=new Un(0),pe=0,me=t.width,he=t.height,_e=1,be=null,xe=null,Se=new nn(0,0,me,he),Ce=new nn(0,0,me,he),we=!1,Te=new _i,Ee=new yi,De=!1,Oe=!1,ke=new cn,Ae=new V,je=new nn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?_e:1}let F=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,I,Re,L,R,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),F===null){let t=`webgl2`;if(F=Fe(t,e),F===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),B(`WebGLRenderer: `+e.message),e}function nt(){Ie=new po(F),Ie.init(),$e=new Fc(F,Ie),Le=new Ka(F,Ie,e,$e),I=new Nc(F,Ie),Le.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),A=F.createFramebuffer(),Re=new go(F),L=new pc,R=new Pc(F,Ie,I,L,Le,$e,Re),ze=new fo(T),Be=new La(F),et=new Wa(F,Be),Ve=new mo(F,Be,Re,et),He=new vo(F,Ve,Be,et,Re),Xe=new _o(F,Le,R),qe=new qa(L),Ue=new fc(T,ze,Ie,Le,et,qe),We=new Hc(T,L),Ge=new _c,Ke=new wc(Ie),Ye=new Ua(T,ze,I,He,p,s),Je=new Mc(T,He,Le),tt=new Uc(F,Re,Le,I),Ze=new Ga(F,Ie,Re),Qe=new ho(F,Ie,Re),Re.programs=Ue.programs,T.capabilities=Le,T.extensions=Ie,T.properties=L,T.renderLists=Ge,T.shadowMap=Je,T.state=I,T.info=Re}m!==1009&&(w=new bo(m,t.width,t.height,o,r,i));let rt=new zc(T,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){rt.isPresenting?z(`WebGLRenderer: Can't change size while VR device is presenting.`):(me=e,he=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(me*_e,he*_e).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(P.copy(Se).multiplyScalar(Pe()).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(ue.copy(Ce).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Ye.dispose(),Ge.dispose(),Ke.dispose(),R.dispose(),L.dispose(),ze.dispose(),He.dispose(),Ve.dispose(),et.dispose(),tt.dispose(),Ue.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,ht),rt.removeEventListener(`sessionend`,gt),_t.stop()};function it(e){e.preventDefault(),bt(`WebGLRenderer: Context Lost.`),E=!0}function at(){bt(`WebGLRenderer: Context Restored.`),E=!1;let e=Re.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;nt(),Re.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function st(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),L.remove(e)}function ut(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Be.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),De===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ke.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),Oe=this.localClippingEnabled,De=qe.init(this.clippingPlanes,Oe),De===!0&&qe.setGlobalState(this.clippingPlanes,t),D!==null&&Je.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function ht(){_t.stop()}function gt(){_t.start()}let _t=new Ia;_t.setAnimationLoop(pt),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(e){ft=e,rt.setAnimationLoop(e),e===null?_t.stop():_t.start()},rt.addEventListener(`sessionstart`,ht),rt.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Ke.get(e,C.length),x.init(t),x.state.textureUnits=R.getTextureUnits(),C.push(x),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ee.setFromArrayCamera(t):Te.setFromProjectionMatrix(ke,mt,t.reversedDepth),Oe=this.localClippingEnabled,De=qe.init(this.clippingPlanes,Oe),b=Ge.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,T.sortObjects)}yt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(be,xe),Ne=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ne&&Ye.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),De===!0&&qe.beginShadows();let i=x.state.shadowsArray;if(Je.render(i,e,t),De===!0&&qe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Ne&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(b,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Ne&&Ye.render(e),xt(b,e,t)}N!==null&&te===0&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),et.resetDefaultState(),ie=-1,le=null,C.pop(),C.length>0?(x=C[C.length-1],R.setTextureUnits(x.state.textureUnits),De===!0&&qe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=He.update(e),a=e.material;a.visible&&b.push(e,i,a,n,je.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,je.z,s,t)}}else a.visible&&b.push(e,i,a,n,je.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),De===!0&&qe.setGlobalState(T.clippingPlanes,n),r&&I.viewport(P.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new an(1,1,{generateMipmaps:!0,type:e?ae:M,minFilter:j,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(fe),pe=T.getClearAlpha(),pe<1&&T.setClearColor(16777215,.5),T.clear(),Ne&&Ye.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),De===!0&&qe.setGlobalState(T.clippingPlanes,r),wt(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(fe,pe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Et(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Dt(e,t,n){t.isScene!==!0&&(t=Me);let r=L.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=Ue.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),At(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Et(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ot(e,t,n,r,i){let a=L.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Dt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ks.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Me),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Gt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),b=x.state.lights;if(De===!0&&(Oe===!0||e!==le)){let t=e===le&&r.id===ie;qe.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Et(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?Ot(r,t,i,s,h):Dt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(I.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==ie&&(ie=r.id,O=!0),E||le!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(F,`projectionMatrix`,e.projectionMatrix),A.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(F,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&A.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(F,`sunShadowMap`,b.state.sunShadowMap,R),b.state.directionalShadowMap.length>0&&A.setValue(F,`directionalShadowMap`,b.state.directionalShadowMap,R),b.state.spotShadowMap.length>0&&A.setValue(F,`spotShadowMap`,b.state.spotShadowMap,R),b.state.pointShadowMap.length>0&&A.setValue(F,`pointShadowMap`,b.state.pointShadowMap,R)),i.isSkinnedMesh){A.setOptional(F,i,`bindMatrix`),A.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(A.setOptional(F,i,`batchingTexture`),A.setValue(F,`batchingTexture`,i._matricesTexture,R),A.setOptional(F,i,`batchingIdTexture`),A.setValue(F,`batchingIdTexture`,i._indirectTexture,R),A.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&Xe.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=Kc()),O){if(A.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Mt(j,k),a&&r.fog===!0&&We.refreshFogUniforms(j,a),We.refreshMaterialUniforms(j,r,_e,he,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}ks.upload(F,kt(v),j,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ks.upload(F,kt(v),j,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(F,`center`,i.center),A.setValue(F,`modelViewMatrix`,i.modelViewMatrix),A.setValue(F,`normalMatrix`,i.normalMatrix),A.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,w),tt.bind(n,w)}}return w}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,ee=t,te=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,I.viewport(P),I.scissor(ue),I.setScissorTest(de),ie=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else P.copy(Se).multiplyScalar(_e).floor(),ue.copy(Ce).multiplyScalar(_e).floor(),de=we;if(n!==0&&(r=O),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(P),I.scissor(ue),I.setScissorTest(de),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ie=-1};function Pt(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=N===null?null:L.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=N===null?null:L.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ct(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,k),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ee=0,te=0,N=null,I.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return mt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}},Jc={ticksPerSecond:20,maxGuests:1024,speeds:[0,1,2,4],maxCatchUpTicks:8},Yc={walkTilesPerSecond:3,speedJitter:.18,idleSecondsMin:2,idleSecondsMax:9,radius:.075,lookAhead:.75,personalSpace:.06,passToRight:.7,steering:.3,relaxIterations:3,makeWay:.55,settleWithin:2,settleAfterTicks:20,tobler:{steepness:3.5,offset:.05},slumpBelow:35,slumpPace:.8,maxPathRise:2,stuckSeconds:12,animPerTile:256},Xc=8/39.19,Zc={metersPerLevel:1,metersPerTile:1/Xc},Qc={maxLevel:63,maxTileRise:4,repose:{sand:3.2,soil:3.7}},$c={minRise:1,treadsPerTile:4},el=[1,2,4],tl=Math.PI/6,nl=Math.cos(tl),rl=Math.sin(tl),il=32*Math.SQRT2,al=200,ol=320;function sl(e){return Math.PI/4-e*Math.PI/2}var cl=class{centerX;centerY;level;zoom;magnify=1;mapSize;three=new fa(-1,1,1,-1,40,360);right=new V;toward=new V;back=new V;gridPx={x:0,y:0};up=new V;rotationValue;yaw;swingFrom=0;swingTo=0;swingStart=-1;target=new V;constructor(e,t,n,r,i,a){this.mapSize=e,this.centerX=t,this.centerY=n,this.level=r,this.rotationValue=i,this.yaw=sl(i),this.swingTo=this.yaw,this.zoom=a,this.updateAxes()}get rotation(){return this.rotationValue}set rotation(e){if(e===this.rotationValue)return;let t=((e-this.rotationValue)%4+4)%4;this.swingFrom=this.yaw,this.swingTo-=Math.PI/2*(t===3?-1:t),this.swingStart=NaN,this.rotationValue=e}get pixelsPerUnit(){return il/el[this.zoom]}get swinging(){return this.swingStart!==-1}updateAxes(){let e=Math.sin(this.yaw),t=Math.cos(this.yaw);this.toward.set(e,0,t),this.right.set(t,0,-e),this.back.set(e*nl,rl,t*nl),this.up.crossVectors(this.back,this.right)}update(e,t,n,r){if(this.swingStart!==-1){Number.isNaN(this.swingStart)&&(this.swingStart=e);let t=r?1:Math.min(1,(e-this.swingStart)/ol),n=t*t*(3-2*t);this.yaw=this.swingFrom+(this.swingTo-this.swingFrom)*n,t>=1&&(this.yaw=sl(this.rotationValue),this.swingTo=this.yaw,this.swingStart=-1)}this.updateAxes();let i=this.pixelsPerUnit,a=this.three;a.left=-t/2/i,a.right=t/2/i,a.top=n/2/i,a.bottom=-n/2/i,a.updateProjectionMatrix(),this.target.set(this.centerX,this.level*Xc,this.centerY);let o=this.target.dot(this.right)*i,s=this.target.dot(this.up)*i,c=Math.round(o),l=Math.round(s);this.target.addScaledVector(this.right,(c-o)/i).addScaledVector(this.up,(l-s)/i),this.gridPx.x=c,this.gridPx.y=l,a.position.copy(this.target).addScaledVector(this.back,al),a.up.copy(this.up),a.lookAt(this.target),a.updateMatrixWorld()}pan(e,t){let n=this.pixelsPerUnit,r=t/n/rl,i=this.centerX+this.right.x*e/n+this.toward.x*r,a=this.centerY+this.right.z*e/n+this.toward.z*r;this.centerX=Math.min(this.mapSize,Math.max(0,i)),this.centerY=Math.min(this.mapSize,Math.max(0,a))}worldAt(e,t,n,r){let i=this.pixelsPerUnit,a=(t/i-(this.level-n)*Xc*nl)/rl;return r.x=this.centerX+this.right.x*e/i+this.toward.x*a,r.y=this.centerY+this.right.z*e/i+this.toward.z*a,r}},ll=[0];function ul(...e){let t=ll.length;return ll.push(...e),e.map((e,n)=>t+n)}function dl(e){return ul(e)[0]}var fl=dl(2825774),W={sand:ul(16246720,15388568,13807220,11241046),grass:ul(10736748,8173650,5937730,4093494),foliage:ul(9424992,5417044,3113036,1857593),wood:ul(13606764,10777675,7884852,5387300),stucco:ul(16775402,15720390,13679004,10784374),thatch:ul(15780464,13608014,10910776,8017961),stone:ul(9341078,7038323,5130583,3486011),path:ul(15853003,14075558),coral:ul(16155242,13392461),teal:ul(4702640,2919814),magenta:ul(14177679,10566766),yellow:ul(16372820,13740603),sunburn:ul(16293002,14447716)},pl=[ul(16242360,14659729),ul(15120269,13078633),ul(13143649,10841415),ul(10117949,8014640),ul(7095340,5124127)],G={deep:dl(3043235),deepCycle:ul(3043235,3043235,4885693,9225438),shallow:dl(4106175),shallowCycle:ul(4106175,4106175,6471887,10936546),foamCycle:ul(16055288,12576998,8179668,4106175),pool:dl(5424348),poolCycle:ul(5424348,5424348,8444136,12906740)},ml=ul(16767072,16751160,15755818),hl=dl(5995929),gl=ul(10475242,15004910),_l=dl(5995929),vl=[[W.teal[0],W.teal[1]],[W.foliage[0],W.foliage[1]],[W.yellow[0],W.yellow[1]],[W.coral[0],W.coral[1]],[W.magenta[0],W.magenta[1]],[W.magenta[1],W.wood[3]]],yl={shirt:[240,241],pants:[242,243],skin:[244,245],hair:[246,247]},bl=[{indices:G.deepCycle,periodMs:260},{indices:G.shallowCycle,periodMs:220},{indices:G.foamCycle,periodMs:180,reverse:!0},{indices:G.poolCycle,periodMs:150},{indices:ml,periodMs:110}],xl={day:0,golden:1,dusk:2,night:3,dawn:4,overcast:5,storm:6,heat:7},Sl=[{mul:[1,1,1],add:[0,0,0],desaturate:0},{mul:[1.1,.95,.76],add:[.05,.02,0],desaturate:0},{mul:[.9,.6,.7],add:[.07,.01,.09],desaturate:-.2},{mul:[.3,.36,.56],add:[.02,.028,.075],desaturate:.3},{mul:[.9,.82,.92],add:[.04,.03,.06],desaturate:.05},{mul:[.84,.88,.94],add:[.03,.035,.05],desaturate:.38},{mul:[.52,.58,.66],add:[.02,.03,.05],desaturate:.5},{mul:[1.05,1,.88],add:[.06,.04,.01],desaturate:.08}],Cl=[{},{[gl[0]]:16041356,[gl[1]]:16640182,[hl]:15247970,[G.deep]:3107478,[G.deepCycle[0]]:3107478,[G.deepCycle[1]]:3107478,[G.deepCycle[2]]:15773792,[G.deepCycle[3]]:16773304,[G.shallowCycle[2]]:16040048,[G.shallowCycle[3]]:16774344,[G.foamCycle[0]]:16774364},{[gl[0]]:6047878,[gl[1]]:16030328,[hl]:16764784,[G.deep]:4602498,[G.deepCycle[0]]:4602498,[G.deepCycle[1]]:4602498,[G.deepCycle[2]]:15764074,[G.deepCycle[3]]:16769696,[G.shallow]:8018586,[G.shallowCycle[0]]:8018586,[G.shallowCycle[1]]:8018586,[G.shallowCycle[2]]:16751218,[G.shallowCycle[3]]:16771248,[G.pool]:6978240,[G.poolCycle[0]]:6978240,[G.poolCycle[1]]:6978240,[G.poolCycle[2]]:13148368,[G.poolCycle[3]]:16767168,[G.foamCycle[0]]:16770260,[G.foamCycle[1]]:14198976,[G.foamCycle[2]]:11042992,[G.foamCycle[3]]:8018586},{[gl[0]]:1186360,[gl[1]]:2634588,[hl]:16765806,[G.deepCycle[2]]:4086926,[G.deepCycle[3]]:12111083,[G.shallowCycle[2]]:4221070,[G.shallowCycle[3]]:11060448},{[gl[0]]:11187422,[gl[1]]:16306880,[hl]:15118448},{[gl[0]]:10135216,[gl[1]]:13160660},{[gl[0]]:4608092,[gl[1]]:7108226,[hl]:14200944},{[gl[0]]:15260864,[gl[1]]:16511708}],wl=[void 0,void 0,{mul:[.5,.68,.8],add:[.05,.05,.13],desaturate:0},void 0,void 0,void 0,void 0,void 0],Tl=new Set([...W.grass,...W.foliage]),El=new Set(ml);function Dl(e){return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function Ol([e,t,n],r){let i=.3*e+.59*t+.11*n,a=r.desaturate;return[e+(i-e)*a,t+(i-t)*a,n+(i-n)*a].map((e,t)=>Math.min(1,Math.max(0,e*r.mul[t]+r.add[t])))}function kl(){let e=new Uint8Array(8192);for(let t=0;t<8;t++)for(let n=0;n<256;n++){let r=n<ll.length?ll[n]:16711935,i=Cl[t][n],a;a=i===void 0?El.has(n)&&t!==xl.day?Dl(r):Ol(Dl(r),Tl.has(n)&&wl[t]||Sl[t]):Dl(i);let o=(t*256+n)*4;e[o]=Math.round(a[0]*255),e[o+1]=Math.round(a[1]*255),e[o+2]=Math.round(a[2]*255),e[o+3]=255}return e}function Al(e,t,n){t.set(e);for(let r of bl){let i=r.indices.length,a=Math.floor(n/r.periodMs)%i,o=r.reverse?i-a:a;for(let n=0;n<8;n++)for(let a=0;a<i;a++){let s=(n*256+r.indices[(a+o)%i])*4,c=(n*256+r.indices[a])*4;t[c]=e[s],t[c+1]=e[s+1],t[c+2]=e[s+2]}}}function jl(e){let t=e<ll.length?ll[e]:16711935;return[t>>16&255,t>>8&255,t&255]}var Ml=[{shirt:`coral`,shirtShade:0,pants:`stucco`,pantsShade:1},{shirt:`teal`,shirtShade:0,pants:`sand`,pantsShade:2},{shirt:`yellow`,shirtShade:0,pants:`teal`,pantsShade:0},{shirt:`stucco`,shirtShade:0,pants:`stone`,pantsShade:1},{shirt:`magenta`,shirtShade:0,pants:`stucco`,pantsShade:1},{shirt:`foliage`,shirtShade:0,pants:`sand`,pantsShade:1},{shirt:`stucco`,shirtShade:0,pants:`coral`,pantsShade:0},{shirt:`teal`,shirtShade:0,pants:`stucco`,pantsShade:1},{shirt:`coral`,shirtShade:0,pants:`stone`,pantsShade:1},{shirt:`yellow`,shirtShade:0,pants:`wood`,pantsShade:1},{shirt:`wood`,shirtShade:0,pants:`sand`,pantsShade:1},{shirt:`magenta`,shirtShade:0,pants:`stone`,pantsShade:0},{shirt:`stone`,shirtShade:0,pants:`sand`,pantsShade:2},{shirt:`sand`,shirtShade:0,pants:`teal`,pantsShade:1},{shirt:`thatch`,shirtShade:0,pants:`stucco`,pantsShade:1},{shirt:`teal`,shirtShade:1,pants:`stone`,pantsShade:2}],Nl=[{ramp:`outline`,shade:0},{ramp:`wood`,shade:2},{ramp:`wood`,shade:1},{ramp:`thatch`,shade:0},{ramp:`stone`,shade:0},{ramp:`wood`,shade:3}];function Pl(e){return W[e]}function Fl(e,t){return[e[Math.min(t,e.length-1)],e[Math.min(t+1,e.length-1)]]}function Il(){let e=new Uint8Array(262144),t=(t,n,r)=>{let i=(t*256+n)*4;e[i]=r,e[i+3]=255};for(let e=0;e<256;e++){for(let n=0;n<256;n++)t(e,n,n);let n=Ml[e&15],r=e>>4&7,i=r===5?W.sunburn:pl[Math.min(r,pl.length-1)],a=Nl[(e*7+r)%Nl.length],o=a.ramp===`outline`?[fl,fl]:Fl(Pl(a.ramp),a.shade),s=[[yl.shirt,Fl(Pl(n.shirt),n.shirtShade)],[yl.pants,Fl(Pl(n.pants),n.pantsShade)],[yl.skin,i],[yl.hair,o]];for(let[n,r]of s)t(e,n[0],r[0]),t(e,n[1],r[1])}return e}var K={grass:1,sand:2,rock:3,foliage:4,wood:5,stucco:6,thatch:7,path:8,coral:9,teal:10,magenta:11,yellow:12,sandstone:13,pathEdge:14,coping:15,poolTile:16,basalt:17,soil:18,gravel:19,asphalt:27,window:20,torch:21,deep:22,shallow:23,foam:24,pool:25,outline:26,overlay:28,roofTile:34,shingle:35,metal:36,adobe:37,siding:38,slate:39,poolDeep:40,windowDark:41,hedge:42,poolDeck:43,decking:44,clay:45,courtGreen:46,courtDark:47,direct:255},Ll={shaded:0,fixed:1,cycle:2},Rl=(e,t=1)=>({kind:Ll.shaded,steps:e,contrast:t}),zl={[K.grass]:Rl(W.grass,.85),[K.sand]:Rl(W.sand,.55),[K.rock]:Rl(W.stone),[K.basalt]:Rl([W.stone[1],W.stone[2],W.stone[3],W.stone[3]]),[K.foliage]:Rl(W.foliage),[K.hedge]:Rl(W.foliage),[K.clay]:Rl([W.coral[1],W.coral[1],W.wood[2],W.wood[3]]),[K.courtGreen]:Rl([W.foliage[1],W.foliage[1],W.foliage[2],W.foliage[3]]),[K.courtDark]:Rl([W.foliage[2],W.foliage[2],W.foliage[3],W.foliage[3]]),[K.soil]:Rl([W.wood[0],W.wood[1],W.wood[2],W.wood[3]],.85),[K.asphalt]:Rl([W.stone[1],W.stone[2],W.stone[3],W.stone[3]]),[K.gravel]:Rl([W.stone[0],W.stone[0],W.stone[1],W.stone[2]]),[K.wood]:Rl(W.wood),[K.stucco]:Rl(W.stucco),[K.thatch]:Rl(W.thatch),[K.path]:Rl([W.path[0],W.path[0],W.path[1],W.stucco[2]]),[K.poolDeck]:Rl([W.stucco[0],W.stucco[0],W.stucco[1],W.stucco[2]]),[K.decking]:Rl([W.wood[0],W.wood[0],W.wood[1],W.wood[2]]),[K.coral]:Rl([W.coral[0],W.coral[0],W.coral[1],W.coral[1]]),[K.teal]:Rl([W.teal[0],W.teal[0],W.teal[1],W.teal[1]]),[K.magenta]:Rl([W.magenta[0],W.magenta[0],W.magenta[1],W.magenta[1]]),[K.yellow]:Rl([W.yellow[0],W.yellow[0],W.yellow[1],W.yellow[1]]),[K.sandstone]:Rl([W.sand[1],W.sand[2],W.sand[3],W.wood[2]]),[K.pathEdge]:Rl([W.stucco[2],W.stucco[2],W.stucco[3],W.stone[1]]),[K.coping]:Rl([W.stucco[0],W.stucco[0],W.stucco[1],W.stucco[2]]),[K.poolTile]:Rl([W.teal[0],W.teal[0],W.teal[1],G.deep]),[K.roofTile]:Rl([W.coral[1],W.coral[1],W.wood[2],W.wood[3]]),[K.shingle]:Rl([W.wood[1],W.wood[2],W.wood[3],W.stone[3]]),[K.metal]:Rl([W.stone[0],W.stone[1],W.stone[2],W.stone[3]]),[K.adobe]:Rl([W.sand[1],W.sand[2],W.sand[3],W.sand[3]],.7),[K.slate]:Rl([W.stone[0],W.stone[1],W.stone[2],W.stone[3]]),[K.siding]:Rl([W.stucco[0],W.stucco[1],W.stucco[2],W.stucco[3]]),[K.window]:{kind:Ll.fixed,steps:[hl]},[K.windowDark]:{kind:Ll.fixed,steps:[_l]},[K.outline]:{kind:Ll.fixed,steps:[fl]},[K.torch]:{kind:Ll.cycle,steps:[ml[0],ml[1],ml[2],ml[1]],base:ml[1]},[K.deep]:{kind:Ll.cycle,steps:G.deepCycle,base:G.deep},[K.shallow]:{kind:Ll.cycle,steps:G.shallowCycle,base:G.shallow},[K.foam]:{kind:Ll.cycle,steps:G.foamCycle,base:G.shallow},[K.pool]:{kind:Ll.cycle,steps:G.poolCycle,base:G.pool},[K.poolDeep]:{kind:Ll.cycle,steps:G.shallowCycle,base:G.shallow},...Object.fromEntries(vl.map(([e,t],n)=>[K.overlay+n,Rl([e,e,t,t])]))};vl.length;var Bl={yellowFlower:250,coralFlower:251},Vl={[Bl.yellowFlower]:W.yellow[0],[Bl.coralFlower]:W.coral[0]},Hl={outlined:1,torchlit:2,shadowed:4,refused:8,daylit:16};function Ul(){let e=new Uint8Array(8192),t=(t,n,r)=>{let i=(n*256+t)*4;e[i]=r,e[i+3]=255};for(let[e,n]of Object.entries(zl)){let r=Number(e);for(let e=0;e<4;e++)t(r,e,n.steps[Math.min(e,n.steps.length-1)]);t(r,4,n.kind),t(r,5,n.base??n.steps[0]),t(r,6,Math.round((n.contrast??1)*255))}for(let[e,n]of Object.entries(Vl))t(Number(e),7,n);return e}var Wl=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Gl=`
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uBuffer;
uniform sampler2D uPalette;
uniform sampler2D uLut;
uniform sampler2D uRamps;
uniform vec2 uSize;
uniform vec2 uDitherOrigin;
uniform vec4 uRows;   // rowA, rowB, blend, rowCount
uniform vec4 uLight;  // night (0 day .. 1 night)
uniform vec4 uWeather; // overcast, storm, heat (0..1 each, already scaled by daylight), lightning flash
uniform vec4 uRain;    // how hard it's raining (0..1), seconds

float idx(float v) { return floor(v * 255.0 + 0.5); }
vec4 at(vec2 px) { return texture(uBuffer, (px + 0.5) / uSize); }
float ramp(float id, float row) { return idx(texture(uRamps, vec2((id + 0.5) / 256.0, (row + 0.5) / 8.0)).r); }
float lut(float slot, float i) { return idx(texture(uLut, vec2((i + 0.5) / 256.0, (slot + 0.5) / 256.0)).r); }
vec3 paletteRow(float i, float row) { return texture(uPalette, vec2((i + 0.5) / 256.0, (row + 0.5) / uRows.w)).rgb; }
vec3 palette(float i) { return mix(paletteRow(i, uRows.x), paletteRow(i, uRows.y), uRows.z); }
float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
bool outlined(vec4 g) { return mod(idx(g.a), 2.0) >= 1.0; }
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

// Rain: one-pixel streaks four long, leaning with the wind, in columns five pixels apart, each
// column falling at its own pace. More of the slots hold a drop the harder it rains.
bool raindrop(vec2 px, float t, float amount) {
  float x = px.x + floor(px.y / 3.0);
  float col = floor(x / 5.0);
  float h = hash(vec2(col, 7.0));
  if (abs(mod(x, 5.0) - floor(h * 5.0)) > 0.5) return false;
  float y = px.y + t * (190.0 + h * 90.0) + h * 400.0;
  if (mod(y, 19.0) >= 4.0) return false;
  return hash(vec2(col, floor(y / 19.0))) < amount * 0.6;
}

void main() {
  vec2 px = floor(vUv * uSize);
  vec4 g = at(px);
  float mat = idx(g.r);
  float flags = idx(g.a);
  float i;
  if (!outlined(g) && (outlined(at(px + vec2(1, 0))) || outlined(at(px - vec2(1, 0))) || outlined(at(px + vec2(0, 1))) || outlined(at(px - vec2(0, 1))))) {
    i = ${fl}.0;
  } else if (mat < 0.5) {
    i = vUv.y * 1.15 - 0.1 > bayer4(px) ? ${gl[0]}.0 : ${gl[1]}.0;
  } else if (mat > 254.5) {
    i = lut(idx(g.b), idx(g.g));
  } else {
    // A refused ghost preview shows as coral, shaded like the real thing would be.
    bool refused = mod(floor(flags / ${Hl.refused}.0), 2.0) >= 1.0;
    if (refused) mat = ${K.coral}.0;
    float kind = ramp(mat, 4.0);
    float b = refused ? 128.0 : idx(g.b);
    if (kind == ${Ll.fixed}.0) {
      i = ramp(mat, 0.0);
    } else if (kind == ${Ll.cycle}.0) {
      i = b < 0.5 ? ramp(mat, 5.0) : ramp(mat, b - 1.0);
    } else if (b >= 249.5) {
      i = ramp(b, 7.0);
    } else {
      // Slopes are softened per material; a shadow is always one whole step darker, unless
      // cloud has softened it.
      float contrast = ramp(mat, 6.0) / 255.0;
      float shadow = mod(floor(flags / ${Hl.shadowed}.0), 2.0) * (1.0 - 0.7 * max(uWeather.x, uWeather.y));
      float shade = 1.0 + (g.g * 4.0 - 1.0) * contrast + (b - 128.0) / 32.0 + shadow;
      float p = clamp(shade, 0.0, 3.0);
      float k = floor(p);
      float frac = p - k;
      float step = frac < 0.12 ? k : frac > 0.88 ? k + 1.0 : (frac > bayer4(px + uDitherOrigin) ? k + 1.0 : k);
      i = ramp(mat, min(step, 3.0));
    }
  }
  bool daylit = mod(floor(flags / ${Hl.daylit}.0), 2.0) >= 1.0;
  vec3 color = daylit ? paletteRow(i, ${xl.day}.0) : palette(i);
  if (!daylit && mod(floor(flags / ${Hl.torchlit}.0), 2.0) >= 1.0 && uLight.x > 0.0 && mat > 0.5 && mat < 254.5) {
    // Firelight: the surface's daylight brightness, tinted orange, keeping a little of its hue.
    vec3 day = paletteRow(i, ${xl.day}.0);
    float luma = dot(day, vec3(0.3, 0.59, 0.11));
    vec3 warm = mix(vec3(luma) * vec3(1.3, 0.82, 0.46), day, 0.3);
    color = mix(color, warm, uLight.x * 0.78);
  }
  // Pool lights: after dark, pool water glows its own daytime blue.
  if (!daylit && uLight.x > 0.0 && (mat == ${K.pool}.0 || mat == ${K.poolDeep}.0)) {
    color = mix(color, paletteRow(i, ${xl.day}.0) * vec3(0.85, 1.0, 1.08), uLight.x * 0.8);
  }
  if (!daylit) {
    // The weather's palette over the day's: cloud, a storm's dark, a heat wave's haze.
    if (uWeather.x > 0.0) color = mix(color, paletteRow(i, ${xl.overcast}.0), uWeather.x);
    if (uWeather.y > 0.0) color = mix(color, paletteRow(i, ${xl.storm}.0), uWeather.y);
    if (uWeather.z > 0.0) color = mix(color, paletteRow(i, ${xl.heat}.0), uWeather.z);
    // Rain falls in front of everything; lightning lights everything up for a moment.
    if (uRain.x > 0.0 && raindrop(px, uRain.y, uRain.x)) color = mix(color, palette(${gl[1]}.0) * 1.08, 0.75);
    if (uWeather.w > 0.0) color = mix(color, paletteRow(i, ${xl.day}.0) * 1.15, uWeather.w);
  }
  outColor = vec4(color, 1.0);
}
`,Kl=[[0,xl.night],[5,xl.night],[6.2,xl.dawn],[7.6,xl.day],[16.4,xl.day],[17.7,xl.golden],[19,xl.dusk],[20.3,xl.night],[24,xl.night]];function ql(e){let t=(e%24+24)%24;for(let e=0;e+1<Kl.length;e++){let[n,r]=Kl[e],[i,a]=Kl[e+1];if(t>=n&&t<=i)return{a:r,b:a,t:i===n?0:(t-n)/(i-n)}}return{a:xl.night,b:xl.night,t:0}}function Jl(e){let t=(e%24+24)%24;return t>=20.3||t<5?1:t>=18.6?(t-18.6)/(20.3-18.6):t<6.6?1-(t-5)/1.6:0}function Yl(e,t,n){let r=new fi(e,t,n,fe,M);return r.magFilter=E,r.minFilter=E,r.generateMipmaps=!1,r.flipY=!1,r.needsUpdate=!0,r}var Xl=class{scene=new Gn;camera=new fa(-1,1,1,-1,0,1);material;baseRows=kl();cycled=new Uint8Array(8192);paletteTexture;lastCycleKey=-1;shown={overcast:0,storm:0,heat:0,rain:0};lastUpdate=-1;onFlash=()=>{};get rain(){return this.shown.rain}nextFlash=0;flashAt=-1e9;constructor(){this.cycled.set(this.baseRows),this.paletteTexture=Yl(this.cycled,256,8),this.material=new Pi({glslVersion:pt,vertexShader:Wl,fragmentShader:Gl,uniforms:{uBuffer:{value:null},uPalette:{value:this.paletteTexture},uLut:{value:Yl(Il(),256,256)},uRamps:{value:Yl(Ul(),256,8)},uSize:{value:new Lt(1,1)},uDitherOrigin:{value:new Lt},uRows:{value:new nn(0,0,0,8)},uLight:{value:new nn},uWeather:{value:new nn},uRain:{value:new nn}},depthTest:!1,depthWrite:!1});let e=new li(new Ti(2,2),this.material);e.frustumCulled=!1,this.scene.add(e)}setBuffer(e,t,n,r,i){let a=this.material.uniforms;a.uBuffer.value=e,a.uSize.value.set(t,n),a.uDitherOrigin.value.set((r%4+4)%4,(i%4+4)%4)}update(e,t,n,r){let{a:i,b:a,t:o}=ql(e),c=Jl(e);this.material.uniforms.uRows.value.set(i,a,o,8),this.material.uniforms.uLight.value.x=c;let l={overcast:n===s.cloudy?.5:n===s.showers?.3+.65*r:n===s.rain?.75+.25*r:0,storm:n===s.storm?.85:0,heat:n===s.heat?.5*Math.max(0,Math.min(1,(e-9)/3,(18-e)/3)):0,rain:r},u=this.lastUpdate<0||t===0?1/0:Math.max(0,t-this.lastUpdate);this.lastUpdate=t;let d=1-Math.exp(-u/1500);for(let e of[`overcast`,`storm`,`heat`,`rain`])this.shown[e]+=(l[e]-this.shown[e])*d;let f=1-c,p=0;if(n===s.storm&&t>0){t>=this.nextFlash&&(this.flashAt=t,this.onFlash(),this.nextFlash=t+2500+Math.random()*6500);let e=t-this.flashAt;p=e<90?.55:e<160?.1:e<260?.4:0}this.material.uniforms.uWeather.value.set(this.shown.overcast*f,this.shown.storm*(.35+.65*f),this.shown.heat*f,p),this.material.uniforms.uRain.value.set(this.shown.rain,t/1e3,0,0);let m=Math.floor(t/10);m!==this.lastCycleKey&&(this.lastCycleKey=m,Al(this.baseRows,this.cycled,t),this.paletteTexture.needsUpdate=!0)}};function Zl(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function Ql(e,t,n){let r=e+t-n,i=Math.abs(r-e),a=Math.abs(r-t),o=Math.abs(r-n);return i<=a&&i<=o?e:a<=o?t:n}async function $l(e,t){let n=[137,80,78,71,13,10,26,10];for(let t=0;t<8;t++)if(e[t]!==n[t])throw Error(`Not a PNG`);let r=8,i=0,a=0,o=0,s,c=[];for(;r<e.length;){let t=Zl(e,r),n=String.fromCharCode(e[r+4],e[r+5],e[r+6],e[r+7]),l=e.subarray(r+8,r+8+t);if(n===`IHDR`){if(i=Zl(l,0),a=Zl(l,4),l[8]!==8)throw Error(`Only 8-bit PNGs are supported`);if(o=l[9],l[12]!==0)throw Error(`Interlaced PNGs are not supported`)}else if(n===`PLTE`)s=l.slice();else if(n===`IDAT`)c.push(l);else if(n===`IEND`)break;r+=12+t}let l=c.reduce((e,t)=>e+t.length,0),u=new Uint8Array(l),d=0;for(let e of c)u.set(e,d),d+=e.length;let f=await t(u),p=o===3?1:o===2?3:o===6?4:0;if(!p)throw Error(`Unsupported PNG color type ${o}`);let m=i*p,h=new Uint8Array(m*a);for(let e=0;e<a;e++){let t=f[e*(m+1)],n=e*(m+1)+1,r=e*m;for(let i=0;i<m;i++){let a=f[n+i],o=i>=p?h[r+i-p]:0,s=e>0?h[r-m+i]:0,c=e>0&&i>=p?h[r-m+i-p]:0,l;switch(t){case 0:l=a;break;case 1:l=a+o;break;case 2:l=a+s;break;case 3:l=a+(o+s>>1);break;case 4:l=a+Ql(o,s,c);break;default:throw Error(`Bad PNG filter ${t}`)}h[r+i]=l&255}}if(p===1)return{width:i,height:a,colorType:o,pixels:h,palette:s};let g=new Uint8Array(i*a*4);for(let e=0;e<i*a;e++)g[e*4]=h[e*p],g[e*4+1]=h[e*p+1],g[e*4+2]=h[e*p+2],g[e*4+3]=p===4?h[e*p+3]:255;return{width:i,height:a,colorType:o,pixels:g}}async function eu(e){let t=new Blob([e]).stream().pipeThrough(new DecompressionStream(`deflate`));return new Uint8Array(await new Response(t).arrayBuffer())}function tu(e){let t=t=>e.frames[t],n=[0,1,2,3];return{walk:n.map(e=>[0,1,2,3].map(n=>t(`guest_${e}_${n}`))),child:n.map(e=>[0,1,2,3].map(n=>t(`child_${e}_${n}`))),sit:n.map(e=>t(`sit_${e}`)),swim:n.map(e=>[0,1].map(n=>t(`swim_${e}_${n}`))),lie:n.map(e=>t(`lie_${e}`)),wade:n.map(e=>t(`wade_${e}`)),wadeChild:n.map(e=>t(`wadechild_${e}`)),float:n.map(e=>[0,1,2].map(n=>t(`float_${e}_${n}`))),kayak:n.map(e=>[0,1,2].map(n=>t(`kayak_${e}_${n}`))),board:n.map(e=>[0,1,2].map(n=>t(`board_${e}_${n}`))),towels:[0,1].map(e=>[0,1,2].map(n=>t(`towel_${e}_${n}`))),drink:t(`prop_drink`),towel:t(`prop_towel`),bag:t(`prop_bag`),umbrellas:[0,1,2].map(e=>t(`umbrella_${e}`)),miserable:t(`icon_miserable`)}}async function nu(e,t){let n=`guests-${t}`,[r,i]=await Promise.all([fetch(`${e}${n}.json`).then(e=>e.json()),fetch(`${e}${n}.png`).then(e=>e.arrayBuffer())]),a=await $l(new Uint8Array(i),eu),o=a.width*a.height,s=new Uint8Array(o*4);for(let e=0;e<o;e++){let t=a.pixels[e];t&&(s[e*4]=t,s[e*4+3]=255)}let c=new fi(s,a.width,a.height,fe,M);return c.magFilter=E,c.minFilter=E,c.generateMipmaps=!1,c.flipY=!1,c.needsUpdate=!0,{texture:c,width:a.width,height:a.height,frames:r.frames}}var ru=`
in vec2 corner;
in vec3 aFeet;
in vec4 aFrame;
in vec2 aAnchor;
in float aLook;
in float aFlat;
out vec2 vUv;
flat out float vLook;
uniform vec2 uArtSize;
uniform vec2 uAtlasSize;
uniform float uPixelsPerUnit;
uniform vec3 uBack;
uniform vec3 uToward;
void main() {
  vec4 clip = projectionMatrix * viewMatrix * vec4(aFeet, 1.0);
  vec2 feet = floor((clip.xy * 0.5 + 0.5) * uArtSize + 0.5);
  // Sprite pixels map one-to-one onto art pixels; the frame's y runs down, the screen's up.
  vec2 px = vec2(feet.x - aAnchor.x + corner.x * aFrame.z, feet.y + aAnchor.y - corner.y * aFrame.w);
  // Depth as if the guest were standing upright: each pixel up the sprite is that much nearer
  // the viewer (tan 30 deg per pixel of height), plus a small margin so the feet clear the ground.
  // Flat on the ground, a pixel up the sprite is ground further away: two pixels' worth a pixel
  // at 30 degrees. aFlat is then the margin, so a body lies just above its towel.
  float up = (px.y - feet.y) / uPixelsPerUnit;
  vec3 at = aFlat > 0.0 ? aFeet - uToward * (up * 2.0) + uBack * aFlat : aFeet + uBack * (0.04 + up * 0.57735);
  vec4 depth = projectionMatrix * viewMatrix * vec4(at, 1.0);
  gl_Position = vec4(px / uArtSize * 2.0 - 1.0, depth.z, 1.0);
  vUv = (aFrame.xy + corner * aFrame.zw) / uAtlasSize;
  vLook = aLook;
}
`,iu=`
precision highp float;
in vec2 vUv;
flat in float vLook;
out vec4 outColor;
uniform sampler2D uAtlas;
void main() {
  vec4 t = texture(uAtlas, vUv);
  if (t.a < 0.5) discard;
  // Material 255: already a palette index (green), with the guest's look slot (blue) for recoloring.
  outColor = vec4(1.0, t.r, vLook / 255.0, 0.0);
}
`,au=class{mesh;geometry;feet;frame;anchor;look;flat;material;capacity;constructor(e,t){this.capacity=e;let n=new pa;n.setAttribute(`corner`,new Dr([0,0,1,1,1,0,0,0,0,1,1,1],2)),n.setAttribute(`position`,new Dr(Array(18).fill(0),3)),this.feet=new pi(new Float32Array(e*3),3),this.frame=new pi(new Float32Array(e*4),4),this.anchor=new pi(new Float32Array(e*2),2),this.look=new pi(new Float32Array(e),1),this.flat=new pi(new Float32Array(e),1);for(let e of[this.feet,this.frame,this.anchor,this.look,this.flat])e.setUsage(ft);n.setAttribute(`aFeet`,this.feet),n.setAttribute(`aFrame`,this.frame),n.setAttribute(`aAnchor`,this.anchor),n.setAttribute(`aLook`,this.look),n.setAttribute(`aFlat`,this.flat),n.instanceCount=0,this.geometry=n,this.material=new Pi({glslVersion:pt,vertexShader:ru,fragmentShader:iu,uniforms:{uAtlas:{value:t.texture},uAtlasSize:{value:new Lt(t.width,t.height)},uArtSize:{value:new Lt(1,1)},uPixelsPerUnit:{value:1},uBack:{value:new V(0,1,0)},uToward:{value:new V(0,0,1)}},blending:0}),this.mesh=new li(n,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1}useAtlas(e){this.material.uniforms.uAtlas.value=e.texture,this.material.uniforms.uAtlasSize.value.set(e.width,e.height)}setView(e,t,n,r,i){let a=this.material.uniforms;a.uArtSize.value.set(e,t),a.uPixelsPerUnit.value=n,a.uBack.value.copy(r),a.uToward.value.copy(i)}set(e,t,n,r,i,a,o=0,s=0,c=0){this.feet.setXYZ(e,t,n,r),this.frame.setXYZW(e,i[0],i[1],i[2],i[3]),this.anchor.setXY(e,i[4]-o,i[5]+s),this.look.setX(e,a),this.flat.setX(e,c)}commit(e){this.geometry.instanceCount=e;for(let t of[this.feet,this.frame,this.anchor,this.look,this.flat])t.clearUpdateRanges(),t.addUpdateRange(0,e*t.itemSize),t.needsUpdate=!0}},ou={lobby:{name:`Lobby`,category:`arrival`,footprint:[3,3],cost:2e4,blocksWalking:!0,coastal:!1,maxRise:3,unique:!0,blurb:`Front desk and arrivals. Required, and only one. Guests come in at the front and out to the resort at the back.`},valet:{name:`Valet and drop-off`,category:`arrival`,footprint:[2,1],cost:6e3,blocksWalking:!0,coastal:!1,maxRise:2,blurb:`A covered drop-off where cars arrive.`},roomBlock:{name:`Garden room block`,category:`rooms`,footprint:[2,2],cost:16e3,blocksWalking:!0,coastal:!1,maxRise:3,rooms:4,sleeps:4,legacy:!0,blurb:`Four rooms. The cheapest way to add beds.`},oceanBlock:{name:`Ocean-view room block`,category:`rooms`,footprint:[3,2],cost:24e3,blocksWalking:!0,coastal:!1,maxRise:3,rooms:4,sleeps:4,legacy:!0,blurb:`Four rooms whose value depends on the view.`},bungalow:{name:`Beach bungalow`,category:`rooms`,footprint:[2,2],cost:14e3,blocksWalking:!0,coastal:!1,maxRise:3,rooms:1,sleeps:3,blurb:`One premium room. Needs privacy.`},villa:{name:`Honeymoon villa`,category:`rooms`,footprint:[3,3],cost:28e3,blocksWalking:!0,coastal:!1,maxRise:3,rooms:1,sleeps:2,blurb:`The highest rate. Needs quiet and privacy.`},parkingLot:{name:`Parking lot`,category:`arrival`,footprint:[4,3],cost:4800,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`Sixteen bays off an aisle. Joins a road at either end. Guests who drive leave their car here; nobody likes looking at one.`},gatehouse:{name:`Gatehouse`,category:`arrival`,footprint:[2,1],cost:6e3,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`Marks the way in. Build it beside the road where the resort begins.`},entrySign:{name:`Entry sign`,category:`arrival`,footprint:[2,1],cost:1500,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`A low wall with the resort’s name, by the road in.`},wing:{name:`Guest wing`,category:`rooms`,footprint:[3,2],cost:0,blocksWalking:!0,coastal:!1,maxRise:3,blurb:`Drag a run of rooms: it faces the better view, or turn it (R) and drag to stretch it your way. Choose its floors, its layout and its room type.`},restaurant:{name:`Restaurant`,category:`food`,footprint:[3,2],cost:25200,blocksWalking:!0,coastal:!1,maxRise:3,blurb:`Drag out its floor, then choose what it cooks, how smart it is and the meals it serves. Its kitchen is at the back: it needs a cook and a server.`},poolBar:{name:`Pool bar`,category:`food`,footprint:[2,1],cost:7e3,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`Drinks by the pool.`},beachShack:{name:`Beach shack`,category:`food`,footprint:[2,1],cost:5e3,blocksWalking:!0,coastal:!1,maxRise:2,blurb:`Snacks and cold drinks, served at its front to guests on a path or the sand.`},coffeeKiosk:{name:`Coffee kiosk`,category:`food`,footprint:[1,1],cost:3e3,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`Coffee and pastries.`},kitchen:{name:`Central kitchen`,category:`service`,footprint:[2,2],cost:1e4,blocksWalking:!0,coastal:!1,maxRise:3,legacy:!0,blurb:`Cooks for the restaurants joined to it by a service path, on top of their own kitchens. Guests dislike seeing it.`},housekeeping:{name:`Housekeeping and laundry`,category:`service`,footprint:[2,2],cost:8e3,blocksWalking:!0,coastal:!1,maxRise:3,blurb:`Clean rooms and fresh linen.`},maintenance:{name:`Maintenance shed`,category:`service`,footprint:[2,1],cost:5e3,blocksWalking:!0,coastal:!1,maxRise:2,blurb:`Keeps everything working.`},spa:{name:`Spa`,category:`amenities`,footprint:[3,2],cost:22200,blocksWalking:!0,coastal:!1,maxRise:3,blurb:`Drag out its floor for treatment rooms, a therapist for each, then add a lounge, sauna, hydrotherapy pool, couples’ suite or salon.`},kidsClub:{name:`Kids' club`,category:`amenities`,footprint:[2,2],cost:12e3,blocksWalking:!0,coastal:!1,maxRise:2,blurb:`Keeps children busy, and noisy.`},beachHut:{name:`Beach activity hut`,category:`amenities`,footprint:[2,1],cost:4e3,blocksWalking:!0,coastal:!0,maxRise:2,blurb:`Kayaks, paddleboards and snorkels to take out on the sea. Build it by the beach: it draws guests to the sand, and sends them out on the water.`},lifeguard:{name:`Lifeguard tower`,category:`amenities`,footprint:[1,1],cost:1500,blocksWalking:!0,coastal:!0,onPaving:!0,maxRise:2,blurb:`Watches over the pool, or the sea from the sand. Stands on the deck, the lawn a step or two from a path, or the beach anywhere its lifeguard can walk to. Needs a lifeguard up it.`},restrooms:{name:`Restrooms`,category:`amenities`,footprint:[1,1],cost:2500,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`Guests need them more than they admit.`},palm:{name:`Palm`,category:`scenery`,footprint:[1,1],cost:150,blocksWalking:!0,coastal:!1,maxRise:3,blurb:`A coconut palm.`},shadeTree:{name:`Shade tree`,category:`scenery`,footprint:[1,1],cost:250,blocksWalking:!0,coastal:!1,maxRise:3,blurb:`A broad tree for shade.`},flowerBed:{name:`Flower bed`,category:`scenery`,footprint:[1,1],cost:80,blocksWalking:!0,coastal:!1,onPaving:!0,maxRise:1,blurb:`Hibiscus and plumeria.`},hedge:{name:`Hedge`,category:`scenery`,footprint:[1,1],cost:60,blocksWalking:!0,coastal:!1,maxRise:2,blurb:`Blocks noise and the view.`},torch:{name:`Tiki torch`,category:`scenery`,footprint:[1,1],cost:90,blocksWalking:!1,coastal:!1,maxRise:3,blurb:`Firelight after dark. In sight of the beach, it keeps nesting turtles away.`},fountain:{name:`Fountain`,category:`scenery`,footprint:[2,2],cost:2500,blocksWalking:!0,coastal:!1,onPaving:!0,maxRise:0,blurb:`A centrepiece with running water.`},bench:{name:`Bench`,category:`scenery`,footprint:[1,1],cost:120,blocksWalking:!0,coastal:!1,onPaving:!0,maxRise:1,blurb:`Somewhere to sit.`},lounger:{name:`Lounger`,category:`scenery`,footprint:[1,1],cost:100,blocksWalking:!0,coastal:!0,onPaving:!0,maxRise:1,blurb:`A pair of sun loungers. On the sand, the lawn or the pool deck.`},umbrella:{name:`Beach umbrella`,category:`scenery`,footprint:[1,1],cost:80,blocksWalking:!0,coastal:!0,onPaving:!0,maxRise:2,blurb:`Shade on the sand, a lawn or the pool deck.`},slide:{name:`Water slide`,category:`pool`,footprint:[1,3],cost:0,blocksWalking:!0,coastal:!1,maxRise:12,blurb:`Drag it out from the pool’s edge. A tower at the top; build it against a slope for a bigger drop.`},waterfall:{name:`Waterfall`,category:`pool`,footprint:[1,1],cost:4500,blocksWalking:!0,coastal:!1,maxRise:6,blurb:`Rockwork at the pool’s edge, falling into the water. Taller on higher ground behind.`},swimUpBar:{name:`Swim-up bar`,category:`pool`,footprint:[2,1],cost:9e3,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`A bar on the pool’s edge with its stools in the water. Its front must face shallow water: guests swim up from the pool, and its bartender comes in from a path or deck behind it.`},cabana:{name:`Cabana`,category:`pool`,footprint:[1,1],cost:2500,blocksWalking:!0,coastal:!0,onPaving:!0,maxRise:1,blurb:`A shaded daybed, rented by the visit. Couples love one by the water.`},gym:{name:`Gym`,category:`sport`,footprint:[3,2],cost:16e3,blocksWalking:!0,coastal:!1,maxRise:3,blurb:`Cardio and weights behind big windows, and a studio deck. Open 6:00 to 22:00, free to guests. Those who work out come first thing, some in the late afternoon: wellness guests most, then young groups. A fitness instructor runs classes, which draw more. Needs a guest path to its door.`},tennisCourt:{name:`Tennis court`,category:`sport`,footprint:[7,4],cost:15e3,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`A hard court, fenced. Parties of two or more play singles or doubles in the cool of the morning and late afternoon, in daylight, for a court fee. A coach gives lessons, to someone on their own too. Needs a guest path to its gate.`},tennisCourtLit:{name:`Floodlit tennis court`,category:`sport`,footprint:[7,4],cost:21e3,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`A tennis court with floodlights: play goes on after dark until 22:00, and its noise with it. Needs a guest path to its gate.`},pickleballCourt:{name:`Pickleball court`,category:`sport`,footprint:[4,2],cost:7e3,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`Smaller and cheaper than tennis, and easy to pick up, but loud: the paddles’ pop carries to rooms a hundred metres off. Parties of two or more play, in the cooler hours, for a court fee. Needs a guest path to its gate.`},pickleballCourtLit:{name:`Floodlit pickleball court`,category:`sport`,footprint:[4,2],cost:1e4,blocksWalking:!0,coastal:!1,maxRise:1,blurb:`A pickleball court with floodlights: play, and the pop of the paddles, go on until 22:00. Needs a guest path to its gate.`},frangipani:{name:`Frangipani`,category:`scenery`,footprint:[1,1],cost:300,blocksWalking:!0,coastal:!1,maxRise:3,blurb:`A small tree of scented white and pink flowers, the lei flower. The loveliest planting for its size, with a little shade beneath it.`},bougainvillea:{name:`Bougainvillea`,category:`scenery`,footprint:[1,1],cost:110,blocksWalking:!0,coastal:!1,maxRise:2,blurb:`A screen that flowers: it joins and blocks noise and the view as a hedge does, blooms magenta all year, and birds nest in it. Needs clipping.`},banana:{name:`Banana`,category:`scenery`,footprint:[1,1],cost:90,blocksWalking:!0,coastal:!1,soil:!0,maxRise:3,blurb:`Big paddle leaves: quick, cheap shade on the tiles beside it, and fruit the birds come for. Needs soil, not sand.`},birdOfParadise:{name:`Bird of paradise`,category:`scenery`,footprint:[1,1],cost:120,blocksWalking:!0,coastal:!1,soil:!0,maxRise:1,blurb:`Clumps of orange and blue flowers like birds’ heads, with nectar for real ones. Brightens a corner the way a flower bed does, a little further. Needs soil.`},treeFern:{name:`Tree fern`,category:`scenery`,footprint:[1,1],cost:350,blocksWalking:!0,coastal:!1,soil:!0,maxRise:3,blurb:`Lacy fronds on a shaggy trunk, for shady corners: lovely beside a building or under trees, scorched in full sun. Needs soil.`},seaGrape:{name:`Sea grape`,category:`scenery`,footprint:[1,1],cost:120,blocksWalking:!0,coastal:!0,maxRise:3,blurb:`A salt-proof shrub that grows on the sand by the sea: shade on the beach, fruit for the birds, and a screen that keeps lights off the beach where turtles nest.`},royalPalm:{name:`Royal palm`,category:`scenery`,footprint:[1,1],cost:600,blocksWalking:!0,coastal:!1,maxRise:3,blurb:`Tall, straight and formal, to line a drive or an avenue. Seen from far off, and too slim to block a view.`}},su=`palm.roomBlock.torch.lobby.valet.oceanBlock.bungalow.villa.restaurant.poolBar.beachShack.coffeeKiosk.kitchen.housekeeping.maintenance.spa.kidsClub.beachHut.lifeguard.restrooms.shadeTree.flowerBed.hedge.fountain.bench.lounger.umbrella.wing.parkingLot.gatehouse.entrySign.slide.waterfall.swimUpBar.cabana.gym.tennisCourt.tennisCourtLit.pickleballCourt.pickleballCourtLit.frangipani.bougainvillea.banana.birdOfParadise.treeFern.seaGrape.royalPalm`.split(`.`),cu=[{id:`arrival`,name:`Arrival`},{id:`rooms`,name:`Rooms`},{id:`pool`,name:`Pools`},{id:`food`,name:`Food and drink`},{id:`service`,name:`Back of house`},{id:`amenities`,name:`Amenities`},{id:`sport`,name:`Sport`},{id:`scenery`,name:`Scenery`}],lu={startingCash:15e4,refund:.5,guestPathCost:40,servicePathCost:20,terraformCost:30,coastalSetback:6,roadCost:120,arrivalCourt:9e3},uu={none:0,shallow:1,deep:2,splash:3,river:4},du=[1,2,3,4],fu={1:{name:`Shallow water`,cost:1200,upkeep:7,swimmers:5,blurb:`Waist deep, for wading and lazing. Families want plenty of it.`},2:{name:`Deep water`,cost:1800,upkeep:9,swimmers:4,blurb:`Over your head, for real swimming. Families want a lifeguard watching it.`},3:{name:`Splash pad`,cost:1500,upkeep:11,swimmers:6,blurb:`Fountains on a wet floor. Children love it, and everyone hears it.`},4:{name:`Lazy river`,cost:1400,upkeep:9,swimmers:2,blurb:`A channel a tile wide. It flows once it closes in a loop, and floaters drift round it.`}},pu={drop:.5,splashDrop:.08,vanishingDrop:2,seatReach:2,lifeguardReach:8,riverSpeed:.02,riverSpacing:.5,brushes:[1,2,3],loudness:{base:72,perTile:.25,most:8,splash:3,slide:2,bar:2}},mu={minLength:2,maxLength:6,tower:4,clearance:.6,baseCost:7e3,perTile:900,gentleDrop:4,ticksPerTile:3,spacing:.5},hu=[`relaxation`,`thrill`,`scenery`,`kids`],gu={relaxation:`Relaxation`,thrill:`Thrill`,scenery:`Scenery`,kids:`Kid-friendliness`},_u={expected:.2,premium:.2,most:1,step:.05},vu={honeymoon:{roomBlock:350,oceanBlock:560,bungalow:840,villa:1140},family:{roomBlock:300,oceanBlock:420,bungalow:525,villa:665},wellness:{roomBlock:335,oceanBlock:510,bungalow:770,villa:980},young:{roomBlock:280,oceanBlock:385,bungalow:490,villa:630}},yu={breakfast:.5,lunch:.7},bu={housekeeper:{name:`Housekeeper`,wage:195,blurb:`Cleans rooms; twice as fast with a housekeeping and laundry building.`},cook:{name:`Cook`,wage:245,blurb:`Works a restaurant’s kitchen; a restaurant needs one to open.`},server:{name:`Server`,wage:185,blurb:`Serves at the restaurant and bars.`},lifeguard:{name:`Lifeguard`,wage:210,blurb:`Watches a pool or the sea from a lifeguard tower: one for each tower.`},maintenance:{name:`Maintenance`,wage:220,blurb:`Fixes what breaks; twice as fast with a maintenance shed to work from.`},frontDesk:{name:`Front desk`,wage:200,blurb:`Checks guests in and out at the lobby.`},gardener:{name:`Gardener`,wage:165,blurb:`Keeps the grounds and scenery tidy.`},therapist:{name:`Spa therapist`,wage:265,blurb:`Gives treatments at the spa.`},chef:{name:`Head chef`,wage:560,blurb:`Runs a fine-dining kitchen: fine dining opens only with one. Works for a resort that has held 3.5 stars for two weeks.`},concierge:{name:`Concierge`,wage:320,blurb:`Books tables, boats and taxis at the lobby, and guests remember it. Works for a resort that has held 4 stars for two weeks.`},instructor:{name:`Fitness instructor`,wage:200,blurb:`Runs classes at the gym (yoga at 7:00 and 17:30, pilates at 9:00): more guests work out, wellness guests above all.`},coach:{name:`Coach`,wage:230,blurb:`Gives tennis and pickleball lessons at a court: they draw more players, someone on their own too, and earn a fee on top of the court’s.`}},xu={max:2e5,step:1e4,interest:.08},Su=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],Cu=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wu=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],Tu=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],Eu=[31,28,31,30,31,30,31,31,30,31,30,31],Du={2:{ticksPerHour:115,dayValue:2/3},3:{ticksPerHour:185,dayValue:1},4:{ticksPerHour:245,dayValue:4/3}},Ou=Du[3],ku=Ou.ticksPerHour;Ou.ticksPerHour*24,Ou.ticksPerHour/60;function Au(e){Ou=e,ku=e.ticksPerHour,e.ticksPerHour*24,e.ticksPerHour/60}function ju(e){let t=Object.entries(Du).find(([,t])=>t.ticksPerHour===e.ticksPerHour);return t?Number(t[0]):void 0}function Mu(e){return e*Ou.dayValue}function Nu(e){return e%4==0}function Pu(e){return Nu(e)?366:365}function Fu(e,t){return e===1&&Nu(t)?29:Eu[e]}function Iu(e,t,n=1){let r=0;for(let t=1;t<e;t++)r+=Pu(t);for(let n=0;n<t;n++)r+=Fu(n,e);return r+n-1}function Lu(e){let t=e,n=1;for(;t>=Pu(n);)t-=Pu(n++);let r=0;for(;t>=Fu(r,n);)t-=Fu(r++,n);return{date:t+1,month:r,year:n,weekday:Ru(e)}}function Ru(e){return(e%7+7)%7}function zu(e,t=!1){let n=Lu(e);return t?`${Tu[n.weekday]} ${n.date} ${Cu[n.month]} Y${n.year}`:`${wu[n.weekday]} ${n.date} ${Su[n.month]}, Year ${n.year}`}function Bu(e,t){return`${Su[e]}, Year ${t}`}var Vu={front:0,left:1,back:2,right:3},Hu=(e,t,n,r)=>e.map(e=>({x:e,y:t,pose:n,facing:r})),Uu=.14;function Wu(e,t,n,r,i){let a=[];for(let o=r+.4;o<=t-.3+1e-6;o+=n[1])for(let r=.6;r<=e-.4+1e-6;r+=n[0])a.push({x:r,y:o,open:i>0&&o>t-i});return a}function Gu(e){return{height:1,seats:e.flatMap(({x:e,y:t,open:n})=>[{x:e-Uu,y:t,pose:`eat`,facing:Vu.right,open:n},{x:e+Uu,y:t,pose:`eat`,facing:Vu.left,open:n}])}}var Ku={xs:[.3,.7],head:.3,foot:.72,width:.15},qu=[.35,.72,1.09,1.46].flatMap(e=>Hu([2.28,2.68],e,`stand`,Vu.front)),Ju=[{x:.95,y:1.45,pose:`stand`,facing:Vu.right},{x:6.05,y:2.55,pose:`stand`,facing:Vu.left},{x:2.7,y:2.55,pose:`stand`,facing:Vu.right},{x:4.3,y:1.45,pose:`stand`,facing:Vu.left},{x:3.15,y:3.62,pose:`stand`,facing:Vu.back},{x:3.85,y:3.62,pose:`stand`,facing:Vu.back}],Yu=[{x:.5,y:.72,pose:`stand`,facing:Vu.right},{x:3.5,y:1.28,pose:`stand`,facing:Vu.left},{x:1.42,y:1.28,pose:`stand`,facing:Vu.right},{x:2.58,y:.72,pose:`stand`,facing:Vu.left},{x:1.8,y:1.84,pose:`stand`,facing:Vu.back},{x:2.2,y:1.84,pose:`stand`,facing:Vu.back}],Xu={poolBar:{height:1.15,seats:Hu([.3,.58,.86,1.14,1.42,1.7],.84,`sit`,Vu.back)},beachShack:{height:1.15,seats:Hu([.4,.62,.84,1.06,1.28,1.5],.78,`eat`,Vu.back)},coffeeKiosk:{height:.4,seats:Hu([.3,.5,.7],.86,`stand`,Vu.back)},restaurant:Gu(Wu(3,2,[.6,.55],.55,0)),beachHut:{height:.4,seats:[...Hu([.35,.65,.95],.92,`stand`,Vu.back),...Hu([1.4,1.7],.95,`stand`,Vu.back),{x:1.55,y:.05,pose:`stand`,facing:Vu.front}]},lounger:{height:.4,seats:Ku.xs.map(e=>({x:e,y:(Ku.head+Ku.foot)/2+.02,pose:`lie`,facing:Vu.front}))},bench:{height:.45,seats:Hu([.42,.58],.53,`sit`,Vu.front)},cabana:{height:.85,seats:Hu([.38,.62],.56,`lie`,Vu.front)},gym:{height:.42,seats:qu},tennisCourt:{height:.06,seats:Ju},tennisCourtLit:{height:.06,seats:Ju},pickleballCourt:{height:.06,seats:Yu},pickleballCourtLit:{height:.06,seats:Yu}};Vu.back,Vu.front,Vu.front,Vu.front,Vu.front;var Zu=[[0,1],[-1,0],[0,-1],[1,0]],Qu={island:{name:`Island kitchen`,blurb:`The day’s fish, fruit and the grill, as the island eats`,taste:{honeymoon:.5,family:.3,wellness:.6,young:.4},price:1},seafood:{name:`Seafood`,blurb:`The catch and shellfish: dearer, and loved by couples`,taste:{honeymoon:.9,family:0,wellness:.6,young:.3},price:1.25},italian:{name:`Italian`,blurb:`Pasta, pizza and a wood-fired oven: what families hope for`,taste:{honeymoon:.4,family:.9,wellness:.2,young:.6},price:.95},grill:{name:`Grill`,blurb:`Steaks and burgers off the fire, for young groups and families`,taste:{honeymoon:.3,family:.7,wellness:-.3,young:.8},price:1.05},asian:{name:`Pan-Asian`,blurb:`Sushi, curries and noodles: light and varied`,taste:{honeymoon:.6,family:.1,wellness:.8,young:.7},price:1.05},buffet:{name:`Buffet`,blurb:`Help yourself: quick, good value, and what families want at breakfast`,taste:{honeymoon:-.4,family:.9,wellness:0,young:.3},price:.8}},$u={casual:{name:`Casual`,blurb:`Quick, relaxed and cheaper: families and young groups`,price:.75,minutes:{breakfast:30,lunch:45,dinner:60},spacing:[.6,.55],perServer:16,delight:.6,taste:{honeymoon:-.3,family:.6,wellness:0,young:.4},fitOut:0},smart:{name:`Smart`,blurb:`Good food, good service and a proper dinner`,price:1,minutes:{breakfast:40,lunch:60,dinner:90},spacing:[.6,.55],perServer:12,delight:1,taste:{honeymoon:.3,family:.2,wellness:.3,young:.2},fitOut:600},fine:{name:`Fine dining`,blurb:`Dinner only: tasting menus, a server for every few tables, and evenings guests remember. It needs a head chef, who works only for a resort that has held 3.5 stars`,price:2,minutes:{breakfast:40,lunch:60,dinner:130},spacing:[.8,.75],perServer:6,delight:2,dinnerOnly:!0,taste:{honeymoon:.9,family:-.7,wellness:.4,young:-.2},fitOut:2200}},ed={lounge:{name:`Relaxation lounge`,blurb:`Loungers and tea after a treatment: calmer, longer, more memorable`,treatments:0,open:3,cost:3e3,upkeep:12,taste:{honeymoon:.3,family:0,wellness:.5,young:0},delight:.5},sauna:{name:`Sauna and steam`,blurb:`Heat rooms anyone can use without a therapist`,treatments:0,open:4,cost:7e3,upkeep:30,taste:{honeymoon:.2,family:0,wellness:.6,young:.3},delight:.4},hydro:{name:`Hydrotherapy pool`,blurb:`Jets and warm water: the heart of a wellness spa`,treatments:0,open:6,cost:14e3,upkeep:60,taste:{honeymoon:.4,family:0,wellness:.9,young:.2},delight:.9},couples:{name:`Couples’ suite`,blurb:`A room for two treatments side by side`,treatments:2,open:0,cost:6e3,upkeep:15,taste:{honeymoon:1,family:-.2,wellness:.3,young:0},delight:.8},salon:{name:`Salon`,blurb:`Hair and nails, for an evening out`,treatments:2,open:0,cost:4e3,upkeep:12,taste:{honeymoon:.4,family:.3,wellness:.2,young:.4},delight:.2}},td={restaurant:{min:[2,2],max:[7,5],start:[3,2]},spa:{min:[2,2],max:[6,4],start:[3,2]}},nd=[`restaurant`,`spa`],rd={restaurant:{cost:3600,upkeep:33},spa:{cost:3700,upkeep:23}},id={minDepth:3,cost:2500,depth:.9},ad=1.5,od={share:.25,days:2,growDays:4};function sd(e){return e<=2?.55:e===3?.8:1}var cd={deckCost:60,bridgeCost:400},ld={span:8,deepest:2,rise:.2},ud=[`lounger`,`cabana`,`umbrella`],dd=[11,0,6,7],fd={kaleo:{name:`Kaleo Point`,blurb:`An inland lot on a quiet coast at the end of the drive, and $180,000. Build its lobby, then make it a 3.5-star resort that fills in high season, by the end of Year 1.`,goal:{stars:3.5,occupancy:.7,byYear:1},startMonth:5,cash:18e4,plots:[{name:`The old lot`,rect:[46,32,63,51],owned:!0,sign:[54,42],blurb:`Where it begins: flat ground at the end of the drive.`},{name:`Beach path`,rect:[21,40,45,51],sign:[43,46],blurb:`Down through the palms to the sand. Without it, guests can’t reach the beach.`},{name:`North gardens`,rect:[46,18,63,31],sign:[54,30],blurb:`Level ground north of the lot, by the stream.`},{name:`South gardens`,rect:[46,52,63,68],sign:[54,53],blurb:`Level ground south of the drive, down to the creek.`},{name:`South shore`,rect:[21,52,45,72],stars:2.5,sign:[43,54],blurb:`Beachfront where the creek meets the sea.`},{name:`North shore`,rect:[21,18,45,39],stars:3,sign:[43,37],blurb:`The long beach under the lava point, with the best sand on the coast.`},{name:`The hillside`,rect:[64,20,82,43],stars:3,sign:[66,40],blurb:`Slopes above the stream, with views over the resort to the sea.`},{name:`South ridge`,rect:[64,46,82,68],stars:3.5,sign:[66,48],blurb:`High ground south of the road: the best views on the coast.`},{name:`The lava point`,rect:[3,2,45,17],stars:4,sign:[40,16],blurb:`Black rock and sea cliffs at the north end: somewhere unforgettable.`}]}},pd={grass:0,sand:1,rock:2},q={none:0,guest:1,service:2,road:3,deck:4,bridge:5};function md(e){return e===q.guest||e===q.deck||e===q.bridge}var hd=[0,1,1,0],gd=[0,0,1,1];function _d(e,t,n,r){let i=t-r,a=e-n;return i*i<a*a}function vd(e,t,n,r,i,a){return _d(e,t,n,r)?i+a<=1?e+(t-e)*i+(r-e)*a:n+(r-n)*(1-i)+(t-n)*(1-a):i>=a?e+(t-e)*i+(n-t)*a:e+(n-r)*i+(r-e)*a}function yd(e,t,n,r){let i,a,o,s;return _d(e,t,n,r)?(i=t-e,a=r-e,o=n-r,s=n-t):(i=t-e,a=n-t,o=n-r,s=r-e),Math.sqrt(Math.max(i*i+a*a,o*o+s*s))}var bd=[{a:0,b:1,dx:0,dy:-1,na:3,nb:2},{a:1,b:2,dx:1,dy:0,na:0,nb:3},{a:2,b:3,dx:0,dy:1,na:1,nb:0},{a:3,b:0,dx:-1,dy:0,na:2,nb:1}],xd=class e{size;seaLevel;corners;surface;water;path;pool;bridge;version=0;constructor(e,t,n){let r=e*e;this.size=e,this.seaLevel=t,this.corners=n?.corners??new Uint8Array(r*4),this.surface=n?.surface??new Uint8Array(r),this.water=n?.water??new Uint8Array(r),this.path=n?.path??new Uint8Array(r),this.pool=n?.pool??new Uint8Array(r),this.bridge=n?.bridge??new Uint8Array(r)}static from(t){return new e(t.size,t.seaLevel,t)}index(e,t){return t*this.size+e}inBounds(e,t){return e>=0&&t>=0&&e<this.size&&t<this.size}corner(e,t,n){return this.corners[this.index(e,t)*4+n]}minCorner(e,t){let n=this.index(e,t)*4,r=this.corners;return Math.min(r[n],r[n+1],r[n+2],r[n+3])}maxCorner(e,t){let n=this.index(e,t)*4,r=this.corners;return Math.max(r[n],r[n+1],r[n+2],r[n+3])}isFlat(e,t){return this.minCorner(e,t)===this.maxCorner(e,t)}isWater(e,t){return this.water[this.index(e,t)]>this.minCorner(e,t)}steepness(e,t){let n=this.index(e,t)*4,r=this.corners;return yd(r[n],r[n+1],r[n+2],r[n+3])}heightAt(e,t){let n=this.size,r=Math.min(n-1,Math.max(0,Math.floor(e))),i=Math.min(n-1,Math.max(0,Math.floor(t))),a=(i*n+r)*4,o=this.corners,s=Math.min(1,Math.max(0,e-r)),c=Math.min(1,Math.max(0,t-i));return vd(o[a],o[a+1],o[a+2],o[a+3],s,c)}isStairs(e,t){return this.path[this.index(e,t)]!==q.none&&this.steepness(e,t)>$c.minRise+1e-9}uphill(e,t){let n=this.index(e,t)*4,r=this.corners,i=r[n+1]+r[n+2]-r[n]-r[n+3],a=r[n+2]+r[n+3]-r[n]-r[n+1];return(i<0?-i:i)>=(a<0?-a:a)?i>=0?1:3:a>=0?2:0}standingHeight(e,t){let n=this.size,r=Math.min(n-1,Math.max(0,Math.floor(e))),i=Math.min(n-1,Math.max(0,Math.floor(t))),a=this.bridge[i*n+r];if(a&&this.path[i*n+r]===q.bridge)return a+ld.rise;if(!this.isStairs(r,i))return this.heightAt(e,t);let o=Math.min(1,Math.max(0,e-r)),s=Math.min(1,Math.max(0,t-i)),c=this.uphill(r,i),l=c===1?o:c===3?1-o:c===2?s:1-s,u=this.minCorner(r,i),d=this.maxCorner(r,i)-u;return u+(Math.min($c.treadsPerTile-1,Math.floor(l*$c.treadsPerTile))+1)*d/$c.treadsPerTile}setCorners(e,t,n,r,i,a){let o=Math.max(n,r,i,a)-Qc.maxTileRise,s=this.index(e,t)*4,c=this.corners;c[s]=Math.max(n,o),c[s+1]=Math.max(r,o),c[s+2]=Math.max(i,o),c[s+3]=Math.max(a,o),this.version++}setFlat(e,t,n){this.setCorners(e,t,n,n,n,n)}edgesMatch(e,t,n,r){let i=bd[r<t?0:n>e?1:r>t?2:3];return this.corner(e,t,i.a)===this.corner(n,r,i.na)&&this.corner(e,t,i.b)===this.corner(n,r,i.nb)}deckLevel(e,t){let n=this.index(e,t);return this.path[n]===q.bridge?this.bridge[n]:0}walkJoins(e,t,n,r){let i=this.deckLevel(e,t),a=this.deckLevel(n,r);if(!i&&!a)return this.edgesMatch(e,t,n,r);if(i&&a)return i===a;let o=bd[r<t?0:n>e?1:r>t?2:3];return i?this.corner(n,r,o.na)===i&&this.corner(n,r,o.nb)===i:this.corner(e,t,o.a)===a&&this.corner(e,t,o.b)===a}walkHeight(e,t){let n=this.size,r=Math.min(n-1,Math.max(0,Math.floor(e))),i=Math.min(n-1,Math.max(0,Math.floor(t)))*n+r;return this.path[i]===q.bridge&&this.bridge[i]?this.bridge[i]:this.heightAt(e,t)}},Sd={notForSale:0,forSale:1,owned:2};function Cd(e){return`${e}-star`}function wd(e){let t=Dd(`restaurant`,e.design);return Wu(t.size[0],t.size[1],$u[t.dining].spacing,sd(t.size[1]),t.terrace?id.depth:0)}function Td(e){return e.type===`restaurant`?Gu(wd(e)):Xu[e.type]}function Ed(e){return nd.includes(e)}function Dd(e,t={}){let{min:n,max:r,start:i}=td[e],[a,o]=t.size??i,s=[Math.max(n[0],Math.min(r[0],a)),Math.max(n[1],Math.min(r[1],o))],c=t.dining??`smart`;return{size:s,cuisine:t.cuisine??`island`,dining:c,meals:$u[c].dinnerOnly?[`dinner`]:t.meals?.length?t.meals:[`breakfast`,`lunch`,`dinner`],terrace:!!t.terrace&&s[1]>=id.minDepth,features:e===`spa`?[...new Set(t.features??[])].filter(e=>e in ed):[]}}function Od(e={}){return{length:Math.max(n.minLength,Math.min(n.maxLength,e.length??n.minLength)),loaded:e.loaded??`single`,floors:Math.max(1,Math.min(n.maxFloors,e.floors??2)),room:e.room??r}}var kd=`You don’t own this land: buy it in the land window`;function Ad(e,t){return!e.land||e.land[t]===Sd.owned}var jd=e=>({ok:!0,cost:e}),J=(e,t)=>({ok:!1,cost:e,reason:t});function Md(e={}){return Math.max(mu.minLength,Math.min(mu.maxLength,e.length??3))}function Nd(e){if(e.type===`slide`)return[1,Md(e.design)];if(e.type===`wing`){let t=Od(e.design);return[t.length,n.depth[t.loaded]]}if(e.type===`lobby`&&e.design?.arrival===`court`)return[5,7];if(Ed(e.type)){let[t,n]=Dd(e.type,e.design).size;return[t,n]}let[t,r]=ou[e.type].footprint;return[t,r]}function Pd(e){let[t,n]=Nd(e);return e.orient&1?[n,t]:[t,n]}function Fd(e){if(e.type===`wing`){let t=Od(e.design);return t.length*t.floors*(t.loaded===`double`?2:1)}return ou[e.type].rooms??0}function Id(e){if(e.type===`lobby`&&e.design?.arrival===`court`)return ou.lobby.cost+lu.arrivalCourt;if(e.type===`slide`)return mu.baseCost+mu.perTile*Md(e.design);if(Ed(e.type)){let t=Dd(e.type,e.design),n=t.size[0]*t.size[1],r=e.type===`restaurant`?n*$u[t.dining].fitOut+(t.terrace?id.cost:0):0;return Math.round((n*rd[e.type].cost+r+t.features.reduce((e,t)=>e+ed[t].cost,0))/100)*100}if(e.type!==`wing`)return ou[e.type].cost;let t=Od(e.design),n=Fd(e),r=t.length*(t.loaded===`double`?2:1);return Math.round(n*o(t.room,t.floors,r,n)/100)*100}function Ld(e,t){if(!Ed(e.type))return{cost:0,days:0};let n=Dd(e.type,e.design),r=Dd(e.type,t.design),i=n.size[0]!==r.size[0]||n.size[1]!==r.size[1],a=n.cuisine!==r.cuisine||n.dining!==r.dining,o=i||a||n.terrace!==r.terrace||n.features.join()!==r.features.join(),s=a?Math.round(Id(t)*od.share/100)*100:0;return{cost:Math.max(0,Id(t)-Id(e))+s,days:i?od.growDays:o?od.days:0}}function Rd(e){let[t,n]=Pd(e);switch(e.orient&3){case 0:return[e.x+Math.floor((t-1)/2),e.y+n];case 1:return[e.x-1,e.y+Math.floor((n-1)/2)];case 2:return[e.x+Math.floor((t-1)/2),e.y-1];default:return[e.x+t,e.y+Math.floor((n-1)/2)]}}function zd(e){let[t,n]=Pd(e),r=[];switch(e.orient&3){case 0:for(let i=e.x;i<e.x+t;i++)r.push([i,e.y+n]);break;case 1:for(let t=e.y;t<e.y+n;t++)r.push([e.x-1,t]);break;case 2:for(let n=e.x;n<e.x+t;n++)r.push([n,e.y-1]);break;default:for(let i=e.y;i<e.y+n;i++)r.push([e.x+t,i])}return r}function Bd(e,t){let n=Md(t.design),[r,i]=Rd(t),a=[[0,1],[-1,0],[0,-1],[1,0]][t.orient&3],o=[r-a[0]*n,i-a[1]*n],s=e.inBounds(o[0],o[1])?e.maxCorner(o[0],o[1]):0,c=(e.inBounds(r,i)?e.minCorner(r,i):0)-pu.drop,l=s+mu.tower,u=c+.3;return{tower:o,landing:[r,i],dir:a,run:n-.5,top:l,bottom:u,drop:l-c,length:n}}function Vd(e,t){let n=Bd(e,t),r=[[0,n.top]],i=!0;for(let t=1;t<n.length;t++){let a=n.tower[0]+n.dir[0]*t,o=n.tower[1]+n.dir[1]*t,s=e.inBounds(a,o)?e.maxCorner(a,o):n.top,c=n.top+(n.bottom-n.top)*t/n.run,l=Math.max(c,s+(t===n.length-1?.2:mu.clearance));l>r[r.length-1][1]&&(i=!1),r.push([t,Math.min(l,r[r.length-1][1])])}return r.push([n.run,n.bottom]),{points:r,ok:i}}function Hd(e,t){if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++){let[r,i]=e[n];if(t<=r){let[a,o]=e[n-1];return o+(i-o)*(t-a)/Math.max(1e-6,r-a)}}return e[e.length-1][1]}function Ud(e,t){let[n,r]=Rd(t),i=e.inBounds(n,r)?e.minCorner(n,r):e.minCorner(t.x,t.y);return 2.6+Math.max(0,e.maxCorner(t.x,t.y)-i)}function Wd(e){let t=e.size,n=new Uint8Array(t*t).fill(255),r=[];for(let i=0;i<t*t;i++){let a=i%t,o=(i-a)/t;e.water[i]===e.seaLevel&&e.isWater(a,o)&&(n[i]=0,r.push(i))}for(let i=0;i<r.length;i++){let a=r[i],o=a%t,s=(a-o)/t;for(let i of bd){let c=o+i.dx,l=s+i.dy;if(!e.inBounds(c,l))continue;let u=l*t+c;n[u]<=n[a]+1||(n[u]=Math.min(255,n[a]+1),r.push(u))}}return n}function Gd(e,t){return e.sandbox||e.cash>=t}function Kd(e,t){return ou[e].onPaving?t===q.deck||t===q.guest&&!ud.includes(e):!1}function qd(e,t){return t===q.bridge?`A bridge is in the way`:t===q.guest&&ud.includes(e)?`It belongs on a pool deck, the sand or the lawn: on a walkway it would block the way`:t===q.guest||t===q.deck?`Only furniture can stand on paving`:`A path is in the way`}function Jd(e){switch(e){case q.service:return lu.servicePathCost;case q.road:return lu.roadCost;case q.deck:return cd.deckCost;case q.bridge:return cd.bridgeCost;default:return lu.guestPathCost}}function Yd(e,t,n,r){let i=t.type,a=ou[i],o=Id(t),s=e.terrain,[c,l]=Pd(t),u=1/0,d=-1/0;for(let t=r;t<r+l;t++)for(let r=n;r<n+c;r++){if(!s.inBounds(r,t))return J(o,`Off the edge of the map`);let n=s.index(r,t);if(!Ad(e,n))return J(o,kd);if(s.isWater(r,t))return J(o,`Can’t build on water`);if(s.pool[n])return J(o,`The pool is in the way`);if(e.occupancy[n])return J(o,`Something is already built here`);if(s.path[n]&&!Kd(i,s.path[n]))return J(o,qd(i,s.path[n]));if(!a.coastal&&e.coast[n]<lu.coastalSetback)return J(o,`Too close to the sea: only beach items within ${lu.coastalSetback} tiles`);if(a.soil&&s.surface[n]===pd.sand)return J(o,`It needs soil: it won’t grow in the sand`);u=Math.min(u,s.minCorner(r,t)),d=Math.max(d,s.maxCorner(r,t))}if((i===`lobby`&&t.design?.arrival===`court`||i===`parkingLot`)&&d!==u)return J(o,`Needs level ground: flatten it first`);if(d-u>a.maxRise)return J(o,`The ground is too steep here`);if(a.unique&&e.objects.some(e=>e.type===i))return J(o,`There can only be one ${a.name.toLowerCase()}`);let f=Xd(e,t,n,r);return f?J(o,f):i!==`lobby`&&ou[i].category!==`scenery`&&!e.objects.some(e=>e.type===`lobby`)?J(o,`Build the lobby first`):Gd(e,o)?jd(o):J(o,`Not enough cash`)}function Xd(e,t,n,r){let i=e.terrain,a=(e,t)=>i.inBounds(e,t)?i.pool[i.index(e,t)]:0,o={...t,x:n,y:r};switch(t.type){case`slide`:{let e=Bd(i,o),t=a(e.landing[0],e.landing[1]);return t!==uu.shallow&&t!==uu.deep?`A slide must end at the pool’s edge, over shallow or deep water`:Vd(i,o).ok?void 0:`The ground rises in the way of the tube`}case`waterfall`:{let[e,t]=Rd(o),n=a(e,t);return n===uu.shallow||n===uu.deep||n===uu.river?void 0:`A waterfall must face the pool’s water`}case`swimUpBar`:return zd(o).every(([e,t])=>a(e,t)===uu.shallow)?void 0:`Its front must face shallow pool water, for the stools`;default:return}}function Zd(e,t,n){let r=e.terrain,i=r.size,a=new Set(n),o=Qd(e),s=0,c=0;for(let l of n){let n=l%i,u=(l-n)/i;if(!r.inBounds(n,u))return J(s,`Off the edge of the map`);let d=r.pool[l];if(d===t)continue;let f=o.get(l);if(f&&!f.allows.includes(t))return J(s,f.why);if(c++,t===uu.none)s-=Math.floor(fu[d].cost*lu.refund);else{if(!Ad(e,l))return J(s,kd);if(r.isWater(n,u))return J(s,`Natural water is in the way`);if(e.occupancy[l])return J(s,`Something is built here`);if(r.path[l])return J(s,`A path is in the way: pools sit beside paths, not on them`);if(!r.isFlat(n,u))return J(s,`Pools need flat ground: level it first`);if(e.coast[l]<lu.coastalSetback)return J(s,`Too close to the sea: only beach items within ${lu.coastalSetback} tiles`);for(let e of bd){let t=n+e.dx,o=u+e.dy;if(!r.inBounds(t,o))continue;let c=o*i+t;if((r.pool[c]||a.has(c))&&r.minCorner(t,o)!==r.minCorner(n,u))return J(s,`A pool’s water is level: these tiles are at different heights`)}s+=fu[t].cost-(d?Math.floor(fu[d].cost*lu.refund):0)}}return c?s>0&&!Gd(e,s)?J(s,`Not enough cash`):jd(s):J(0,t===uu.none?`No pool here`:`Already this kind of water`)}function Qd(e){let t=e.terrain,n=new Map;for(let r of e.objects)if(r.type===`slide`){let[e,i]=Rd(r);t.inBounds(e,i)&&n.set(t.index(e,i),{allows:[uu.shallow,uu.deep],why:`The slide lands here: it needs shallow or deep water`})}else if(r.type===`swimUpBar`)for(let[e,i]of zd(r))t.inBounds(e,i)&&n.set(t.index(e,i),{allows:[uu.shallow],why:`The swim-up bar’s stools stand here, in shallow water`});else if(r.type===`waterfall`){let[e,i]=Rd(r);t.inBounds(e,i)&&n.set(t.index(e,i),{allows:[uu.shallow,uu.deep,uu.river],why:`The waterfall falls here: move it first`})}return n}function $d(e,t,n,r){let i=[];if(Math.abs(n-e)>=Math.abs(r-t))for(let r=Math.min(e,n);r<=Math.max(e,n);r++)i.push([r,t]);else for(let n=Math.min(t,r);n<=Math.max(t,r);n++)i.push([e,n]);return i}function ef(e,t,n){if(e.isWater(t,n))return`Can’t lay a path in water`;let r=e.steepness(t,n);if(r<=$c.minRise+1e-9)return;if(r>Yc.maxPathRise+1e-9)return`Too steep for a path, even stairs`;let i=e.uphill(t,n),a=bd[i],o=bd[i+2&3],s=e.corner(t,n,a.a),c=e.corner(t,n,o.a);return e.corner(t,n,a.b)===s&&e.corner(t,n,o.b)===c?void 0:`Stairs need a straight slope`}function tf(e,t,n,r,i){let a=$d(t,n,r,i);if(e!==q.road)return a;let o=Math.abs(r-t)>=Math.abs(i-n),s=o?Math.sign(r-t)||1:Math.sign(i-n)||1,[c,l]=o?[0,s]:[-s,0];return[...a,...a.map(([e,t])=>[e+c,t+l])]}function nf(e,t,n){if(t===q.bridge)return sf(e,n);let r=e.terrain,i=Jd(t),a=0;for(let[o,s]of n){if(!r.inBounds(o,s))return J(a,`Off the edge of the map`);let n=r.index(o,s);if(r.path[n]===t)continue;if(!Ad(e,n))return J(a,kd);if(r.path[n]===q.road)return J(a,`The road is in the way`);if(r.path[n]===q.bridge)return J(a,`A bridge is in the way`);let c=r.path[n]===q.guest&&t===q.deck||r.path[n]===q.deck&&t===q.guest;if(r.path[n]&&t!==q.road&&!c)return J(a,`Another path is in the way`);if(a+=i,e.occupancy[n])return J(a,`Something is built here`);if(r.pool[n])return J(a,`The pool is in the way`);if(t===q.road){if(r.isWater(o,s))return J(a,`Can’t lay a road in water`);if(r.steepness(o,s)>1+1e-9)return J(a,`Too steep for a road: a metre a tile at most`);continue}let l=ef(r,o,s);if(l)return J(a,l)}return a===0?J(0,`Already a path`):Gd(e,a)?jd(a):J(a,`Not enough cash`)}function rf(e,t,n){return!!e.pool[e.index(t,n)]||e.isWater(t,n)}function af(e,t){let n=0;for(let[r,i]of t){if(!e.inBounds(r,i)||!rf(e,r,i))continue;let t=e.index(r,i),a=e.path[t]===q.bridge?e.bridge[t]:e.pool[t]?e.maxCorner(r,i):Math.max(e.water[t],e.maxCorner(r,i));n=Math.max(n,a)}return n}function of(e,t,n,r,i,a){let o=bd[i<n?0:r>t?1:i>n?2:3];return e.corner(t,n,o.a)===a&&e.corner(t,n,o.b)===a}function sf(e,t){let n=e.terrain,r=af(n,t),i=Qd(e),a=new Set,o=0,s=0;for(let[c,l]of t){if(!n.inBounds(c,l))return J(o,`Off the edge of the map`);let t=n.index(c,l);if(!Ad(e,t))return J(o,kd);if(!rf(n,c,l)){if(md(n.path[t]))continue;if(n.path[t])return J(o,n.path[t]===q.road?`The road is in the way`:`Another path is in the way`);if(e.occupancy[t])return J(o,`Something is built here`);let r=ef(n,c,l);if(r)return J(o,r);o+=lu.guestPathCost,s++}else if(a.add(t),n.path[t]===q.bridge){if(n.bridge[t]!==r)return J(o,`A bridge is level: this one would meet the other at a step`)}else{if(n.path[t])return J(o,`Another path is in the way`);if(i.has(t))return J(o,`A slide, a bar or a waterfall needs this water clear`);if(!n.pool[t]&&r-n.minCorner(c,l)>ld.deepest)return J(o,`Too deep for its piles: ${ld.deepest} m of water at most`);o+=cd.bridgeCost,s++}}if(!a.size)return J(o,`No water to cross: a bridge spans water`);if(a.size>ld.span)return J(o,`Too long: a bridge spans ${ld.span} tiles of water at most`);if(!s)return J(0,`Already a bridge`);for(let e=1;e<t.length;e++){let[i,s]=t[e-1],[c,l]=t[e],u=a.has(n.index(i,s));if(u!==a.has(n.index(c,l))&&!(u?of(n,c,l,i,s,r):of(n,i,s,c,l,r)))return J(o,`The bank isn’t level with the deck here: start the bridge where the ground meets the water`)}return[...a].some(e=>{let t=e%n.size,i=(e-t)/n.size;return bd.some(e=>{let o=t+e.dx,s=i+e.dy;return!n.inBounds(o,s)||a.has(n.index(o,s))?!1:rf(n,o,s)?n.deckLevel(o,s)===r:of(n,o,s,t,i,r)})})?Gd(e,o)?jd(o):J(o,`Not enough cash`):J(o,`It leads nowhere: a bridge starts from a bank level with its deck`)}function cf(e,t,n){let r=e.terrain;if(!r.inBounds(t,n))return;let i=r.index(t,n);if(!Ad(e,i))return;let a=e.occupancy[i]-1;if(a>=0){let t=e.objects.find(e=>e.id===a);if(t)return{object:t,refund:t.natural?0:Math.floor(Id(t)*lu.refund)}}if(r.path[i]&&r.path[i]!==q.road)return{path:!0,refund:Math.floor(Jd(r.path[i])*lu.refund)}}function lf(e,t,n,r){let i=t+hd[r],a=n+gd[r],o=[];for(let t=0;t<4;t++){let n=i-hd[t],r=a-gd[t];e.inBounds(n,r)&&o.push([n,r,t])}return o}function uf(e,t,n,r){let i=new Map,a=(t,n)=>{let r=e.index(t,n),a=i.get(r);return a||(a=[e.corner(t,n,0),e.corner(t,n,1),e.corner(t,n,2),e.corner(t,n,3)],i.set(r,a)),a},o=0;for(let i=0;i<4;i++){let s=e.corner(t,n,i);for(let[c,l,u]of lf(e,t,n,i))e.corner(c,l,u)===s&&(a(c,l)[u]=s+r,o++)}return{corners:i,moved:o}}function df(e,t,n,r){let i=e.terrain;if(!i.inBounds(t,n))return J(0,`Off the edge of the map`);let a=uf(i,t,n,r),o=a.moved*lu.terraformCost,s=new xd(i.size,i.seaLevel,{corners:i.corners.slice(),surface:i.surface,water:i.water,path:i.path,pool:i.pool});for(let[t,n]of a.corners){let a=t%i.size,c=(t-a)/i.size;if(!Ad(e,t))return J(o,kd);if(i.isWater(a,c))return J(o,`Can’t reshape land under water`);if(e.occupancy[t])return J(o,`Something is built here`);if(i.pool[t])return J(o,`The pool is in the way`);if(i.path[t]===q.road)return J(o,`The road is in the way`);if(Math.min(...n)<0||Math.max(...n)>Qc.maxLevel)return J(o,r>0?`As high as land goes`:`As low as land goes`);if(Math.max(...n)-Math.min(...n)>Qc.maxTileRise)return J(o,`Too steep: that would be a cliff`);s.corners.set(n,t*4)}for(let e of a.corners.keys()){let t=e%i.size,n=(e-t)/i.size;if(i.path[e]&&ef(s,t,n))return J(o,`A path here would become too steep`);for(let e of bd){let r=t+e.dx,a=n+e.dy,c=i.inBounds(r,a)?i.deckLevel(r,a):0;if(c&&of(i,t,n,r,a,c)&&!of(s,t,n,r,a,c))return J(o,`A bridge rests on this bank`)}let r=s.steepness(t,n);if(i.surface[e]===pd.sand&&r>Qc.repose.sand)return J(o,`Sand won’t hold that slope`);for(let e of bd){let r=t+e.dx,a=n+e.dy;if(!i.inBounds(r,a)||!i.isWater(r,a))continue;let c=i.water[a*i.size+r],l=Math.max(s.corner(t,n,e.a),s.corner(r,a,e.na)),u=Math.max(s.corner(t,n,e.b),s.corner(r,a,e.nb));if(l<c||u<c)return J(o,`The water would spill out`)}}return Gd(e,o)?{ok:!0,cost:o,edit:a}:{...J(o,`Not enough cash`),edit:a}}var ff=.4;function pf(e){switch(e){case`thatch`:return K.thatch;case`roofTile`:return K.roofTile;case`shingle`:return K.shingle;case`slate`:return K.slate;case`metal`:return K.metal;case`stucco`:return K.stucco;case`adobe`:return K.adobe;case`siding`:return K.siding;case`timber`:case`wood`:return K.wood;case`stone`:return K.rock;case`teal`:return K.teal;case`coral`:return K.coral;case`yellow`:return K.yellow;case`white`:return K.coping}}function mf(t){let n=e[t];return new Map([[K.thatch,pf(n.roofMaterial)],[K.stucco,pf(n.walls)]])}function hf(e,t,n,r,i,a,o){let s=t.eaves,c=n-s,l=r-s,u=i+s,d=a+s,f=pf(t.roofMaterial),p=pf(t.walls);if(t.roof===`flat`){if(e.box(c,l,o,u,d,o+.35,p,f),t.parapet){let t=.08,n=o+.95;return e.box(c,l,o+.35,u,l+t,n,p),e.box(c,d-t,o+.35,u,d,n,p),e.box(c,l,o+.35,c+t,d,n,p),e.box(u-t,l,o+.35,u,d,n,p),n}return o+.35}let m=t.roof===`gable`?(d-l)/2:Math.min(u-c,d-l)/2,h=o+t.pitch*m*Zc.metersPerTile;return t.roof===`gable`?e.gableRoof(c,l,u,d,o,h,f,p):e.hipRoof(c,l,u,d,o,h,f),h}function gf(e,t,n,r,i,a,o,s,c){let l=n*.015,u=Math.min(r,r+l),d=Math.max(r,r+l),f=pf(t.trim),p=(i+a)/2;if(t.windows===`glazed`){e.box(i,u,o,a,d,s,K.window),e.box(p-.015,u-.002,o,p+.015,d+.002,s,f),e.box(i,u-.002,s-.05,a,d+.002,s,f);return}if(t.windows===`deep`){let t=c?.2:.14,n=c?o+2.2:o+2,r=c?o:o+1;e.box(p-t-.04,u,r-.04,p+t+.04,d,n+.04,K.wood),e.box(p-t,u-.003,r,p+t,d+.003,n,K.window);return}let m=c?.17:.14,h=c?o:o+.9,g=o+2.3,_=n*.025;e.box(p-m,u,h,p+m,d,g,K.window),e.box(p-m-.13,Math.min(r,r+_),h,p-m-.02,Math.max(r,r+_),g,f),e.box(p+m+.02,Math.min(r,r+_),h,p+m+.13,Math.max(r,r+_),g,f)}function _f(e){let t=Math.ceil(e/4),n=[],r=0;for(let i=0;i<t;i++){let a=Math.round((e-r)/(t-i));n.push([r,r+a]),r+=a}return n}function vf(t,r,i){let a=e[i],o=r.length,s=n.floorHeight,c=r.loaded===`single`,l=pf(a.walls),u=pf(a.base??a.walls),d=pf(a.trim),f=pf(a.railing),p=a.windows===`deep`?l:K.coping,m=c?1.62:2.6,h=c?.42:.4,g=.32,_=ff+r.floors*s;if(_f(o).forEach(([e,n],i)=>{let d=i%2?.08:0,v=m-d,y=c?h:h+d,b=e===0?.06:e,x=n===o?o-.06:n;t.box(b,y,ff,x,v,ff+s,u),r.floors>1&&t.box(b,y,ff+s,x,v,_,l);for(let e=1;e<r.floors;e++)t.box(b-.02,y-.01,ff+e*s-.12,x+.02,v+.01,ff+e*s,p);let S=[{side:1,at:v}];c||S.push({side:-1,at:y});let C=S.length;for(let{side:i,at:c}of S){let u=i===1?0:1,d=c+i*g,m=Math.min(c,d),h=Math.max(c,d),v=c+i*.29000000000000004,y=Math.min(v,d),S=Math.max(v,d);for(let d=e;d<n;d++)for(let n=0;n<r.floors;n++){let g=ff+n*s;if(t.forRoom((n*C+u)*o+d),gf(t,a,i,c,d+.22,d+.78,g+.05,g+2.4,!0),t.forRoom(-1),n===0){if(t.box(d+.03,m,.38,d+.97,h,.44,K.wood),r.room.outdoor===`plunge`){let e=c+i*.04,n=c+i*.27;t.box(d+.16,Math.min(e,n),.44,d+.84,Math.max(e,n),.52,K.coping);let r=c+i*.07,a=c+i*.24;t.polygon([[d+.2,Math.min(r,a),.53],[d+.8,Math.min(r,a),.53],[d+.8,Math.max(r,a),.53],[d+.2,Math.max(r,a),.53]],K.pool)}t.box(d+.03,y,ff,d+.97,S,1.15,K.foliage)}else t.box(d+.03,m,g-.12,d+.97,h,g+.02,p),t.box(d+.03,y,g+.02,d+.97,S,g+1,f);d>e&&t.box(d-.025,m,g,d+.025,h,g+2.7,l)}t.box(b,m,ff,b+.05,h,_,l),t.box(x-.05,m,ff,x,h,_,l)}let w=v+g,T=c?.06:y-g;if(hf(t,a,e,T,n,w,_),a.beams)for(let r=e;r<n;r++)for(let e of[T,w])t.box(r+.45,e-.12,_-.35,r+.55,e+.12,_-.22,K.wood)}),c){let e=.06;for(let n=0;n<r.floors;n++){let r=ff+n*s;n>0&&(t.box(.06,e,r-.12,o-.06,h,r+.02,p),t.box(.06,e,r+.02,o-.06,.1,r+1,f));for(let e=0;e<o;e++)t.box(e+.42,h-.015,r+.05,e+.62,h,r+2.25,d),t.forRoom(n*o+e),t.box(e+.7,h-.015,r+1.7,e+.86,h,r+2.2,K.window),t.forRoom(-1)}for(let e=0;e<=o;e+=2)t.post(Math.min(o-.1,Math.max(.1,e)),.1,ff,_,f,.035);for(let n=0;n+1<r.floors;n++){let r=ff+n*s;t.polygon([[.12,e,r+.05],[.12,h-.06,r+.05],[.95,h-.06,r+s],[.95,e,r+s]],K.wood)}}let v=c?1:2;for(let e=0;e<r.floors;e++){let n=ff+e*s,r=(h+m)/2;t.forRoom(e*v*o),t.box(-.005,r-.12,n+1.1,.06,r+.12,n+2,K.window),t.forRoom(e*v*o+o-1),t.box(o-.06,r-.12,n+1.1,o+.005,r+.12,n+2,K.window)}t.forRoom(-1)}var yf=8,bf={8:e=>({...e,version:9}),9:e=>{let t=e.state.reputation,n=t&&{...t,weight:Math.min(t.count,40),segmentWeights:t.segmentCounts.map(e=>Math.min(e,40)),aged:-1};return{...e,version:10,state:{...e.state,reputation:n}}},10:e=>({...e,version:11}),11:e=>({...e,version:12})};function xf(e){return typeof e.version==`number`&&e.version>=1&&e.version<yf}function Sf(e){let t=e;if(typeof t.version!=`number`||t.version<1)throw Error(`Not a Paradise Lot save`);if(t.version>12)throw Error(`This save is from a newer version of the game (format ${t.version})`);if(xf(t))throw Error(`This save is from a test build before the real calendar, and can’t be carried on`);for(;t.version<12;){let e=bf[t.version];if(!e)throw Error(`No migration from save format ${t.version}`);t=e(t)}return t}async function Cf(e){let t=new TextDecoder().decode(await wf(e,new DecompressionStream(`gzip`)));return JSON.parse(t)}async function wf(e,t){let n=new Blob([e]).stream().pipeThrough(t);return new Uint8Array(await new Response(n).arrayBuffer())}var Tf=[[4,6],[4,5],[4,4],[4,3],[3,3],[2,3],[1,3],[0,3],[0,4],[0,5],[0,6]],Ef={night:[22,7],floor:35,earHeight:1.5,wavelength:.68,maxLoss:20,annoying:62,sleepless:44},Df={lobby:11,valet:3.7,roomBlock:9.4,oceanBlock:12.2,bungalow:6.6,villa:6.8,restaurant:7.4,poolBar:4.6,beachShack:3.1,coffeeKiosk:3,kitchen:5.6,housekeeping:4.8,maintenance:3.5,spa:3.5,kidsClub:4.6,beachHut:4,lifeguard:5.4,restrooms:3.2,shadeTree:5.2,hedge:2,fountain:2.8,slide:3,waterfall:2.5,swimUpBar:3.6,cabana:2.6,gym:4.6,frangipani:4,bougainvillea:2.4,banana:3.5,birdOfParadise:1.4,treeFern:3.5,seaGrape:2.8},Of={eye:{roomBlock:4.5,oceanBlock:7,bungalow:2.5,villa:2.5},rays:48,reach:80,groundStep:2,windowCos:.17,halfAt:18,scale:300,roomScale:130,lakeWorth:.85,minLake:12,peakFrom:12,peakTan0:.03,peakTanSpan:.15,mountainWorth:.65,standing:1.7,lovely:45,poor:15,worth:[.9,1.2]},kf={sleepTolerance:14,restLostPerDb:.05,minRest:.3,dayTolerance:12,noiseStrain:.25,sceneryCalm:4,backOfHouseStrain:.3,quiet:45,thoughtChance:.08},Af={sources:{palm:[10,4],shadeTree:[12,4],flowerBed:[15,3],hedge:[5,2],fountain:[25,5],torch:[2,2],bench:[2,2],lounger:[2,2],umbrella:[2,2],kitchen:[-25,4],housekeeping:[-20,4],maintenance:[-25,4],waterfall:[22,4],cabana:[4,2],frangipani:[18,4],bougainvillea:[9,2],banana:[8,3],birdOfParadise:[14,3],treeFern:[16,3],seaGrape:[8,3],royalPalm:[12,6]},inSun:{treeFern:.35},water:1.5,waterReach:4,grass:6,rock:-10,servicePath:-8,lovely:35,ugly:-15},jf={reach:7,building:8,servicePath:1,staffAtWork:2,noticeable:6},Mf={tennisCourt:{sport:`tennis`,lit:!1},tennisCourtLit:{sport:`tennis`,lit:!0},pickleballCourt:{sport:`pickleball`,lit:!1},pickleballCourtLit:{sport:`pickleball`,lit:!0}},Nf={tennis:{length:23.77,width:10.97,singles:8.23,service:6.4,net:.914,posts:1.07},pickleball:{length:13.41,width:6.1,singles:6.1,service:2.13,net:.86,posts:.91}},Pf=`
in float aMat;
in float aFlags;
in float aGain;
in vec4 aExtra;
out vec3 vWorld;
out float vMat;
out float vFlags;
out float vGain;
out vec4 vExtra;
uniform float uTime;
void main() {
  vec3 p = position;
  // Palm fronds sway: weight in aExtra.x (palms only), phase in aExtra.y.
  if (aMat == ${K.foliage}.0 && aExtra.x > 0.0) {
    float s = sin(uTime * 1.7 + aExtra.y) * aExtra.x;
    p.x += s * 0.035;
    p.z += s * 0.02;
  }
  vec4 world = modelMatrix * vec4(p, 1.0);
  vWorld = world.xyz;
  vMat = aMat;
  vFlags = aFlags;
  vGain = aGain;
  vExtra = aExtra;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,Ff=`
precision highp float;
in vec3 vWorld;
in float vMat;
in float vFlags;
in float vGain;
in vec4 vExtra;
out vec4 outColor;
uniform vec3 uLight;
uniform vec3 uView;
uniform sampler2D uShadowMap;
uniform mat4 uShadowMatrix;
uniform float uShadowBias;
uniform float uCell;
uniform vec4 uTorches[32];
uniform int uTorchCount;
uniform float uRefused;
uniform sampler2D uOverlay;
uniform float uOverlayOn;
uniform sampler2D uRoomLights;
uniform sampler2D uLand;
uniform float uLandOn;

// Integer hashes of whole-number cells (PCG). Sine-based hashes lose precision at large world
// coordinates on many GPUs and show up as stripes.
uint pcg(uint v) {
  uint state = v * 747796405u + 2891336453u;
  uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}
float hash(vec2 p) {
  ivec2 i = ivec2(floor(p));
  return float(pcg(uint(i.x) + pcg(uint(i.y)))) / 4294967295.0;
}
float hash3(vec3 p) {
  ivec3 i = ivec3(floor(p));
  return float(pcg(uint(i.x) + pcg(uint(i.y) + pcg(uint(i.z))))) / 4294967295.0;
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}

// Shade position from light intensity: flat tops land on 1, left walls on 2, right walls on 3.
float shadeFor(float i) {
  if (i >= 0.95) return 0.0;
  if (i >= 0.844) return (0.95 - i) / (0.95 - 0.844);
  if (i >= 0.38) return 1.0 + (0.844 - i) / (0.844 - 0.38);
  if (i >= -0.38) return 2.0 + (0.38 - i) / 0.76;
  return 3.0;
}

// Whose land a tile is, in a scenario: 2 the resort's, 1 for sale, 0 neither (and off the map).
float landAt(ivec2 t) {
  ivec2 size = textureSize(uLand, 0);
  if (t.x < 0 || t.y < 0 || t.x >= size.x || t.y >= size.y) return 0.0;
  return floor(texelFetch(uLand, t, 0).r * 255.0 + 0.5);
}

bool inShadow(vec3 n) {
  vec4 s = uShadowMatrix * vec4(vWorld + n * 0.02, 1.0);
  vec3 c = s.xyz / s.w * 0.5 + 0.5;
  if (c.x <= 0.0 || c.y <= 0.0 || c.x >= 1.0 || c.y >= 1.0) return false;
  return c.z - uShadowBias > texture(uShadowMap, c.xy).r;
}

void main() {
  float mat = floor(vMat + 0.5);
  // A room's window is lit only while its guests are in and awake (slot + 1 in vExtra.z).
  if (mat == ${K.window}.0 && vExtra.z > 0.5) {
    float slot = floor(vExtra.z - 0.5);
    vec2 at = (vec2(mod(slot, 64.0), floor(slot / 64.0)) + 0.5) / 64.0;
    if (texture(uRoomLights, at).r < 0.5) mat = ${K.windowDark}.0;
  }
  vec3 n = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
  if (dot(n, uView) < 0.0) n = -n;
  float light = dot(n, uLight);
  // Ground: flat sits on the second step, and slopes move along the ramp by how far they turn
  // towards or away from the sun, so gentle hills read. Models: walls by the fixed knots.
  float shade = vGain > 0.0 ? 1.0 + (uLight.y - light) * vGain : shadeFor(light);

  // World-anchored pattern cell, about one art pixel across on the ground.
  vec2 cell = floor(vWorld.xz / uCell);
  float h = hash(cell);
  float pattern = 0.0;   // shade offset, in ramp steps
  float code = -1.0;     // a cycle phase or accent code, overriding the pattern
  float flags = vFlags;

  if (mat == ${K.grass}.0 && n.y < 0.9) {
    // Steep grass: bare earth shows through in streaks, more of it the steeper the ground.
    float bare = (0.9 - n.y) / 0.12 - 0.35 + noise(vWorld.xz * vec2(0.9, 0.9)) * 0.7;
    if (hash(cell + 23.0) < bare * 0.55) mat = ${K.soil}.0;
  }
  if (mat == ${K.grass}.0) {
    float lush = noise(vWorld.xz * 0.11) + noise(vWorld.xz * 0.27) * 0.35;
    float tufts = lush > 0.86 ? 0.07 : 0.022;
    if (h < tufts) pattern = -0.9;
    else if (hash(cell + vec2(0.0, 1.0)) < tufts) pattern = 0.9;
    if (lush > 0.86 && hash(cell + 17.0) < 0.006) code = hash(cell + 3.0) < 0.5 ? ${Bl.yellowFlower}.0 : ${Bl.coralFlower}.0;
  } else if (mat == ${K.sand}.0) {
    if (h < 0.04) pattern = 0.9; else if (h > 0.975) pattern = -0.9;
  } else if (mat == ${K.rock}.0 || mat == ${K.basalt}.0 || mat == ${K.sandstone}.0) {
    // Cliff faces: strata every level, a lighter ledge along the top of each, darker pits.
    vec3 cell3 = floor(vWorld / uCell);
    float level = vWorld.y / ${Xc.toFixed(6)};
    float inLevel = fract(level);
    if (abs(n.y) < 0.3 && inLevel > 0.82) pattern = -1.0;
    else if (hash3(cell3) < 0.09) pattern = 0.8;
    else if (hash3(floor(vWorld / (uCell * 4.0))) < 0.18) pattern = 0.4;
  } else if (mat == ${K.hedge}.0) {
    // Clipped leaves: light tips and dark pockets an art pixel across, the tips thicker in some
    // clumps a few pixels wide and the pockets in others. Leaves break up its faces, not dithering:
    // its shading keeps to whole steps, which puts the sunny side of its rim on the brightest.
    shade = floor(shade + 0.5);
    float clump = hash3(floor(vWorld / (uCell * 3.0)) + 7.0);
    float leaf = hash3(floor(vWorld / uCell));
    if (leaf < 0.04 + clump * 0.18) pattern = -1.0;
    else if (leaf > 0.78 + clump * 0.18) pattern = 1.0;
  } else if (mat == ${K.stucco}.0) {
    if (hash3(floor(vWorld / uCell)) < 0.03) pattern = 0.4;
  } else if (mat == ${K.thatch}.0) {
    float course = fract(vWorld.y / (uCell * 3.0));
    if (course > 0.66) pattern = 0.8;
    if (hash3(floor(vWorld / (uCell * 2.0))) < 0.2) pattern += 0.5;
  } else if (mat == ${K.wood}.0) {
    if (fract(vWorld.y / (uCell * 6.0)) > 0.84) pattern = 0.6;
  } else if (mat == ${K.roofTile}.0) {
    // Terracotta: courses of tiles, each course's lower lip a shade darker, with barrel joints.
    if (fract(vWorld.y / (uCell * 2.0)) > 0.6) pattern = 0.7;
    else if (fract((vWorld.x + vWorld.z) / (uCell * 2.0)) < 0.25) pattern = 0.4;
  } else if (mat == ${K.shingle}.0 || mat == ${K.slate}.0) {
    // Shingles: courses, staggered, a few weathered darker.
    float course = floor(vWorld.y / (uCell * 2.0));
    if (fract(vWorld.y / (uCell * 2.0)) > 0.7) pattern = 0.7;
    else if (hash(vec2(floor((vWorld.x + vWorld.z) / (uCell * 2.0) + course * 0.5), course)) < 0.25) pattern = 0.45;
  } else if (mat == ${K.metal}.0) {
    // Standing-seam metal: a raised seam every three art pixels.
    if (fract(vWorld.x / (uCell * 3.0)) < 0.25 || fract(vWorld.z / (uCell * 3.0)) < 0.25) pattern = -0.6;
  } else if (mat == ${K.adobe}.0) {
    // Hand-finished earth: soft blotches.
    float blot = noise(vWorld.xz * 3.0 + vWorld.y * 2.0);
    if (blot > 0.8) pattern = 0.35; else if (blot < 0.12) pattern = -0.3;
  } else if (mat == ${K.siding}.0) {
    // Clapboard: a shadow line under every board.
    if (fract(vWorld.y / (uCell * 2.0)) > 0.78) pattern = 0.8;
  } else if (mat == ${K.asphalt}.0) {
    // Road: tarmac with a kerb along every edge that doesn't join more road.
    vec2 uv = vExtra.xy;
    float mask = vExtra.z;
    float edgeN = mod(mask, 2.0) < 1.0 ? uv.y : 9.0;
    float edgeE = mod(floor(mask / 2.0), 2.0) < 1.0 ? 1.0 - uv.x : 9.0;
    float edgeS = mod(floor(mask / 4.0), 2.0) < 1.0 ? 1.0 - uv.y : 9.0;
    float edgeW = mod(floor(mask / 8.0), 2.0) < 1.0 ? uv.x : 9.0;
    float nearest = min(min(edgeN, edgeE), min(edgeS, edgeW));
    if (nearest < 0.07) mat = ${K.coping}.0;
    else if (h < 0.05) pattern = -0.7;
    else if (h > 0.96) pattern = 0.7;
  } else if (mat == ${K.gravel}.0) {
    // Service path: loose grey gravel, no kerb, ragged at the edges.
    vec2 uv = vExtra.xy;
    float mask = vExtra.z;
    float edgeN = mod(mask, 2.0) < 1.0 ? uv.y : 9.0;
    float edgeE = mod(floor(mask / 2.0), 2.0) < 1.0 ? 1.0 - uv.x : 9.0;
    float edgeS = mod(floor(mask / 4.0), 2.0) < 1.0 ? 1.0 - uv.y : 9.0;
    float edgeW = mod(floor(mask / 8.0), 2.0) < 1.0 ? uv.x : 9.0;
    if (min(min(edgeN, edgeE), min(edgeS, edgeW)) < 0.06 + h * 0.08) discard;
    if (h < 0.2) pattern = 1.0; else if (h > 0.9) pattern = -0.8;
  } else if (mat == ${K.path}.0) {
    // Pavers on a 3x3 grid per tile; a border along edges that don't join another path.
    vec2 uv = vExtra.xy;
    float mask = vExtra.z;
    float edgeN = mod(mask, 2.0) < 1.0 ? uv.y : 9.0;
    float edgeE = mod(floor(mask / 2.0), 2.0) < 1.0 ? 1.0 - uv.x : 9.0;
    float edgeS = mod(floor(mask / 4.0), 2.0) < 1.0 ? 1.0 - uv.y : 9.0;
    float edgeW = mod(floor(mask / 8.0), 2.0) < 1.0 ? uv.x : 9.0;
    float nearest = min(min(edgeN, edgeE), min(edgeS, edgeW));
    if (nearest < 0.1) discard;
    if (nearest < 0.17) mat = ${K.pathEdge}.0;
    vec2 g = abs(fract(uv * 3.0) - 0.5);
    if (max(g.x, g.y) > 0.46) pattern = 1.0;
    else if (h < 0.05) pattern = 1.0;
  } else if (mat == ${K.poolDeck}.0) {
    // Pool deck: big pale stone slabs, two to a tile each way, with a joint between them and a
    // few a shade warmer; a darker border where it meets anything but more deck or the coping.
    vec2 uv = vExtra.xy;
    float mask = vExtra.z;
    float edgeN = mod(mask, 2.0) < 1.0 ? uv.y : 9.0;
    float edgeE = mod(floor(mask / 2.0), 2.0) < 1.0 ? 1.0 - uv.x : 9.0;
    float edgeS = mod(floor(mask / 4.0), 2.0) < 1.0 ? 1.0 - uv.y : 9.0;
    float edgeW = mod(floor(mask / 8.0), 2.0) < 1.0 ? uv.x : 9.0;
    vec2 slab = floor(vWorld.xz * 2.0);
    vec2 g = abs(fract(vWorld.xz * 2.0) - 0.5);
    if (min(min(edgeN, edgeE), min(edgeS, edgeW)) < 0.07) mat = ${K.pathEdge}.0;
    else if (max(g.x, g.y) > 0.47) pattern = 1.0;
    else if (hash(slab + 31.0) < 0.3) pattern = 0.45;
    else if (h < 0.025) pattern = 0.7;
  } else if (mat == ${K.decking}.0) {
    // Timber planks laid across the way (aExtra.w: 1 where the way runs north-south), a dark gap
    // between boards, each board its own shade; an edge board along each open side.
    vec2 uv = vExtra.xy;
    float mask = vExtra.z;
    float edgeN = mod(mask, 2.0) < 1.0 ? uv.y : 9.0;
    float edgeE = mod(floor(mask / 2.0), 2.0) < 1.0 ? 1.0 - uv.x : 9.0;
    float edgeS = mod(floor(mask / 4.0), 2.0) < 1.0 ? 1.0 - uv.y : 9.0;
    float edgeW = mod(floor(mask / 8.0), 2.0) < 1.0 ? uv.x : 9.0;
    float along = vExtra.w > 0.5 ? vWorld.z : vWorld.x;
    float board = floor(along * 6.0);
    if (min(min(edgeN, edgeE), min(edgeS, edgeW)) < 0.08) pattern = 1.0;
    else if (fract(along * 6.0) > 0.82) pattern = 1.6;
    else pattern = hash(vec2(board, floor(vWorld.x) * 7.0 + floor(vWorld.z) * 13.0)) * 0.7 - 0.2;
  } else if (mat == ${K.deep}.0 || mat == ${K.shallow}.0) {
    // Depth in aExtra.x (levels), nearness to shore in aExtra.y (1 at the waterline).
    float depth = vExtra.x;
    float deepShare = clamp(depth - 1.0, 0.0, 1.0);
    mat = hash(cell + 5.0) < deepShare ? ${K.deep}.0 : ${K.shallow}.0;
    float shore = vExtra.y;
    if (shore > 0.72) {
      mat = ${K.foam}.0;
      code = 1.0 + mod(floor((1.0 - shore) * 14.0 + h * 0.9), 4.0);
    } else {
      // Short glints that travel diagonally as the palette turns.
      vec2 dash = floor(vec2(vWorld.x / (uCell * 3.0), vWorld.z / uCell));
      code = hash(dash + 40.0) < 0.085 ? 1.0 + mod(floor((vWorld.x + vWorld.z) * 4.0), 4.0) : 0.0;
    }
  } else if (mat == ${K.pool}.0 || mat == ${K.poolDeep}.0) {
    vec2 t = fract(vWorld.xz);
    float a = t.x * 3.0 + 0.35 * sin(t.y * 12.566);
    float b = t.y * 3.0 + 0.35 * sin(t.x * 12.566);
    float c = max(abs(fract(a) - 0.5), abs(fract(b) - 0.5));
    code = c > 0.47 ? 1.0 + mod(floor((t.x + t.y) * 6.0) + (h < 0.5 ? 0.0 : 1.0), 4.0) : 0.0;
  } else if (mat == ${K.torch}.0) {
    code = 1.0 + mod(floor(vWorld.y / uCell), 4.0);
  } else if (mat == ${K.foam}.0) {
    // Falling water (waterfalls, infinity edges, fountain jets): bands that run down as the palette turns.
    code = 1.0 + mod(floor(vWorld.y / (uCell * 2.0)) + floor(h * 1.5), 4.0);
  } else if (mat == ${K.poolTile}.0) {
    if (fract(vWorld.y / (uCell * 3.0)) > 0.7) pattern = 1.0;
  }

#ifndef GHOST
  // The edge of the resort's land: a dashed survey line just inside what it owns, on the ground.
  bool wet = mat == ${K.deep}.0 || mat == ${K.shallow}.0 || mat == ${K.foam}.0 || mat == ${K.pool}.0 || mat == ${K.poolDeep}.0;
  if (uLandOn > 0.5 && vGain > 0.0 && !wet) {
    vec2 p = vWorld.xz - n.xz * 0.01;
    ivec2 tile = ivec2(floor(p));
    if (landAt(tile) > 1.5) {
      vec2 f = fract(p);
      // An art pixel or so wide, and never thinner than a pixel of the picture when zoomed out.
      float px = max(fwidth(p.x), fwidth(p.y));
      float w = max(uCell * 1.5, px * 0.9);
      bool edge = (f.x < w && landAt(tile + ivec2(-1, 0)) < 1.5) || (f.x > 1.0 - w && landAt(tile + ivec2(1, 0)) < 1.5)
        || (f.y < w && landAt(tile + ivec2(0, -1)) < 1.5) || (f.y > 1.0 - w && landAt(tile + ivec2(0, 1)) < 1.5);
      if (edge && mod(floor((p.x + p.y) / max(uCell * 3.0, px * 3.0)), 2.0) < 1.0) {
        mat = ${K.stucco}.0;
        pattern = 0.0;
        code = -1.0;
        shade = min(shade, 1.0);
      }
    }
  }
#endif

  // Torchlight pools (used at night): solid near the flame, ordered falloff to the edge.
  for (int k = 0; k < 32; k++) {
    if (k >= uTorchCount) break;
    vec4 t = uTorches[k];
    float d = length(vWorld.xz - t.xz) / t.w;
    if (d < 0.55 || (d < 1.0 && (1.0 - d) / 0.45 > hash(cell + 91.0))) { flags += ${Hl.torchlit}.0; break; }
  }

#ifndef GHOST
  // Ground and paths take the overlay. Water, path edges and kerbs stay as they are, so the shore
  // and the path network still read through it.
  bool ground = vGain > 0.0 || mat == ${K.path}.0 || mat == ${K.poolDeck}.0 || mat == ${K.decking}.0 || mat == ${K.gravel}.0 || mat == ${K.asphalt}.0 || mat == ${K.soil}.0;
  bool kept = mat == ${K.deep}.0 || mat == ${K.shallow}.0 || mat == ${K.foam}.0 || mat == ${K.pool}.0 || mat == ${K.poolDeep}.0 || mat == ${K.pathEdge}.0 || mat == ${K.coping}.0;
  if (uOverlayOn > 0.5 && ground && !kept) {
    // An overlay: the ground takes its tile's band, flat and unshadowed, but keeps its relief.
    ivec2 size = textureSize(uOverlay, 0);
    ivec2 tile = clamp(ivec2(floor(vWorld.xz - n.xz * 0.01)), ivec2(0), size - 1);
    float band = floor(texelFetch(uOverlay, tile, 0).r * 255.0 + 0.5);
    if (band > 0.0) {
      // No pattern, torchlight or shadow on an overlay, and daytime colors at any hour.
      float overlayMat = ${K.overlay}.0 + band - 1.0;
      if (vGain <= 0.0) shade = 1.0;
      outColor = vec4(overlayMat / 255.0, clamp(shade, 0.0, 3.99) / 4.0, 128.0 / 255.0, (mod(flags, 2.0) + ${Hl.daylit}.0) / 255.0);
      return;
    }
  }
#endif
  if (light > 0.0 && inShadow(n)) flags += ${Hl.shadowed}.0;
#ifdef GHOST
  // A ghost preview: every other art pixel, so the world shows through; red where refused.
  if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) > 0.5) discard;
  flags += uRefused * ${Hl.refused}.0;
#endif

  float b = code >= 0.0 ? code : clamp(128.0 + pattern * 32.0, 0.0, 249.0);
  outColor = vec4(mat / 255.0, clamp(shade, 0.0, 3.99) / 4.0, b / 255.0, flags / 255.0);
}
`;function If(){return{uLight:{value:new V(0,1,0)},uView:{value:new V(0,1,0)},uShadowMap:{value:null},uShadowMatrix:{value:new cn},uShadowBias:{value:.002},uCell:{value:1/24},uTime:{value:0},uTorches:{value:Array.from({length:32},()=>new nn)},uTorchCount:{value:0},uRefused:{value:0},uOverlay:{value:null},uOverlayOn:{value:0},uRoomLights:{value:null},uLand:{value:null},uLandOn:{value:0}}}function Lf(e){return new Pi({glslVersion:pt,vertexShader:Pf,fragmentShader:Ff,uniforms:e,blending:0,side:2})}function Rf(e){let t=Lf(e);return t.defines={GHOST:1},t}function zf(e){return new Pi({glslVersion:pt,vertexShader:Pf,fragmentShader:`precision highp float; out vec4 outColor; void main() { outColor = vec4(1.0); }`,uniforms:e,side:2})}var Bf=class{position=[];mat=[];flags=[];gain=[];extra=[];vertex(e,t,n,r,i=0,a=0,o=0,s=0,c=0,l=0){this.position.push(e,t,n),this.mat.push(r),this.flags.push(i),this.gain.push(a),this.extra.push(o,s,c,l)}get count(){return this.mat.length}build(){let e=new zr;return e.setAttribute(`position`,new Dr(this.position,3)),e.setAttribute(`aMat`,new Dr(this.mat,1)),e.setAttribute(`aFlags`,new Dr(this.flags,1)),e.setAttribute(`aGain`,new Dr(this.gain,1)),e.setAttribute(`aExtra`,new Dr(this.extra,4)),e.computeBoundingSphere(),e.computeBoundingBox(),e}},Vf=class{m;ox;oy;baseLevel;turns;w;d;flags=0;extra=[0,0];room=0;roomBase=-1;remap;dx=0;dy=0;constructor(e,t,n,r,i,a,o){this.m=e,this.ox=t,this.oy=n,this.baseLevel=r,this.turns=i,this.w=a,this.d=o}turn(e,t){switch(this.turns&3){case 0:return[e,t];case 1:return[this.d-t,e];case 2:return[this.w-e,this.d-t];default:return[t,this.w-e]}}polygon(e,t,n){for(let r=1;r+1<e.length;r++)for(let i of[e[0],e[r],e[r+1]]){let[e,r]=this.turn(i[0]+this.dx,i[1]+this.dy),a=n?n(i):this.extra[0];this.m.vertex(this.ox+e,(this.baseLevel+i[2])*Xc,this.oy+r,this.remap?.get(t)??t,this.flags,0,a,this.extra[1],this.room)}}box(e,t,n,r,i,a,o,s=o){this.polygon([[e,t,a],[r,t,a],[r,i,a],[e,i,a]],s),this.polygon([[e,i,n],[r,i,n],[r,i,a],[e,i,a]],o),this.polygon([[r,t,n],[r,i,n],[r,i,a],[r,t,a]],o),this.polygon([[e,t,n],[r,t,n],[r,t,a],[e,t,a]],o),this.polygon([[e,t,n],[e,i,n],[e,i,a],[e,t,a]],o)}forRoom(e){this.room=this.roomBase>=0&&e>=0?this.roomBase+e+1:0}post(e,t,n,r,i,a=.035){this.box(e-a,t-a,n,e+a,t+a,r,i)}hipRoof(e,t,n,r,i,a,o){let s=(e+n)/2,c=(t+r)/2,l=Math.min(n-e,r-t)/2;if(n-e>=r-t){let s=e+l,u=n-l;this.polygon([[e,r,i],[n,r,i],[u,c,a],[s,c,a]],o),this.polygon([[n,t,i],[e,t,i],[s,c,a],[u,c,a]],o),this.polygon([[n,r,i],[n,t,i],[u,c,a]],o),this.polygon([[e,t,i],[e,r,i],[s,c,a]],o)}else{let c=t+l,u=r-l;this.polygon([[n,t,i],[n,r,i],[s,u,a],[s,c,a]],o),this.polygon([[e,r,i],[e,t,i],[s,c,a],[s,u,a]],o),this.polygon([[e,r,i],[n,r,i],[s,u,a]],o),this.polygon([[n,t,i],[e,t,i],[s,c,a]],o)}this.polygon([[e,t,i],[n,t,i],[n,r,i],[e,r,i]],o)}gableRoof(e,t,n,r,i,a,o,s){let c=(t+r)/2;this.polygon([[e,r,i],[n,r,i],[n,c,a],[e,c,a]],o),this.polygon([[n,t,i],[e,t,i],[e,c,a],[n,c,a]],o),this.polygon([[e,t,i],[e,r,i],[e,c,a]],s),this.polygon([[n,r,i],[n,t,i],[n,c,a]],s),this.polygon([[e,t,i],[n,t,i],[n,r,i],[e,r,i]],o)}cone(e,t,n,r,i,a,o=8){for(let s=0;s<o;s++){let c=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;this.polygon([[e+Math.cos(c)*n,t+Math.sin(c)*n,r],[e+Math.cos(l)*n,t+Math.sin(l)*n,r],[e,t,i]],a[s%a.length])}}disc(e,t,n,r,i,a=8){let o=[];for(let i=0;i<a;i++){let s=i/a*Math.PI*2;o.push([e+Math.cos(s)*n,t+Math.sin(s)*n,r])}this.polygon(o,i)}tube(e,t,n,r,i,a,o=8){for(let s=0;s<o;s++){let c=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2,u=e+Math.cos(c)*n,d=t+Math.sin(c)*n,f=e+Math.cos(l)*n,p=t+Math.sin(l)*n;this.polygon([[u,d,r],[f,p,r],[f,p,i],[u,d,i]],a)}}dome(e,t,n,r,i,a,o=8){let s=[[0,.75],[.35,1],[.75,.8],[1,0]];for(let c=0;c+1<s.length;c++){let[l,u]=s[c],[d,f]=s[c+1];for(let s=0;s<o;s++){let p=(s+c*.5)/o*Math.PI*2,m=(s+1+c*.5)/o*Math.PI*2,h=r+(i-r)*l,g=r+(i-r)*d,_=(r,i,a)=>[e+Math.cos(r)*n*i,t+Math.sin(r)*n*i,a];f===0?this.polygon([_(p,u,h),_(m,u,h),[e,t,g]],a):this.polygon([_(p,u,h),_(m,u,h),_(m,f,g),_(p,f,g)],a)}}this.disc(e,t,n*s[0][1],r,a,o)}};function Hf(e,t){let n=Math.imul(e+17,2654435761)^Math.imul(t+31,2246822519);return n=Math.imul(n^n>>>15,2246822507),((n^n>>>13)>>>0)/4294967296}var Y=.4;function Uf(e,t,n,r,i,a,o,s,c=K.teal){let l=(i-r)/s;for(let i=0;i<s;i++){let s=r+l*(i+.3),u=r+l*(i+.7),d=t===`front`||t===`right`?.015:-.015,f=d*1.6;t===`front`||t===`back`?(e.box(s,Math.min(n,n+d),a,u,Math.max(n,n+d),o,K.window),e.box(s-.07,Math.min(n,n+f),a,s-.01,Math.max(n,n+f),o,c),e.box(u+.01,Math.min(n,n+f),a,u+.07,Math.max(n,n+f),o,c)):(e.box(Math.min(n,n+d),s,a,Math.max(n,n+d),u,o,K.window),e.box(Math.min(n,n+f),s-.07,a,Math.max(n,n+f),s-.01,o,c),e.box(Math.min(n,n+f),u+.01,a,Math.max(n,n+f),u+.07,o,c))}}function Wf(e,t,n,r=K.teal,i=.34,a=2.3){e.box(t-i/2,n,Y,t+i/2,n+.02,Y+a,r)}function Gf(e){e.box(.3,.3,Y,2.7,2.35,6.6,K.stucco),Uf(e,`front`,2.35,.3,2.7,4,5.6,4),Uf(e,`back`,.3,.3,2.7,4,5.6,4),Uf(e,`back`,.3,.3,1.05,1.4,3,1),Uf(e,`back`,.3,1.95,2.7,1.4,3,1),e.box(1.1,.28,Y,1.9,.3,3,K.window),e.box(1.08,.27,3,1.92,.3,3.15,K.coping);for(let t of[.98,2.02])e.post(t,.06,Y,3.4,K.stucco,.04);e.box(.92,0,3.4,2.08,.3,3.55,K.stucco,K.coping);for(let t=0;t<2;t++)e.box(1.15,t*.04,0,1.85,.04+t*.04,Y*(t+1)/3,K.pathEdge);Uf(e,`left`,.3,.3,2.35,1.4,3,3),Uf(e,`left`,.3,.3,2.35,4,5.6,3),Uf(e,`right`,2.7,.3,2.35,1.4,3,3),Uf(e,`right`,2.7,.3,2.35,4,5.6,3),e.box(1.05,2.35,Y,1.95,2.37,3.1,K.window),e.box(.55,2.35,Y,2.45,2.95,.52,K.coping);for(let t of[.65,1.15,1.85,2.35])e.post(t,2.85,Y,4.2,K.stucco,.06);e.box(.5,2.3,4.2,2.5,3,4.6,K.stucco,K.coping),e.box(.95,3,4.25,2.05,3.02,4.55,K.coral),e.hipRoof(.12,.12,2.88,2.55,6.6,11.2,K.thatch)}function Kf(e,t){for(let[t,n]of Tf)e.polygon([[t,n,.02],[t+1,n,.02],[t+1,n+1,.02],[t,n+1,.02]],K.basalt);e.box(-.02,3,0,.06,7,.18,K.coping),e.box(4.94,3,0,5.02,7,.18,K.coping),e.box(1.04,4.04,0,3.96,6.96,.3,K.coping,K.grass);let n=e.remap;e.remap=void 0,e.dx=1.5,e.dy=4.5,Vp(e),e.dx=1,e.dy=6,yp(e,t),e.dx=3,yp(e,(t+.37)%1),e.dx=0,e.dy=0,e.remap=n;for(let t of[.95,2.5,4.05])e.post(t,3.92,0,4.2,K.stucco,.07);e.box(.75,2.85,4.2,4.25,4.12,4.5,K.stucco,K.coping),e.hipRoof(.65,2.8,4.35,4.2,4.5,5.6,K.thatch)}function qf(e){e.polygon([[0,0,.02],[4,0,.02],[4,3,.02],[0,3,.02]],K.basalt);for(let[t,n]of[[.08,.92],[2.08,2.92]])for(let r=0;r<=8;r++)e.box(r*.5-.015,t,.02,r*.5+.015,n,.035,K.coping);e.box(0,-.02,0,4,.06,.18,K.coping),e.box(0,2.94,0,4,3.02,.18,K.coping)}function Jf(e){e.box(.1,.12,Y,.95,.88,2.7,K.stucco),e.box(.08,.36,Y,.1,.64,2.5,K.wood),Uf(e,`front`,.88,.15,.9,1.2,2.2,1),Uf(e,`right`,.95,.15,.85,1.2,2.2,1),e.hipRoof(-.05,-.02,1.1,1.02,2.7,3.7,K.thatch),e.box(1.15,.2,0,1.9,.8,.3,K.coping,K.soil);for(let[t,n,r]of[[1.35,.4,K.coral],[1.65,.6,K.yellow],[1.45,.65,K.magenta]])e.box(t-.08,n-.08,.3,t+.08,n+.08,.55,K.foliage),e.box(t-.04,n-.04,.55,t+.04,n+.04,.65,r)}function Yf(e){e.box(.1,.38,0,1.9,.62,1.3,K.rock,K.coping),e.box(.35,.62,.45,1.65,.64,1.05,K.teal);for(let t=0;t<6;t++)e.box(.48+t*.18,.64,.68,.58+t*.18,.65,.82,K.coping);for(let t of[.25,.7,1.3,1.75])e.box(t-.12,.7,0,t+.12,.92,.45,K.foliage)}function Xf(e){for(let[t,n]of[[.12,.12],[1.88,.12],[.12,.88],[1.88,.88]])e.post(t,n,0,3.4,K.stucco,.045);e.box(.02,.02,3.4,1.98,.98,3.7,K.teal),e.box(.25,.3,0,.55,.55,1.2,K.wood),e.post(1.6,.45,0,2.2,K.wood,.025),e.box(1.45,.43,1.6,1.75,.47,2.2,K.yellow)}function Zf(e){e.box(.2,.2,Y,1.8,1.8,6,K.stucco);for(let t of[0,1]){let n=1.2+t*2.6;e.forRoom(t*2),Uf(e,`left`,.2,.4,1.7,n,n+1.2,2),Uf(e,`back`,.2,.3,1,n,n+1.2,1),e.forRoom(t*2+1),Uf(e,`right`,1.8,.4,1.7,n,n+1.2,2),Uf(e,`back`,.2,1,1.7,n,n+1.2,1)}for(let[t,n]of[[0,.6],[1,1.4]])e.forRoom(-1),Wf(e,n,1.8),e.forRoom(2+t),e.box(n-.18,1.8,3.2,n+.18,1.815,5.1,K.window);e.forRoom(-1),e.box(.2,1.8,2.9,1.8,2.06,3.15,K.wood),e.box(.2,2.02,3.15,1.8,2.06,4,K.wood),e.hipRoof(.02,.02,1.98,1.98,6,9.4,K.thatch)}function Qf(e){let t=9.2;e.box(.2,.2,Y,2.8,1.55,t,K.stucco);let n=(e,t)=>e===0?t<1.5?0:1:e+1;for(let t of[0,1,2]){let r=.9+t*2.8;e.forRoom(n(t,0)),Uf(e,`left`,.2,.3,1.5,r,r+1.3,2,K.coral),e.forRoom(n(t,3)),Uf(e,`right`,2.8,.3,1.5,r,r+1.3,2,K.coral),e.forRoom(n(t,0)),Uf(e,`back`,.2,.3,2.7,r,r+1.3,3,K.coral);for(let i of[.55,1.5,2.45])e.forRoom(n(t,i)),e.box(i-.24,1.55,r-.4,i+.24,1.565,r+1.6,K.window);e.forRoom(-1),e.box(.2,1.55,r-.55,2.8,1.92,r-.4,K.coping),e.box(.2,1.88,r-.4,2.8,1.92,r+.5,K.coping)}e.hipRoof(.05,.05,2.95,1.85,t,12.2,K.thatch)}function $f(e){for(let[t,n]of[[.2,.2],[1.8,.2],[.2,1.8],[1.8,1.8],[1,.2],[1,1.8]])e.post(t,n,0,1.1,K.wood,.05);e.box(.1,.1,.9,1.9,1.9,1.15,K.wood),e.box(.4,.3,1.15,1.6,1.4,3.7,K.wood),e.forRoom(0),Uf(e,`left`,.4,.4,1.3,1.8,2.9,1,K.wood),Uf(e,`right`,1.6,.4,1.3,1.8,2.9,1,K.wood),e.forRoom(-1),e.box(.85,1.4,1.15,1.15,1.42,3.2,K.teal);for(let t=0;t<3;t++)e.box(.8,1.9+t*.03,.9-t*.3,1.2,1.93+t*.03,1.15-t*.3,K.wood);e.hipRoof(.2,.1,1.8,1.7,3.7,6.6,K.thatch)}function ep(e){e.polygon([[.18,.18,.41000000000000003],[2.82,.18,.41000000000000003],[2.82,2.82,.41000000000000003],[.18,2.82,.41000000000000003]],K.grass),e.box(.08,.08,Y,2.92,.18,1.9,K.stucco,K.coping),e.box(.08,.08,Y,.18,2.92,1.9,K.stucco,K.coping),e.box(2.82,.08,Y,2.92,2.92,1.9,K.stucco,K.coping),e.box(.08,2.82,Y,1.2,2.92,1.9,K.stucco,K.coping),e.box(1.8,2.82,Y,2.92,2.92,1.9,K.stucco,K.coping),e.box(1.2,2.86,Y,1.8,2.9,1.7,K.wood),e.box(.3,.3,Y,1.9,1.5,3.8,K.stucco),e.forRoom(0),Uf(e,`front`,1.5,.3,1.9,1.2,3,2),Uf(e,`right`,1.9,.3,1.5,1.2,3,1),e.forRoom(-1),e.hipRoof(.15,.15,2.05,1.7,3.8,6.8,K.thatch),e.box(1.95,.3,Y,2.75,1.6,.55,K.wood),e.box(.35,1.8,Y,2.6,2.6,.6000000000000001,K.coping),e.polygon([[.5,1.95,.61],[2.45,1.95,.61],[2.45,2.45,.61],[.5,2.45,.61]],K.pool)}function tp(e,t,n){let r=Dd(`restaurant`,n),[i,a]=r.size,o=sd(a),s=a-(r.terrace?id.depth:0),c=.55;e.box(.12,.12,0,i-.12,a-.12,c,K.wood),e.box(.25,.2,Y,i-.25,o,2.8,K.stucco),Uf(e,`front`,o,.3,i-.3,1.2,2.3,Math.max(1,Math.round(i-.5)),K.wood),e.box(i/2-.17,.18,c,i/2+.17,.2,2.6500000000000004,K.wood);let l=Math.max(2,Math.round((i-.4)/1.3));for(let t=0;t<=l;t++){let n=.2+t*(i-.4)/l;for(let t of[.2,s-.2])e.post(n,t,Y,3.6,K.wood,.05)}let u=r.dining===`fine`,d=r.dining===`casual`?K.teal:u?K.wood:K.coral;for(let{x:t,y:r}of wd({type:`restaurant`,orient:0,design:n})){e.box(t-.09,r-.09,1.25,t+.09,r+.09,1.31,K.coping),u&&e.post(t,r,1.31,1.4100000000000001,K.torch,.006),e.post(t,r,c,1.25,K.wood,.02);for(let n of[-1,1]){let i=t+n*Uu;e.box(i-.045,r-.045,.97,i+.045,r+.045,1.02,d);for(let t of[-.035,.035])e.post(i,r+t,c,.97,K.wood,.008);let a=i+n*.045;e.box(Math.min(a,a+n*.015),r-.045,1.02,Math.max(a,a+n*.015),r+.045,1.5,K.wood)}}if(r.terrace){e.box(.12,a-.16,c,i-.12,a-.12,1.4500000000000002,K.wood);for(let t of[.12,i-.16])e.box(t,s,c,t+.04,a-.12,1.4500000000000002,K.wood)}let f=Math.min(i,s);e.hipRoof(.02,.02,i-.02,s-.02,3.6,Math.min(10,3.6+1.9*f),K.thatch)}function np(e){e.box(.2,.42,Y,1.8,.7,1.5,K.wood,K.coping),e.box(.25,.08,Y,1.75,.22,2.3,K.wood);for(let t of[.12,1.88])for(let n of[.12,.88])e.post(t,n,Y,3.3,K.wood,.04);for(let t of Xu.poolBar.seats)rp(e,t.x,t.y,K.teal);e.hipRoof(0,0,2,1,3.3,5,K.thatch)}function rp(e,t,n,r){e.post(t,n,Y,1.1,K.rock,.012),e.disc(t,n,.045,1.15,r,6)}function ip(e){e.box(.15,.1,Y,1.75,.55,3,K.wood),e.box(.4,.55,1.35,1.5,.57,2.2,K.window),e.box(.3,.55,1.4,1.6,.7,1.46,K.wood),e.polygon([[.3,.57,2.5],[1.6,.57,2.5],[1.6,.8,2.25],[.3,.8,2.25]],K.coral),e.polygon([[.05,0,3.3],[1.85,0,3.3],[1.85,.68,3],[.05,.68,3]],K.teal);for(let t of Xu.beachShack.seats)rp(e,t.x,t.y,K.coral);e.polygon([[1.78,.15,Y],[1.9,.15,Y],[1.9,.3,2.6],[1.78,.3,2.6]],K.yellow)}function ap(e){e.box(.25,.3,.35,.75,.7,1.25,K.coral,K.coping),e.post(.32,.36,0,.35,K.rock,.05),e.post(.68,.64,0,.35,K.rock,.05),e.post(.5,.5,1.25,2.6,K.stucco,.02),e.cone(.5,.5,.48,2.35,2.95,[K.yellow,K.coping],8)}function op(e){e.box(.15,.15,Y,1.85,1.75,3.6,K.sandstone),e.box(.12,.12,3.6,1.88,1.78,3.85,K.rock),e.box(1.3,.3,3.85,1.6,.6,5.6,K.rock),e.box(.35,.5,3.85,.65,.8,4.3,K.stucco),Wf(e,.6,1.75,K.wood),Uf(e,`front`,1.75,1,1.8,1.6,2.6,1,K.rock),Uf(e,`left`,.15,.3,1.6,1.6,2.6,2,K.rock),e.box(1.2,1.82,0,1.7,2,.9,K.teal)}function sp(e){e.box(.15,.15,Y,1.85,1.5,3.4,K.stucco),Wf(e,.5,1.5,K.wood),Uf(e,`front`,1.5,.85,1.8,1.5,2.5,2,K.rock),Uf(e,`left`,.15,.2,1.4,1.5,2.5,1,K.rock),e.gableRoof(.08,.08,1.92,1.58,3.4,4.8,K.teal,K.stucco),e.post(.2,1.8,0,1.9,K.wood,.025),e.post(1.8,1.8,0,1.9,K.wood,.025);for(let[t,n]of[[.45,K.coping],[.85,K.coral],[1.25,K.coping],[1.6,K.yellow]])e.box(t-.13,1.79,1.1,t+.13,1.81,1.85,n)}function cp(e){e.box(.1,.1,0,1.6,.85,2.7,K.wood),e.box(.4,.85,0,.9,.87,2.1,K.window),e.gableRoof(.02,.02,1.68,.93,2.7,3.5,K.rock,K.wood),e.tube(1.82,.5,.12,0,.9,K.coral,6),e.disc(1.82,.5,.12,.9,K.coral,6),e.polygon([[1.65,.15,0],[1.72,.15,0],[1.72,.15,2.4],[1.65,.15,2.4]],K.stucco)}function lp(e,t,n){let r=Dd(`spa`,n),[i,a]=r.size,o=a-.7,s=i/2;e.box(.25,.2,Y,i-.25,o,3.2,K.stucco),Uf(e,`front`,o,.3,s-.25,1.2,2.6,Math.max(1,Math.round(s-.8)),K.wood),Uf(e,`front`,o,s+.25,i-.3,1.2,2.6,Math.max(1,Math.round(s-.8)),K.wood),Wf(e,s,o,K.wood,.3,2.2),e.box(.05,0,3.2,i-.05,o+.2,3.5,K.wood,K.thatch);for(let t=.2;t<i-.1;t+=.32)Math.abs(t-s)>.2&&e.post(t,o+.12,Y,2.2,K.wood,.03);for(let[t,n]of[[.35,s-.2],[s+.2,i-.35]])e.box(t,o+.25,Y,n,o+.65,.6000000000000001,K.rock),e.polygon([[t+.08,o+.32,.61],[n-.08,o+.32,.61],[n-.08,o+.6,.61],[t+.08,o+.6,.61]],K.pool);r.features.includes(`hydro`)&&i>=3&&(e.box(i-1.25,.3,3.5,i-.15,o-.1,3.75,K.rock),e.polygon([[i-1.15,.4,3.76],[i-.25,.4,3.76],[i-.25,o-.2,3.76],[i-1.15,o-.2,3.76]],K.pool))}function up(e){e.box(.15,.2,Y,1.4,1.5,3,K.yellow),Wf(e,.5,1.5,K.teal,.28,2),Uf(e,`front`,1.5,.8,1.4,1.3,2.4,1,K.teal),e.gableRoof(.05,.1,1.5,1.6,3,4.6,K.magenta,K.yellow),e.box(1.45,.25,0,1.85,.65,2.1,K.wood),e.polygon([[1.5,.65,2.1],[1.8,.65,2.1],[1.8,1.9,.15],[1.5,1.9,.15]],K.teal),e.polygon([[1.5,.6,2.25],[1.5,1.9,.3],[1.5,1.9,.15],[1.5,.65,2.1]],K.coral)}function dp(e){e.box(.15,.2,0,1.15,.8,2.5,K.wood),e.box(.35,.8,0,.75,.82,1.9,K.window),e.hipRoof(.02,.08,1.28,.92,2.5,4,K.thatch),e.post(1.3,.2,0,1.3,K.wood,.03),e.post(1.9,.2,0,1.3,K.wood,.03);for(let[t,n]of[[.35,K.coral],[.6,K.yellow],[.85,K.teal]])e.polygon([[1.22,t-.07,.25],[1.98,t-.07,1.2],[1.98,t+.07,1.2],[1.22,t+.07,.25]],n)}function fp(e){e.flags=Hl.outlined;for(let[t,n]of[[.22,.22],[.78,.22],[.22,.78],[.78,.78]])e.post(t,n,0,3,K.wood,.035);e.box(.15,.15,3,.85,.85,3.25,K.wood),e.box(.35,.3,3.25,.65,.55,4,K.coral),e.polygon([[.4,.85,0],[.6,.85,0],[.6,.7,3],[.4,.7,3]],K.wood),e.post(.5,.25,3.25,5,K.stucco,.02),e.hipRoof(.1,0,.9,.6,4.8,5.4,K.coral),e.flags=0}function pp(e){e.box(.1,.12,Y,.9,.85,2.9,K.stucco),e.box(.07,.09,2.9,.93,.88,3.15,K.teal),Wf(e,.5,.85,K.teal,.3,2),e.box(.36,.86,2.4,.64,.88,2.75,K.coral)}function mp(e){let t=3.7;e.box(.15,.2,Y,2,1.7,t,K.stucco);for(let[t,n]of[[.24,.66],[.72,1.28],[1.72,1.94]])e.box(t,1.7,.65,n,1.72,3.35,K.window);e.box(1.34,1.7,Y,1.66,1.73,2.8,K.teal),e.box(1.38,1.73,.5,1.62,1.74,2.6999999999999997,K.window);for(let[t,n]of[[.3,.9],[.96,1.6]])e.box(.13,t,.65,.15,n,3.35,K.window);e.box(2,.12,.36000000000000004,2.92,1.88,.42000000000000004,K.wood),Xu.gym.seats.forEach((t,n)=>e.box(t.x-.07,t.y-.15,.42000000000000004,t.x+.07,t.y+.15,.43500000000000005,[K.teal,K.coral,K.yellow][n%3]));for(let t of[.16,1.84])e.post(2.88,t,Y,3.6,K.wood,.04);e.box(2.84,.12,3.5,2.92,1.88,3.6,K.wood);for(let t=0;t<6;t++)e.box(2,.2+t*.3,3.6,2.95,.23+t*.3,3.66,K.wood);e.box(.05,.08,t,2.06,1.92,4,K.teal,K.coping)}var hp=.06;function gp(e,t,n,r,i){let a=.016,[o,s]=t===r?[t-a,t+a]:[t,r],[c,l]=n===i?[n-a,n+a]:[n,i];e.polygon([[o,c,.06999999999999999],[s,c,.06999999999999999],[s,l,.06999999999999999],[o,l,.06999999999999999]],K.coping)}function _p(e,t,n){let r=Nf[t],i=Zc.metersPerTile,a=e.w/2,o=e.d/2,s=r.length/i/2,c=r.width/i/2,l=r.singles/i/2,u=r.service/i,d=t===`tennis`,f=(t,n,r,i,a,o)=>e.polygon([[t,n,a],[r,n,a],[r,i,a],[t,i,a]],o);n&&(e.flags=Hl.daylit),e.box(.02,.02,-1,e.w-.02,e.d-.02,hp,K.rock,d?K.clay:K.courtDark),d||(f(a-s,o-c,a+s,o+c,.064,K.courtGreen),f(a-u,o-c,a+u,o+c,.066,K.teal));for(let t of[-1,1])gp(e,a+t*s,o-c,a+t*s,o+c),gp(e,a-s,o+t*c,a+s,o+t*c),d?(gp(e,a-s,o+t*l,a+s,o+t*l),gp(e,a+t*u,o-l,a+t*u,o+l),gp(e,a+t*s,o,a+t*(s-.03),o)):(gp(e,a+t*u,o-c,a+t*u,o+c),gp(e,a+t*u,o,a+t*s,o));d&&gp(e,a-u,o,a+u,o);let p=c+(d?.914:.3)/i,[m,h]=[hp+r.net,hp+r.posts];e.polygon([[a,o-p,hp],[a,o,hp],[a,o,m],[a,o-p,h]],K.outline),e.polygon([[a,o,hp],[a,o+p,hp],[a,o+p,h],[a,o,m]],K.outline),e.polygon([[a,o-p,h],[a,o,m],[a,o,m+.06],[a,o-p,h+.06]],K.coping),e.polygon([[a,o,m],[a,o+p,h],[a,o+p,h+.06],[a,o,m+.06]],K.coping);for(let t of[-1,1])e.post(a,o+t*p,hp,h+.05,K.rock,.012);e.flags=0,e.flags=Hl.outlined;let g=.04;for(let t=0;t<=e.w;t++)for(let n of[g,e.d-g])n>o&&Math.abs(t-a)<.4||e.post(Math.min(e.w-g,Math.max(g,t)),n,hp,3,K.rock,.012);for(let t=1;t<e.d;t++)for(let n of[g,e.w-g])e.post(n,t,hp,3,K.rock,.012);e.flags=0;for(let t of[g,e.d-g])e.box(g,t-.008,2.96,e.w-g,t+.008,3,K.rock);for(let t of[g,e.w-g])e.box(t-.008,g,2.96,t+.008,e.d-g,3,K.rock);for(let t of[g,e.w-g])e.box(t-.01,.06,hp,t+.01,e.d-g-.02,1.8,K.courtDark);for(let t of[-1,1])e.post(a+t*.25,e.d-g,hp,2.3,K.rock,.018);if(e.box(a-.25,e.d-g-.01,2.2,a+.25,e.d-g+.01,2.3,K.rock),!n)return;let _=d?9:7;for(let t of[-1,1])for(let n of[-1,1]){let r=a+t*Math.min(s*.7,a-.25),i=o+n*(o-.12);e.post(r,i,hp,_,K.coping,.018),e.box(r-.16,i-.025,_-.05,r+.16,i+.025,_+.02,K.rock);for(let t of[-.1,0,.1])e.box(r+t-.04,i-n*.07,_-.2,r+t+.04,i-n*.025,_-.05,K.window)}}var vp={height:6.2,lean:.22};function yp(e,t){let n=t*Math.PI*2,r=Math.cos(n)*vp.lean,i=Math.sin(n)*vp.lean,a=vp.height,o=e=>[.5+r*e*e,.5+i*e*e,a*e];for(let t=0;t<9;t++){let n=o(t/9),r=o((t+1)/9),i=.055-t/9*.02,a=.055-(t+1)/9*.02;for(let o=0;o<6;o++){let s=o/6*Math.PI*2,c=(o+1)/6*Math.PI*2,l=(e,t,n)=>[e[0]+Math.cos(n)*t,e[1]+Math.sin(n)*t,e[2]];e.polygon([l(n,i,s),l(n,i,c),l(r,a,c),l(r,a,s)],t%2?K.wood:K.thatch)}}let s=o(1);e.extra=[0,t*40];for(let n=0;n<9;n++){let r=n/9*Math.PI*2+t*3,i=Math.cos(r),a=Math.sin(r),o=.52+Hf(n,Math.floor(t*1e3))*.14,c;for(let t=0;t<=6;t++){let n=t/6,r=[s[0]+i*o*n,s[1]+a*o*n,s[2]+.6*n-2.2*n*n],l=.11*Math.sin(Math.PI*Math.min(1,n*1.1+.06)),u=[r[0]-a*l,r[1]+i*l,r[2]-l*2],d=[r[0]+a*l,r[1]-i*l,r[2]-l*2];if(c){let t=e=>Math.min(1,Math.hypot(e[0]-s[0],e[1]-s[1])*2);e.polygon([c[0],u,r,c[2]],K.foliage,t),e.polygon([c[2],r,d,c[1]],K.foliage,t)}c=[u,d,r]}}e.extra=[0,0]}function bp(e,t){e.post(.5,.5,0,2.6,K.wood,.07);let n=(t-.5)*.12;e.dome(.5+n,.5,.62,1.9,5.2,K.foliage,9),e.dome(.28-n,.62,.3,2.4,4.1,K.foliage,6)}function xp(e,t){e.box(.08,.08,0,.92,.92,.35,K.coping,K.soil);let n=[K.coral,K.yellow,K.magenta,K.coping];for(let r=0;r<9;r++){let i=.22+r%3*.28+(Hf(r,Math.floor(t*997))-.5)*.1,a=.22+Math.floor(r/3)*.28+(Hf(r+9,Math.floor(t*997))-.5)*.1;e.box(i-.08,a-.08,.35,i+.08,a+.08,.6,K.foliage),e.box(i-.045,a-.045,.6,i+.045,a+.045,.72,n[(r+Math.floor(t*4))%n.length])}}function Sp(e,t,n,r,i){let a=[[-r,-r],[r,-r],[r,r],[-r,r]];for(let r=0;r<4;r++){let[o,s]=a[r],[c,l]=a[(r+1)%4];e.polygon([[t[0]+o,t[1]+s,t[2]],[t[0]+c,t[1]+l,t[2]],[n[0]+c,n[1]+l,n[2]],[n[0]+o,n[1]+s,n[2]]],i)}}function Cp(e,t,n,r,i,a,o,s,c,l,u=!1){let d=e=>Math.min(1,Math.hypot(e[0]-t[0],e[1]-t[1])*2),f;for(let p=0;p<=c;p++){let m=p/c,h=[t[0]+n*i*m,t[1]+r*i*m,t[2]+a*m-o*m*m],g=s*Math.sin(Math.PI*Math.min(1,m*1.1+.06)),_=[h[0]-r*g,h[1]+n*g,h[2]-g*2],v=[h[0]+r*g,h[1]-n*g,h[2]-g*2];f&&u?(e.polygon([f[2],h,_],l,d),e.polygon([f[2],v,h],l,d)):f&&(e.polygon([f[0],_,h,f[2]],l,d),e.polygon([f[2],h,v,f[1]],l,d)),f=[_,v,h]}}function wp(e,t){let n=[.5,.5,1.5];e.post(.5,.5,0,n[2],K.wood,.035);let r=t<.35;for(let i=0;i<7;i++){let a=i/7*Math.PI*2+t*6,o=.2+Hf(i,Math.floor(t*997))*.09,s=2.9+Hf(i+7,Math.floor(t*997))*.7,c=[.5+Math.cos(a)*o,.5+Math.sin(a)*o,s];Sp(e,n,c,.022,K.wood),e.dome(c[0],c[1],.13,s-.3,s+.45,K.foliage,6),e.box(c[0]-.05,c[1]-.05,s+.2,c[0]+.05,c[1]+.05,s+.55,r?K.coral:K.coping),r||e.box(c[0]-.02,c[1]-.02,s+.55,c[0]+.02,c[1]+.02,s+.6,K.yellow)}}function Tp(e,t){e.extra=[0,t*40],[[.5,.5,3.1],[.34,.62,2],[.64,.36,1.5]].forEach(([n,r,i],a)=>{e.post(n,r,0,i,K.foliage,a?.028:.04);let o=a?4:7;for(let s=0;s<o;s++){let c=s/o*Math.PI*2+t*5+a,l=(a?.3:.46)+Hf(s,Math.floor(t*991)+a)*.08;Cp(e,[n,r,i-.15],Math.cos(c),Math.sin(c),l,a?1:1.6,a?1.6:2.4,a?.11:.16,5,K.foliage)}}),e.extra=[0,0],e.box(.55,.46,1.9,.62,.54,2.5,K.yellow,K.foliage),e.box(.57,.48,1.5,.6,.52,1.9,K.magenta)}function Ep(e,t){for(let n=0;n<9;n++){let r=n/9*Math.PI*2+t*4,i=.07+Hf(n,Math.floor(t*983))*.05,a=1+Hf(n+3,Math.floor(t*983))*.4,o=[.5+Math.cos(r)*.04,.5+Math.sin(r)*.04,0],s=[.5+Math.cos(r)*i,.5+Math.sin(r)*i,a*.45],c=[.5+Math.cos(r)*(i+.09),.5+Math.sin(r)*(i+.09),a];Sp(e,o,s,.008,K.foliage);let l=-Math.sin(r)*.035,u=Math.cos(r)*.035;e.polygon([s,[(s[0]+c[0])/2+l,(s[1]+c[1])/2+u,(s[2]+c[2])/2],c,[(s[0]+c[0])/2-l,(s[1]+c[1])/2-u,(s[2]+c[2])/2]],K.foliage)}for(let n=0;n<4;n++){let r=n/4*Math.PI*2+t*9+.4,i=.5+Math.cos(r)*.1,a=.5+Math.sin(r)*.1,o=1.25+Hf(n+11,Math.floor(t*983))*.3,s=Math.cos(r)*.07,c=Math.sin(r)*.07;e.box(Math.min(i,i+s)-.01,Math.min(a,a+c)-.01,o-.08,Math.max(i,i+s)+.01,Math.max(a,a+c)+.01,o,K.teal),e.box(i-.025,a-.025,o,i+.025,a+.025,o+.32,K.yellow,K.coral),e.box(i+s*.5-.012,a+c*.5-.012,o,i+s*.5+.012,a+c*.5+.012,o+.2,K.teal)}}function Dp(e,t){let n=3.1;e.tube(.5,.5,.05,0,n,K.soil,6),e.tube(.5,.5,.06,0,.5,K.soil,6),e.extra=[0,t*40];for(let r=0;r<10;r++){let i=r/10*Math.PI*2+t*7,a=.42+Hf(r,Math.floor(t*977))*.1;Cp(e,[.5,.5,n],Math.cos(i),Math.sin(i),a,.8,2.1,.09,7,K.foliage,!0)}e.extra=[0,0];for(let r=0;r<3;r++){let i=r/3*Math.PI*2+t,a=.5+Math.cos(i)*.03,o=.5+Math.sin(i)*.03;e.box(a-.015,o-.015,n,a+.015,o+.015,3.5500000000000003,K.thatch)}}function Op(e,t){let n=Math.floor(t*971);for(let n=0;n<4;n++){let r=n/4*Math.PI*2+t*3;Sp(e,[.5,.5,0],[.5+Math.cos(r)*.18,.5+Math.sin(r)*.18,1.2],.018,K.wood)}for(let[t,r,i,a]of[[.5,.5,.36,2.8],[.3,.62,.24,2],[.68,.34,.24,2.2],[.62,.7,.2,1.7],[.32,.32,.2,1.8]])e.dome(t+(Hf(Math.round(t*10),n)-.5)*.06,r,i,.6,a,K.foliage,7);for(let t=0;t<6;t++){let r=Hf(t,n+1)*Math.PI*2,i=.18+Hf(t,n+2)*.18,a=.5+Math.cos(r)*i,o=.5+Math.sin(r)*i,s=1+Hf(t,n+3)*1.1;e.box(a-.03,o-.03,s,a+.03,o+.03,s+.18,t<3?K.coral:K.magenta)}}var kp={trunk:9.2,crownshaft:1.6};function Ap(e,t){for(let t=0;t<8;t++){let n=kp.trunk*t/8,r=kp.trunk*(t+1)/8,i=e=>.055+.012*Math.sin(e*Math.PI*2)*(1-e)+(e<.12?(.12-e)*.25:0),a=i(t/8),o=i((t+1)/8);for(let t=0;t<6;t++){let i=t/6*Math.PI*2,s=(t+1)/6*Math.PI*2;e.polygon([[.5+Math.cos(i)*a,.5+Math.sin(i)*a,n],[.5+Math.cos(s)*a,.5+Math.sin(s)*a,n],[.5+Math.cos(s)*o,.5+Math.sin(s)*o,r],[.5+Math.cos(i)*o,.5+Math.sin(i)*o,r]],K.coping)}}let n=kp.trunk+kp.crownshaft;e.tube(.5,.5,.05,kp.trunk,n,K.foliage,6),e.extra=[0,t*40];for(let r=0;r<12;r++){let i=r/12*Math.PI*2+t*3,a=.55+Hf(r,Math.floor(t*967))*.12;Cp(e,[.5,.5,n],Math.cos(i),Math.sin(i),a,1.1,2.6,.08,6,K.foliage)}e.extra=[0,0]}var jp=.06,Mp=Df.hedge,Np=.18,Pp=.035,Fp=.05,Ip=Fp*Math.tan(Math.PI/6)/Xc;function Lp(e,t,n,r=Mp,i){let a=t&10,o=t&5,s=a!==0||o===0,c=o!==0,l=.21999999999999997,u=.78,d=(e,t)=>e?0:t?l:jp,f=(e,t)=>e?1:t?u:.94,p=[];s&&p.push([[d(t&8,c),l,f(t&2,c),u],a]),c&&p.push([[l,d(t&1,s),u,f(t&4,s)],o]);for(let[t,a]of p)zp(e,t,a,n,r),i!==void 0&&Rp(e,t,r,i)}function Rp(e,[t,n,r,i],a,o){let s=Math.floor(o*953);for(let o=0;o<26;o++){let c=Hf(o,s),l=Hf(o+31,s),u=.48+Hf(o+57,s)*(a-Np-.3),d=o%5,f=d===1?r:d===3?t:t+(r-t)*c,p=d===0?n:d===2?i:n+(i-n)*l,m=d===4?a:u;e.box(f-.025,p-.025,m-.12,f+.025,p+.025,m+.06,K.magenta)}}function zp(e,t,n,r,i){let a=([e,t,r,i],a)=>[e+(n&8?0:a),t+(n&1?0:a),r-(n&2?0:a),i-(n&4?0:a)],o=([e,t,n,r],i)=>[[e,t,i],[n,t,i],[n,r,i],[e,r,i]],[s,c,l,u]=a(t,-.03);e.box(s,c,r,l,u,Np,K.soil);let d=a(t,Pp),f=o(t,Np),p=o(d,i-Ip),m=o(a(d,Fp),i);for(let t=0;t<4;t++){let r=(t+1)%4;n&1<<t?e.polygon([f[t],f[r],p[r],m[r],m[t],p[t]],K.hedge):(e.polygon([f[t],f[r],p[r],p[t]],K.hedge),e.polygon([p[t],p[r],m[r],m[t]],K.hedge))}e.polygon(m,K.hedge)}function Bp(e){e.flags=Hl.outlined,e.box(.47,.47,0,.53,.53,2.7,K.thatch),e.box(.44,.44,2.7,.56,.56,3.05,K.wood),e.polygon([[.45,.5,3.05],[.55,.5,3.05],[.5,.5,3.75]],K.torch),e.polygon([[.5,.45,3.05],[.5,.55,3.05],[.5,.5,3.75]],K.torch),e.flags=0}function Vp(e){e.tube(1,1,.92,0,.7,K.coping,8),e.disc(1,1,.84,.55,K.pool,8),e.tube(1,1,.12,.55,2.2,K.stucco,6),e.tube(1,1,.38,1.95,2.2,K.coping,8),e.disc(1,1,.38,2.2,K.pool,8),e.cone(1,1,.1,2.2,2.8,[K.pool],6)}function Hp(e){for(let t of[.35,.65])e.box(t-.02,.47,0,t+.02,.58,.4,K.rock);e.box(.32,.47,.4,.68,.58,.45,K.wood),e.box(.32,.45,.45,.68,.47,.9,K.wood)}function Up(e,t){let n=t<.5?K.coral:K.teal,r=Ku.width/2,i=Ku.head+.13;for(let t of Ku.xs){e.box(t-r,Ku.head,.05,t+r,Ku.foot,.4,K.wood,n),e.polygon([[t-r,i,.4],[t+r,i,.4],[t+r,Ku.head,.95],[t-r,Ku.head,.95]],n),e.polygon([[t-r,Ku.head,.4],[t-r,Ku.head,.95],[t+r,Ku.head,.95],[t+r,Ku.head,.4]],K.wood);for(let n of[t-r,t+r])e.polygon([[n,i,.4],[n,Ku.head,.4],[n,Ku.head,.95]],K.wood)}e.post(.5,Ku.head+.08,0,.42,K.wood,.01),e.disc(.5,Ku.head+.08,.05,.42,K.wood,6)}function Wp(e){e.flags=Hl.outlined,e.post(.5,.5,0,2.6,K.stucco,.012),e.cone(.5,.5,.31,2.2,2.75,[K.coral,K.coping],8),e.flags=0}function Gp(e,t,n){let r=Bd(t,n),i=r.length,a=r.top-mu.tower;e.flags=Hl.outlined;for(let[t,n]of[[.18,.18],[.82,.18],[.18,.82],[.82,.82]])e.post(t,n,a-.5,r.top+2.2,K.wood,.04);e.box(.12,.12,r.top-.18,.88,.88,r.top,K.wood);for(let[t,n]of[[.15,.15],[.85,.15],[.15,.85]])e.post(t,n,r.top,r.top+1,K.stucco,.02);e.box(.12,.12,r.top+.95,.88,.16,r.top+1.02,K.stucco),e.polygon([[.86,.85,a],[.98,.85,a],[.98,.2,r.top],[.86,.2,r.top]],K.wood),e.cone(.5,.5,.55,r.top+2,r.top+2.8,[K.coral,K.coping],8),e.flags=0;let o=.8,s=i+.15,c=Vd(t,n).points,l=e=>Hd(c,Math.max(0,Math.min(r.run,e-.5))),u=Math.max(2,i*2);for(let t=0;t<u;t++){let n=o+(s-o)*t/u,r=o+(s-o)*(t+1)/u,i=l(n),a=l(r),c=.55;e.polygon([[.33,n,i],[.67,n,i],[.67,r,a],[.33,r,a]],K.teal),e.polygon([[.3,n,i-.1],[.3,r,a-.1],[.3,r,a+c],[.3,n,i+c]],K.yellow),e.polygon([[.7,n,i-.1],[.7,n,i+c],[.7,r,a+c],[.7,r,a-.1]],K.yellow),e.polygon([[.3,n,i-.1],[.7,n,i-.1],[.7,r,a-.1],[.3,r,a-.1]],K.yellow)}for(let r=1;r<i;r++){let o=r+.5,s=n.x+(n.orient&1?n.orient===1?i-1-r:r:0),c=n.y+(n.orient&1?0:n.orient===0?r:i-1-r),u=t.inBounds(s,c)?t.heightAt(s+.5,c+.5):a;e.post(.5,o,u,l(o)-.1,K.wood,.03)}e.disc(.5,i+.3,.22,r.bottom-.26,K.foam,8)}function Kp(e,t,n){e.box(.06,.08,n,.94,.7,t*.6,K.rock,K.rock),e.box(.12,.12,t*.6,.88,.62,t*.88,K.sandstone,K.rock),e.box(.22,.18,t*.88,.78,.58,t,K.rock,K.foliage),e.box(.02,.6,n,.24,.98,t*.45,K.basalt,K.rock),e.box(.76,.58,n,.98,.98,t*.4,K.rock,K.foliage),e.box(.24,.7,n,.76,.84,t*.75,K.basalt,K.rock),e.box(.26,.56,t*.75,.74,.86,t*.78,K.foam),e.polygon([[.26,.86,t*.78],[.74,.86,t*.78],[.76,1.02,n],[.24,1.02,n]],K.foam),e.polygon([[.3,.9,t*.74],[.7,.9,t*.74],[.72,1.06,n],[.28,1.06,n]],K.foam),e.disc(.5,1.2,.3,n+.02,K.foam,8)}function qp(e){e.box(.15,.62,0,1.85,.95,1.1,K.wood,K.coping),e.box(.25,.08,0,1.75,.3,1.7,K.wood);for(let t of[.4,.8,1.2,1.6])e.box(t-.06,.12,1.2,t+.06,.24,1.5,t===.8?K.coral:K.yellow);for(let t of[.1,1.9])for(let n of[.1,.9])e.post(t,n,0,2.9,K.wood,.04);e.hipRoof(-.05,-.05,2.05,1.1,2.9,4.4,K.thatch);for(let t of[.28,.72,1.28,1.72])e.post(t,1.25,-pu.drop-.6,-.12,K.coping,.03),e.disc(t,1.25,.08,-.1,K.teal,6)}function Jp(e){e.flags=Hl.outlined;for(let[t,n]of[[.1,.1],[.9,.1],[.1,.9],[.9,.9]])e.post(t,n,0,2.7,K.wood,.03);e.box(.05,.05,2.7,.95,.95,2.85,K.coping),e.box(.05,.05,2.45,.95,.07,2.7,K.coral),e.box(.05,.93,2.45,.95,.95,2.7,K.coral),e.flags=0,e.box(.12,.12,Y,.14,.9,2.45,K.coping),e.box(.86,.12,Y,.88,.9,2.45,K.coping),e.box(.2,.2,Y,.8,.85,.8500000000000001,K.wood,K.coping),e.box(.25,.22,.8500000000000001,.75,.34,1.05,K.teal)}var Yp={lobby:Gf,valet:Xf,roomBlock:Zf,oceanBlock:Qf,bungalow:$f,villa:ep,restaurant:tp,poolBar:np,beachShack:ip,coffeeKiosk:ap,kitchen:op,housekeeping:sp,maintenance:cp,spa:lp,kidsClub:up,beachHut:dp,lifeguard:fp,restrooms:pp,parkingLot:qf,gatehouse:Jf,entrySign:Yf,palm:yp,shadeTree:bp,flowerBed:xp,torch:Bp,fountain:Vp,bench:Hp,lounger:Up,umbrella:Wp,swimUpBar:qp,cabana:Jp,gym:mp,tennisCourt:e=>_p(e,`tennis`,!1),tennisCourtLit:e=>_p(e,`tennis`,!0),pickleballCourt:e=>_p(e,`pickleball`,!1),pickleballCourtLit:e=>_p(e,`pickleball`,!0),frangipani:wp,banana:Tp,birdOfParadise:Ep,treeFern:Dp,seaGrape:Op,royalPalm:Ap};function Xp(e){return Yp[e]}function Zp(e,t){switch(e){case`palm`:{let e=t*Math.PI*2;return[.5+Math.cos(e)*vp.lean,.5+Math.sin(e)*vp.lean,vp.height+.5]}case`royalPalm`:return[.5,.5,kp.trunk+kp.crownshaft+.9];case`shadeTree`:return[.5+(t-.5)*.12,.5,5.2];case`frangipani`:{let e=t*6,n=.2+Hf(0,Math.floor(t*997))*.09;return[.5+Math.cos(e)*n,.5+Math.sin(e)*n,2.9+Hf(7,Math.floor(t*997))*.7+.6]}case`treeFern`:return[.5,.5,3.3];case`banana`:return[.5,.5,2.9];case`seaGrape`:return[.5,.5,2.85];default:return}}function Qp(e,t){let n=Zp(e.type,Hf(e.x,e.y));if(!n)return;let[r,i]=[[n[0],n[1]],[1-n[1],n[0]],[1-n[0],1-n[1]],[n[1],1-n[0]]][e.orient&3];return[e.x+r,e.y+i,t.heightAt(e.x+.5,e.y+.5)+n[2]]}var $p=[`hedge`,`bougainvillea`];function em(e,t){return new Set(e.filter(e=>$p.includes(e.type)).map(e=>e.y*t+e.x))}function tm(e,t,n){let r=0;bd.forEach(({dx:i,dy:a},o)=>{let s=e.x+i,c=e.y+a;n.inBounds(s,c)&&t.has(c*n.size+s)&&(r|=1<<o)});let i=e.orient&3;return(r>>i|r<<4-i)&15}var nm=3.4,rm=1.15;function im(e,t,n,r,i,a=-1){let o=ou[t.type],[s,c]=Pd(t),[l,u]=Nd(t),d=Hf(t.x,t.y);if(o.category===`scenery`){let r=n.heightAt(t.x+s/2,t.y+c/2),a=new Vf(e,t.x,t.y,r,t.orient,l,u),o=n.minCorner(t.x,t.y)-r;return t.type===`hedge`?Lp(a,tm(t,i,n),o):t.type===`bougainvillea`?Lp(a,tm(t,i,n),o,Df.bougainvillea,d):Xp(t.type)(a,d),t.type===`torch`?new nn(t.x+.5,(r+nm)*Xc,t.y+.5,rm):void 0}if(t.type===`slide`){Gp(new Vf(e,t.x,t.y,0,t.orient,l,u),n,t);return}let f=1/0,p=-1/0;for(let e=t.y;e<t.y+c;e++)for(let r=t.x;r<t.x+s;r++)f=Math.min(f,n.minCorner(r,e)),p=Math.max(p,n.maxCorner(r,e));let m=new Vf(e,t.x,t.y,p,t.orient,l,u);if(m.roomBase=a,t.type===`waterfall`){let[e,r]=Rd(t),i=(n.inBounds(e,r)?n.minCorner(e,r):f)-pu.drop-p;Kp(m,i+pu.drop+Ud(n,t),i);return}let h=t.design?.style??r;t.type===`lobby`&&t.design?.arrival===`court`?(m.remap=mf(h),m.box(1.08,.08,0,3.92,2.92,Y,K.rock,K.pathEdge),Kf(m,d),m.dx=1,Gf(m)):(t.type===`parkingLot`||t.type===`entrySign`||Mf[t.type]||m.box(.08,.08,f-p,l-.08,u-.08,Y,K.rock,K.pathEdge),t.type===`wing`?vf(m,Od(t.design),h):(m.remap=mf(h),Xp(t.type)(m,d,t.design)))}var am=3.25;function om(e,t){let n=t.size,r=new Float32Array(n*n).fill(NaN);for(let i of e){if(i.type===`slide`){let e=Bd(t,i);t.inBounds(e.tower[0],e.tower[1])&&(r[t.index(e.tower[0],e.tower[1])]=e.top);continue}let[e,a]=Pd(i),o=i.type===`lifeguard`?am:Xu[i.type]?.height,s=ou[i.type].category===`scenery`;if(s&&o===void 0)continue;let c=-1/0;if(s)c=t.heightAt(i.x+e/2,i.y+a/2);else for(let n=i.y;n<i.y+a;n++)for(let r=i.x;r<i.x+e;r++)c=Math.max(c,t.maxCorner(r,n));for(let t=i.y;t<i.y+a;t++)for(let a=i.x;a<i.x+e;a++)r[t*n+a]=c+(o??Y)}return r}function sm(e,t,n,r){let i=new Bf,a=[],o=new Map,s=em(e,t.size),c=0;for(let n of e){let e=Fd(n);e&&(o.set(n.id,c),c+=e);let l=im(i,n,t,r,s,e?o.get(n.id):-1);l&&a.push(l)}let l=new li(i.build(),n);return l.matrixAutoUpdate=!1,{mesh:l,torches:a,rooms:o}}var cm={lobby:`lobby`,valet:`road`,parkingLot:`roadEnds`,gatehouse:`road`,entrySign:`road`,roomBlock:`front`,oceanBlock:`front`,bungalow:`front`,villa:`front`,wing:`back`,restaurant:`front`,poolBar:`front`,beachShack:`frontOrSand`,coffeeKiosk:`anySide`,kitchen:`staffFront`,housekeeping:`staffFront`,maintenance:`staffFront`,spa:`front`,kidsClub:`front`,beachHut:`frontOrSand`,lifeguard:`staffNearby`,restrooms:`anySide`,bench:`nearby`,lounger:`nearby`,cabana:`nearby`,slide:`tower`,swimUpBar:`poolWater`,gym:`front`,tennisCourt:`gate`,tennisCourtLit:`gate`,pickleballCourt:`gate`,pickleballCourtLit:`gate`};function lm(e,t){return e===`lobby`&&t?.arrival===`court`?`court`:cm[e]}var um={front:`a guest path at its front door`,gate:`a guest path at its gate`,lobby:`a guest path at its front door, with a road beside it`,staffFront:`a service or guest path at its door`,back:`a guest path along its back or ends`,court:`a road at both ends of its drive, and a guest path behind it`,anySide:`a guest path on any side`,tower:`a path or deck beside its tower`,nearby:`a path within two steps, or sand guests can walk to`,staffNearby:`a path within two steps, or sand the lifeguard can walk to`,frontOrSand:`a path or the beach at its front`,poolWater:`shallow pool water at its front, and a path or deck behind it for the bartender`,road:`a road along its front`,roadEnds:`a road at either end`};function dm(e,t){let n=lm(e,t);return n&&um[n]}var fm={front:{met:`Door on the path`,missing:`Needs a path at the marked door`},gate:{met:`Gate on the path`,missing:`Needs a path at the marked gate`},lobby:{met:`Door on the path`,missing:`Needs a path at the marked door`},staffFront:{met:`Door on a path`,missing:`Needs a path at the marked door`},back:{met:`Way in on the path`,missing:`Needs a path at the marked back`},court:{met:`Drive meets the road`,missing:`Needs a road at the marked ends`},anySide:{met:`Beside the path`,missing:`Needs a path beside it`},tower:{met:`Tower on the path`,missing:`Needs a path at the marked tower`},nearby:{met:`A path in reach`,missing:`Needs a path within two steps, or the beach`},staffNearby:{met:`A path in reach`,missing:`Needs a path within two steps, or the beach`},frontOrSand:{met:`Front on the path or beach`,missing:`Needs a path or the beach at the marked front`},poolWater:{met:`Stools in the pool`,missing:`Needs a pool guests can get into`},road:{met:`By the road`,missing:`Needs a road at the marked side`},roadEnds:{met:`Joins the road`,missing:`Needs a road at a marked end`}},pm=`Bartender needs a path at the marked back`,mm=`Needs a path at the marked back`,hm=2;function gm(e,t,n,r){let i=e.path[n];if(i===q.bridge)return e.bridge[n]>0;if(!(md(i)||r&&i===q.service)||t[n])return!1;let a=n%e.size,o=(n-a)/e.size;return!e.isWater(a,o)&&e.steepness(a,o)<=Yc.maxPathRise+1e-9}function _m(e,t){let n=new Uint8Array(e.size*e.size);for(let r of t){let[t,i]=Pd(r);for(let a=r.y;a<r.y+i;a++)for(let i=r.x;i<r.x+t;i++)e.inBounds(i,a)&&(n[e.index(i,a)]=1)}return t=>{let r=t%e.size,i=(t-r)/e.size;return!n[t]&&!e.pool[t]&&!e.isWater(r,i)&&e.steepness(r,i)<=Yc.maxPathRise+1}}function vm(e){let t=e.terrain;return{terrain:t,walkable:n=>gm(t,e.occupancy,n,!1),staffWalkable:n=>gm(t,e.occupancy,n,!0),open:_m(t,e.objects)}}var ym=[[0,1],[-1,0],[0,-1],[1,0]],bm=e=>e.orient&3,xm=e=>e.orient+2&3,Sm=e=>e.orient+1&3,Cm=e=>e.orient+3&3;function wm(e,t){let[n,r]=Pd(e),i=[];if(t===0||t===2)for(let a=e.x;a<e.x+n;a++)i.push({x:a,y:t===0?e.y+r:e.y-1,side:t});else for(let a=e.y;a<e.y+r;a++)i.push({x:t===1?e.x-1:e.x+n,y:a,side:t});return i}function Tm(e){let t=Math.floor((e.length-1)/2);return e.map((e,t)=>({s:e,k:t})).sort((e,n)=>Math.abs(e.k-t)-Math.abs(n.k-t)).map(({s:e})=>e)}function Em(e,t,n){let[r,i]=Pd(e);return t>=e.x&&t<e.x+r&&n>=e.y&&n<e.y+i}function Dm(e,t,n){let[,r]=Pd(e);return n>=e.y+r?0:t<e.x?1:n<e.y?2:3}function Om(e){let[t,n]=Pd(e),r=Tm(wm(e,bm(e))),i=new Set(r.map(e=>`${e.x},${e.y}`));for(let a=e.y-1;a<=e.y+n;a++)for(let o=e.x-1;o<=e.x+t;o++)(o<e.x||o>=e.x+t)&&(a<e.y||a>=e.y+n)||Em(e,o,a)||i.has(`${o},${a}`)||r.push({x:o,y:a,side:Dm(e,o,a)});return r}function km(e,t,n){return{x:e.x,y:e.y,dx:-ym[e.side][0],dy:-ym[e.side][1],who:t,met:n}}function Am(e,t,n,r,i=[]){let a=t=>e.inBounds(t.x,t.y)&&r(e.index(t.x,t.y)),o=n.filter(t=>e.inBounds(t.x,t.y)),s=o.filter(a);return s.length||(s=i.filter(a)),{who:t,met:s.length>0,doors:(s.length?s:o).map(e=>km(e,t,s.length>0)),entrances:t===`cars`?[]:s.slice(0,1).map(t=>e.index(t.x,t.y))}}function jm(e,t,n,r,i){let a=t.terrain,[o,s]=Pd(e),c=new Set(n);for(let t=e.y;t<e.y+s;t++)for(let n=e.x;n<e.x+o;n++)a.inBounds(n,t)&&c.add(a.index(n,t));let l=new Map,u=n;for(let t=0;u.length&&t<=14;t++){let n=[];for(let o of u){let s=o%a.size,u=(o-s)/a.size;for(let d of bd){if(!a.inBounds(s+d.dx,u+d.dy))continue;let f=a.index(s+d.dx,u+d.dy);if(c.has(f))continue;c.add(f);let p=l.get(o)??(Em(e,s,u)?f:o);if(l.set(f,p),r(f)){let t=p%a.size,n=(p-t)/a.size;return{entrance:f,via:{x:t,y:n,side:Dm(e,t,n)}}}i(f,t)&&n.push(f)}}u=n}}function Mm(e,t){let[n,r]=Pd(e),i=[];for(let a=e.y;a<e.y+r;a++)for(let r=e.x;r<e.x+n;r++)t.inBounds(r,a)&&i.push(t.index(r,a));return i}var Nm=(e,t)=>e.surface[t]===pd.sand;function Pm(e,t,n,r){let i=t.terrain,a=Am(i,n,Om(e),r);if(a.met)return a;let o=jm(e,t,Mm(e,i),r,(e,n)=>t.open(e)&&(n<hm||Nm(i,e)));return o?{who:n,met:!0,doors:[km(o.via,n,!0)],entrances:[o.entrance]}:a}function Fm(e,t,n,r,i){let a=t.terrain,o=Am(a,n,[...Tm(wm(e,xm(e))),wm(e,Sm(e))[0],wm(e,Cm(e))[0]],r,i?[]:Tm(wm(e,bm(e))));if(o.met||!i)return o;let s=jm(e,t,Mm(e,a),r,(e,n)=>t.open(e)&&n<hm);return s?{who:n,met:!0,doors:[km(s.via,n,!0)],entrances:[s.entrance]}:o}function Im(e,t){let n=t.terrain,r=Tm(wm(e,bm(e))),i=Am(n,`guests`,r,t.walkable);if(i.met)return i;let a=jm(e,t,r.filter(e=>n.inBounds(e.x,e.y)&&Nm(n,n.index(e.x,e.y))&&t.open(n.index(e.x,e.y))).map(e=>n.index(e.x,e.y)),t.walkable,e=>t.open(e)&&Nm(n,e));return a?{who:`guests`,met:!0,doors:[km(a.via,`guests`,!0)],entrances:[a.entrance]}:i}function Lm(e,t,n){let r=e.size,i=new Set;for(let a of t){let t=a%r,o=(a-t)/r;for(let a of bd){let s=t+a.dx,c=o+a.dy;e.inBounds(s,c)&&n(c*r+s)&&e.path[c*r+s]!==q.bridge&&i.add(c*r+s)}}return[...i].sort((e,t)=>e-t)}function Rm(e,t){if(!e.pool[t])return[];let n=[t],r=new Set(n);for(let t=0;t<n.length;t++){let i=n[t]%e.size,a=(n[t]-i)/e.size;for(let t of bd){if(!e.inBounds(i+t.dx,a+t.dy))continue;let o=e.index(i+t.dx,a+t.dy);e.pool[o]&&!r.has(o)&&(r.add(o),n.push(o))}}return n}function zm(e,t){let n=t.terrain,r=wm(e,bm(e)),i=r.every(e=>n.inBounds(e.x,e.y)&&n.pool[n.index(e.x,e.y)]),[a,o]=Pd(e),s=e.x+a/2,c=e.y+o/2,l=e=>Math.max(Math.abs(e%n.size+.5-s),Math.abs(Math.floor(e/n.size)+.5-c)),u=r[0],d=i?Lm(n,Rm(n,n.index(u.x,u.y)),t.walkable).sort((e,t)=>l(e)-l(t)||e-t):[],f=d.filter(e=>l(e)<=6),p=f.length?f:d.slice(0,1);i&&!p.length&&p.push(...Fm(e,t,`guests`,t.walkable,!1).entrances);let m=p.length>0;return{who:`guests`,met:m,doors:r.filter(e=>n.inBounds(e.x,e.y)).map(e=>km(e,`guests`,m)),entrances:p}}function Bm(e,t){let n=t.terrain,r=wm(e,bm(e)),i=[r[0],r[r.length-1]],[a,o]=ym[bm(e)],s=(e,t)=>n.inBounds(e,t)&&n.path[n.index(e,t)]===q.road,c=t=>bd.some(n=>!Em(e,t.x-a+n.dx,t.y-o+n.dy)&&s(t.x-a+n.dx,t.y-o+n.dy)),l=i.filter(e=>n.inBounds(e.x,e.y)).map(e=>km(e,`cars`,c(e)));return{who:`cars`,met:l.length===2&&l.every(e=>e.met),doors:l,entrances:[]}}function Vm(e,t){let n=lm(e.type,e.design);if(!n)return;let r=t.terrain,i=e=>r.path[e]===q.road;return{rule:n,ways:(()=>{switch(n){case`front`:case`gate`:case`lobby`:return[Am(r,`guests`,Tm(wm(e,bm(e))),t.walkable)];case`staffFront`:return[Am(r,`staff`,Tm(wm(e,bm(e))),t.staffWalkable)];case`back`:return[Fm(e,t,`guests`,t.walkable,!1)];case`court`:return[Bm(e,t),Fm(e,t,`guests`,t.walkable,!1)];case`anySide`:return[Am(r,`guests`,Om(e),t.walkable)];case`tower`:{let[n,i]=Bd(r,e).tower,a=bd.map(e=>({x:n+e.dx,y:i+e.dy,side:ym.findIndex(([t,n])=>t===e.dx&&n===e.dy)}));return[Am(r,`guests`,a.filter(t=>!Em(e,t.x,t.y)),t.walkable)]}case`nearby`:return[Pm(e,t,`guests`,t.walkable)];case`staffNearby`:return[Pm(e,t,`staff`,t.staffWalkable)];case`frontOrSand`:return[Im(e,t)];case`poolWater`:return[zm(e,t),Fm(e,t,`staff`,t.staffWalkable,!0)];case`road`:return[Am(r,`cars`,Tm(wm(e,bm(e))),i)];case`roadEnds`:return[Am(r,`cars`,[wm(e,Sm(e))[1],wm(e,Cm(e))[1]],i)]}})()}}function Hm(e){let t=e.ways.find(e=>!e.met);return t?e.rule===`poolWater`&&t.who===`staff`?pm:e.rule===`court`&&t.who===`guests`?mm:fm[e.rule].missing:fm[e.rule].met}function Um(e){return!e||e.ways[0].doors.some(e=>e.met)}function Wm(e,t,n,r){let i=bd[r],a=t+i.dx,o=n+i.dy;return!e.inBounds(a,o)||e.pool[o*e.size+a]?!1:e.minCorner(t,n)-Math.max(e.corner(a,o,i.a),e.corner(a,o,i.b),e.isWater(a,o)?e.water[o*e.size+a]:0)>=pu.vanishingDrop}var Gm=-2,Km=12,qm=pu.drop,Jm=.13,Ym=[K.grass,K.sand,K.rock],Xm=[K.rock,K.sandstone,K.rock];function Zm(e,t,n,r,i,a,o,s,c,l,u=0,d=0){let f=a-s,p=o-c;if(f<=0&&p<=0)return;let m=Xc,h=(t,n,r)=>e.vertex(t,r*m,n,l,0,0,u,d);if(f>0&&p>0){h(t,n,s),h(r,i,c),h(r,i,o),h(t,n,s),h(r,i,o),h(t,n,a);return}let g=f/(f-p),_=t+(r-t)*g,v=n+(i-n)*g,y=s+(c-s)*g;f>0?(h(t,n,s),h(_,v,y),h(t,n,a)):(h(_,v,y),h(r,i,c),h(r,i,o))}function Qm(e,t,n,r,i,a,o){let s=[0,1,2,3].map(e=>t.corner(n,r,e)),c=s.map(e=>e*Xc+i),l=_d(s[0],s[1],s[2],s[3])?[[0,1,3],[1,2,3]]:[[0,1,2],[0,2,3]];for(let t of l)for(let i of t){let[t,s,l,u]=o?o(i):[0,0,0,0];e.vertex(n+hd[i],c[i],r+gd[i],a,0,Km,t,s,l,u)}}function $m(e,t,n,r){let i=Xc,a=t.uphill(n,r),o=t.minCorner(n,r),s=t.maxCorner(n,r)-o,c=$c.treadsPerTile,l=(e,t)=>{switch(a){case 1:return[n+e,r+t];case 3:return[n+1-e,r+1-t];case 2:return[n+1-t,r+e];default:return[n+t,r+1-e]}},u=(t,n,r,a,o=0,s=0,c=0,u=0)=>{let[d,f]=l(t,n);e.vertex(d,r*i+.004,f,a,o,0,s,c,u)},d=(e,t,i=!1)=>{for(let a of[0,1,2,0,2,3]){let[o,s,c]=e[a],[d,f]=l(o,s);u(o,s,c,t,0,i?d-n:0,i?f-r:0,15)}};for(let e=0;e<c;e++){let t=e/c,n=(e+1)/c,r=o+e*s/c,i=o+(e+1)*s/c;d([[t,0,i],[n,0,i],[n,1,i],[t,1,i]],K.path,!0),d([[t,0,r],[t,1,r],[t,1,i],[t,0,i]],K.pathEdge);for(let e of[0,1])d([[t,e,r],[n,e,o+n*s],[n,e,i],[t,e,i]],K.pathEdge)}}function eh(e,t,n,r,i,a,o,s){let c=Xc,l=r*c,u=o*c,d=(t,n,r,i)=>{for(let a of[t,n,r,t,r,i])e.vertex(a[0],a[1],a[2],s)};d([t,u,n],[i,u,n],[i,u,a],[t,u,a]),d([t,l,n],[i,l,n],[i,u,n],[t,u,n]),d([t,l,a],[i,l,a],[i,u,a],[t,u,a]),d([t,l,n],[t,l,a],[t,u,a],[t,u,n]),d([i,l,n],[i,l,a],[i,u,a],[i,u,n])}var th=.3,nh={height:.85,bar:.07,post:.07,inset:.05},rh=.09;function ih(e,t,n,r){let i=t.size,a=r*i+n,o=t.bridge[a],s=o+ld.rise,c=0;for(let e=0;e<4;e++){let a=bd[e],o=n+a.dx,s=r+a.dy;if(!t.inBounds(o,s))continue;let l=t.pool[s*i+o]||t.isWater(o,s);(t.deckLevel(o,s)||!l)&&t.walkJoins(n,r,o,s)&&(c|=1<<e)}let l=!!(c&5)&&!(c&10),u=s*Xc;for(let t of[0,1,2,0,2,3])e.vertex(n+hd[t],u,r+gd[t],K.decking,0,Km,hd[t],gd[t],c,+!!l);let d=t.pool[a]?o-qm-.3:t.minCorner(n,r);for(let i=0;i<4;i++){let a=bd[i],l=n+hd[a.a],u=r+gd[a.a],f=n+hd[a.b],p=r+gd[a.b],m=n+a.dx,h=r+a.dy;if(c&1<<i){t.deckLevel(m,h)||Zm(e,l,u,f,p,s,s,o,o,K.wood);continue}Zm(e,l,u,f,p,s,s,s-th,s-th,K.wood);let g=-a.dx*nh.inset,_=-a.dy*nh.inset;for(let[t,i]of[[l,u],[f,p]]){let a=t+(t>n?-.09:rh)/2+g,o=i+(i>r?-.09:rh)/2+_;eh(e,a-rh/2,o-rh/2,d,a+rh/2,o+rh/2,s-th,K.wood)}for(let t of[.08,.5,.92]){let n=l+(f-l)*t+g,r=u+(p-u)*t+_;eh(e,n-nh.post/2,r-nh.post/2,s,n+nh.post/2,r+nh.post/2,s+nh.height,K.wood)}let v=nh.bar/2;eh(e,Math.min(l,f)+g-v,Math.min(u,p)+_-v,s+nh.height-nh.bar,Math.max(l,f)+g+v,Math.max(u,p)+_+v,s+nh.height,K.wood)}}function ah(e,t,n){if(!e.isWater(t,n))return!1;for(let r of bd){let i=t+r.dx,a=n+r.dy;if(e.inBounds(i,a)&&!e.isWater(i,a))return!0}return!1}function oh(e,t,n){let r=0;for(let[i,a]of[[-1,-1],[0,-1],[-1,0],[0,0]]){let o=t+i,s=n+a;if(e.inBounds(o,s)){if(!e.isWater(o,s))return 1;ah(e,o,s)&&(r=.5)}}return r}function sh(e,t){return[e-e%16,t-t%16]}function ch(e,t,n,r){let i=e.size,a=new Bf;for(let r=n;r<Math.min(i,n+16);r++)for(let n=t;n<Math.min(i,t+16);n++)lh(a,e,n,r);if(a.count===0)return;let o=new li(a.build(),r);return o.name=`terrain-${t}-${n}`,o.matrixAutoUpdate=!1,o}function lh(e,t,n,r){let i=t.size,a=r*i+n,o=Xc,s=t.surface[a],c=t.water[a],l=t.minCorner(n,r),u=c>l,d=u&&c>=t.maxCorner(n,r),f=t.pool[a],p=f!==uu.none;!d&&!p&&Qm(e,t,n,r,0,Ym[s]);for(let a of bd){let o=n+a.dx,l=r+a.dy,f=n+hd[a.a],p=r+gd[a.a],m=n+hd[a.b],h=r+gd[a.b],g=o>=0&&l>=0&&o<i&&l<i,_=t.corner(n,r,a.a),v=t.corner(n,r,a.b);if(!g){u?(Zm(e,f,p,m,h,c,c,Gm,Gm,K.deep,3,0),Zm(e,f,p,m,h,Math.min(_,c),Math.min(v,c),Gm,Gm,Xm[s])):Zm(e,f,p,m,h,_,v,Gm,Gm,Xm[s]);continue}let y=t.corner(o,l,a.na),b=t.corner(o,l,a.nb),x=t.water[l*i+o],S=t.isWater(o,l);S&&(y=Math.max(y,x),b=Math.max(b,x)),d||Zm(e,f,p,m,h,_,v,y,b,Xm[s]),u&&S&&x<c&&Zm(e,f,p,m,h,c,c,x,x,K.shallow,0,1)}if(u){let i=c===t.seaLevel,a=c*o,s=[[n,r],[n+1,r],[n+1,r+1],[n,r+1]],l=e=>c-t.corner(n,r,e);for(let n of[0,1,2,0,2,3]){let[r,o]=s[n];e.vertex(r,a,o,K.shallow,0,0,l(n),i?oh(t,r,o):0)}}let m=t.path[a];if(m===q.bridge&&t.bridge[a])ih(e,t,n,r);else if(m&&!p&&!d&&t.isStairs(n,r))$m(e,t,n,r);else if(m&&!p&&!d){let a=0;for(let e=0;e<4;e++){let o=bd[e],s=n+o.dx,c=r+o.dy;if(s<0||c<0||s>=i||c>=i)continue;let l=c*i+s;(m===q.deck?t.path[l]===q.deck||t.pool[l]&&!t.path[l]:t.path[l]||t.pool[l])&&t.walkJoins(n,r,s,c)&&(a|=1<<e)}Qm(e,t,n,r,.004,m===q.road?K.asphalt:m===q.service?K.gravel:m===q.deck?K.poolDeck:K.path,e=>[hd[e],gd[e],a,0])}if(p){let a=l*o,s=e=>(l-(e===uu.splash?pu.splashDrop:qm))*o,c=s(f),u=(t,n,r,i)=>e.vertex(t,n,r,i),d=(e,t)=>{for(let n of[0,1,2,0,2,3])u(e[n][0],e[n][1],e[n][2],t)};d([[n,c,r],[n+1,c,r],[n+1,c,r+1],[n,c,r+1]],f===uu.deep?K.poolDeep:K.pool);for(let e=0;e<4;e++){let l=bd[e],u=n+l.dx,p=r+l.dy,m=u>=0&&p>=0&&u<i&&p<i?t.pool[p*i+u]:0,h=n+hd[l.a],g=r+gd[l.a],_=n+hd[l.b],v=r+gd[l.b];if(m){if(f===uu.splash&&m!==uu.splash&&d([[h,s(m),g],[_,s(m),v],[_,c,v],[h,c,g]],K.poolTile),f===uu.river&&m!==uu.river){let e=c+.18*o,t=-l.dx*.07,n=-l.dy*.07;d([[h,e,g],[_,e,v],[_+t,e,v+n],[h+t,e,g+n]],K.coping),d([[h+t,c,g+n],[_+t,c,v+n],[_+t,e,v+n],[h+t,e,g+n]],K.poolTile)}continue}if(Wm(t,n,r,e)){let e=Math.max(t.corner(u,p,l.na),t.water[p*i+u])*o,n=Math.max(t.corner(u,p,l.nb),t.water[p*i+u])*o;d([[h,c,g],[_,c,v],[_,a-.01,v],[h,a-.01,g]],K.pool);let r=l.dx*.012,s=l.dy*.012;(e<a-.02||n<a-.02)&&d([[h+r,a-.01,g+s],[_+r,a-.01,v+s],[_+r,n,v+s],[h+r,e,g+s]],K.foam);let f=.45,m=l.dx*f,y=l.dy*f,b=(e,n)=>t.heightAt(e,n)*o+.012;d([[h+r,e+.012,g+s],[_+r,n+.012,v+s],[_+m,b(_+m,v+y),v+y],[h+m,b(h+m,g+y),g+y]],K.foam);continue}let y=-l.dx*Jm,b=-l.dy*Jm;d([[h,a+.002,g],[_,a+.002,v],[_+y,a+.002,v+b],[h+y,a+.002,g+b]],K.coping),d([[h+y,c,g+b],[_+y,c,v+b],[_+y,a,v+b],[h+y,a,g+b]],K.poolTile)}if(f===uu.splash)for(let[e,t,i]of[[.3,.3,.9],[.7,.62,1.3],[.35,.75,.7]]){let a=n+e,s=r+t,l=c+i*o,u=.035;d([[a-u,c,s],[a+u,c,s],[a+u,l,s],[a-u,l,s]],K.foam),d([[a,c,s-u],[a,c,s+u],[a,l,s+u],[a,l,s-u]],K.foam)}}}var uh=0,dh=1,fh=2,ph=3,mh=4,hh=5,gh=6,_h=7,vh=8,yh=9,bh=10,xh=11,Sh=96;function Ch(e){return e+3&-4}function wh(e,t){let n=0,r=new Uint32Array(e,n,xh),i=new Float32Array(e,n,xh);n+=44;let a=new Uint16Array(e,n,t);n+=Ch(t*2);let o=new Float32Array(e,n,t);n+=t*4;let s=new Float32Array(e,n,t);n+=t*4;let c=new Float32Array(e,n,t);n+=t*4;let l=new Float32Array(e,n,t);n+=t*4;let u=new Uint8Array(e,n,t);n+=t;let d=new Uint8Array(e,n,t);n+=t;let f=new Uint16Array(e,n,t);return n+=Ch(t*4)-t*2,{header:r,headerF:i,ids:a,x:o,y:s,vx:c,vy:l,anim:u,look:d,flags:f,cars:new Float32Array(e,n,Sh*4)}}function Th(e,t){if(e.header[uh]!==1347170357)throw Error(`Not a Paradise Lot snapshot`);return t.tick=e.header[dh],t.count=e.header[fh],t.hour=e.headerF[ph],t.day=e.header[mh],t.tickMs=e.headerF[hh],t.ticksInBatch=e.header[gh],t.speed=e.headerF[_h],t.guests=e.header[vh],t.sky=e.header[yh],t.rain=e.headerF[bh],t}function Eh(){return{tick:0,count:0,guests:0,hour:0,day:0,tickMs:0,ticksInBatch:0,speed:0,sky:0,rain:0}}var Dh=[K.coral,K.teal,K.yellow,K.coping,K.magenta,K.rock],Oh=250;function kh(){let e=new Bf,t=new Vf(e,-.45,-.19,0,0,.9,.38),n=(e,n)=>t.box(e-.08,n-.02,0,e+.08,n+.02,.6,K.rock);for(let e of[.17,.73])for(let t of[0,.36])n(e,t);return t.box(.02,.02,.3,.88,.36,1.05,Oh),t.box(.22,.05,1.05,.62,.33,1.65,K.window),t.box(.25,.06,1.65,.6,.32,1.72,Oh),t.box(.86,.06,.6,.885,.12,.8,K.yellow),t.box(.86,.26,.6,.885,.32,.8,K.yellow),e}var Ah=class{mesh;geometry;tPos;tMat;per;position;mat;constructor(e){let t=kh();this.per=t.count,this.tPos=Float32Array.from(t.position),this.tMat=Float32Array.from(t.mat);let n=this.per*Sh,r=new zr;this.position=new wr(new Float32Array(n*3),3).setUsage(ft),this.mat=new wr(new Float32Array(n),1).setUsage(ft),r.setAttribute(`position`,this.position),r.setAttribute(`aMat`,this.mat),r.setAttribute(`aFlags`,new wr(new Float32Array(n),1)),r.setAttribute(`aGain`,new wr(new Float32Array(n),1)),r.setAttribute(`aExtra`,new wr(new Float32Array(n*4),4)),r.setDrawRange(0,0),this.geometry=r,this.mesh=new li(r,e),this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1}update(e,t,n,r){let i=this.position.array,a=this.mat.array,o=this.per,s=0;for(let c=0;c<Sh;c++){let l=e[c*4+3];if(!l)continue;let u=e[c*4],d=e[c*4+1],f=e[c*4+2];if(t&&t[c*4+3]===l){u=t[c*4]+(u-t[c*4])*n,d=t[c*4+1]+(d-t[c*4+1])*n;let e=f-t[c*4+2];e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),f=t[c*4+2]+e*n}let p=Math.cos(f),m=Math.sin(f),h=r.heightAt(u,d)*Xc,g=Dh[(l-1)%Dh.length],_=s*o;for(let e=0;e<o;e++){let t=this.tPos[e*3],n=this.tPos[e*3+1],r=this.tPos[e*3+2],o=(_+e)*3;i[o]=u+t*p-r*m,i[o+1]=h+n,i[o+2]=d+t*m+r*p;let s=this.tMat[e];a[_+e]=s===Oh?g:s}s++}this.geometry.setDrawRange(0,s*o),this.position.clearUpdateRanges(),this.position.addUpdateRange(0,s*o*3),this.position.needsUpdate=!0,this.mat.clearUpdateRanges(),this.mat.addUpdateRange(0,s*o),this.mat.needsUpdate=!0}},jh={zone:[2,8],season:[4,9],perTile:2e-4,halfLight:.1,lightReach:30,quiet:42,loud:56,stretch:10,nestHour:22,ashoreUntil:1,incubation:[52,62],hatching:[5.5,10],seenWithin:10,litShare:.25},Mh={chance:.25,hours:[6.5,11],depth:3,offshore:[5,12],seenWithin:40},Nh={hours:[18.5,6.5],least:.3},Ph={hours:[19,5]},X=Xc,Fh={birds:40,perched:16,seabirds:6,crabs:24,geckos:14,fish:30,honu:2,dolphins:10,hatchlings:40,nests:10},Ih=4e4,Lh=.45,Rh=.25,zh=.035,Bh=.3,Vh=[.4,2.2],Hh=.1,Uh=.008,Wh=[6,18.8],Gh=[6.5,18.5],Kh=[7,17.5],qh=[17.5,19.5],Jh=1.1,Yh=[10,25],Xh=.35,Zh=.5,Qh=[14,22];function $h(e){let t=new Bf;return e(new Vf(t,0,0,0,0,1,1)),{position:Float32Array.from(t.position),mat:Float32Array.from(t.mat),flags:Float32Array.from(t.flags),count:t.count}}var eg=[{body:K.sandstone,head:K.rock,beak:K.rock},{body:K.wood,head:K.basalt,beak:K.yellow},{body:K.rock,head:K.coral,beak:K.coping}];function tg(e,t){let n=1.25*X;return $h(r=>{if(r.flags=Hl.outlined,r.box(-.13*n,-.06*n,.07,.12*n,.06*n,.25,e.body),r.box(.08*n,-.045*n,.2,.19*n,.045*n,.35,e.head),r.box(.19*n,-.015*n,.25,.25*n,.015*n,.29,e.beak),r.box(-.26*n,-.035*n,.16,-.12*n,.035*n,.21,e.body),t){let i=t===1?.45:0;for(let t of[-1,1])r.polygon([[-.08*n,t*.06*n,.22],[.06*n,t*.06*n,.22],[0,t*.38*n,i],[-.12*n,t*.36*n,i]],e.body)}})}function ng(e,t){let n=e?K.basalt:K.coping,r=e?1:.4,i=e?1.15:.7;return $h(e=>{e.flags=Hl.outlined,e.box(-r*.5*X,-.06*X,-.08,r*.5*X,.06*X,.06,n);for(let t of[-1,1])e.polygon([[-r*.45*X,0,-.02],[-r*.9*X,t*.12*X,-.02],[-r*.7*X,0,-.02]],n);let a=t===1?.45:t===2?-.35:-.08;for(let t of[-1,1]){let r=[.02*X,t*i*.45*X,.04+a*.4];e.polygon([[-.12*X,t*.05*X,.02],[.1*X,t*.05*X,.02],r,[-.1*X,t*i*.45*X,a*.4]],n),e.polygon([r,[-.25*X,t*i*X,a],[-.1*X,t*i*.45*X,a*.4]],n)}})}var rg=$h(e=>{let t=1.4*X;e.flags=Hl.outlined,e.box(-.1*t,-.12*t,.04,.1*t,.12*t,.16,K.coping);for(let n of[-1,1]){e.box(.1*t,n*.06*t-.035*t,.03,.18*t,n*.06*t+.035*t,.12,K.coping);for(let r=0;r<3;r++)e.box((-.08+r*.07)*t,n>0?.12*t:-.21*t,0,(-.05+r*.07)*t,n>0?.21*t:-.12*t,.05,K.sandstone)}}),ig=$h(e=>{let t=.01*X;e.polygon([[t,-.03*X,-.05],[t,.03*X,-.05],[t,.03*X,.14],[t,-.03*X,.14]],K.basalt),e.polygon([[t,-.04*X,.14],[t,.04*X,.14],[t,0,.22]],K.basalt),e.polygon([[t,-.015*X,-.05],[t,.015*X,-.05],[t,0,-.26]],K.basalt);for(let[n,r]of[[.1,.06],[-.02,-.06]])for(let i of[-1,1])e.polygon([[t,i*.02*X,n],[t,i*.09*X,n+r],[t,i*.09*X,n+r+.03],[t,i*.02*X,n+.04]],K.basalt)}),ag=$h(e=>{e.polygon([[.18*X,0,0],[0,.05*X,0],[-.14*X,0,0],[0,-.05*X,0]],K.basalt),e.polygon([[-.12*X,0,0],[-.24*X,.06*X,0],[-.24*X,-.06*X,0]],K.basalt)});function og(e,t){return $h(n=>{n.flags=Hl.outlined;let r=e*X;n.dome(0,0,.45*r,.04*e,.3*e,t,7),n.box(.42*r,-.08*r,.05*e,.6*r,.08*r,.18*e,K.sandstone);for(let[t,i,a]of[[.2,1,.42],[.2,-1,.42],[-.3,1,.22],[-.3,-1,.22]])n.polygon([[t*r,i*.3*r,.06*e],[(t+.2)*r,i*.3*r,.06*e],[(t-.1)*r,i*(.3+a)*r,.02*e]],K.sandstone)})}var sg=$h(e=>{e.flags=Hl.outlined;let t=[[1.1,.03,.03],[.85,.07,.07],[.55,.2,.2],[.1,.24,.25],[-.4,.17,.18],[-.8,.07,.08],[-1,.04,.04]];for(let n=0;n+1<t.length;n++){let[r,i,a]=t[n],[o,s,c]=t[n+1],l=(e,t,n)=>[[e*X,0,n],[e*X,t*X,0],[e*X,0,-n],[e*X,-t*X,0]],u=l(r,i,a),d=l(o,s,c);for(let t=0;t<4;t++)e.polygon([u[t],u[(t+1)%4],d[(t+1)%4],d[t]],K.rock)}e.polygon([[.25*X,0,.22],[-.2*X,0,.22],[-.25*X,0,.55]],K.rock);for(let t of[-1,1])e.polygon([[-.95*X,0,0],[-1.25*X,t*.32*X,.02],[-1.15*X,t*.05*X,0]],K.rock)}),cg=$h(e=>{e.box(-.1,-.045,0,.1,.045,.03,K.sandstone);for(let t of[-1,1])for(let n of[-.08,.02])e.box(n,t*.095-.02,0,n+.06,t*.095+.02,.03,K.sandstone)}),lg=$h(e=>{for(let[t,n,r]of[[0,0,.35],[.12,.08,.2],[-.1,.1,.25],[.05,-.12,.3],[-.12,-.06,.18]])e.box((t-.04)*X*3,(n-.04)*X*3,0,(t+.04)*X*3,(n+.04)*X*3,r,K.coping)}),ug=$h(e=>{e.flags=Hl.outlined;let t=.6*X;for(let[n,r]of[[-t,-t],[t,-t],[t,t],[-t,t]])e.post(n,r,0,.75,K.wood,.025*X*3);for(let[n,r,i,a]of[[-t,-t,t,-t],[t,-t,t,t],[-t,t,t,t],[-t,-t,-t,t]])e.box(Math.min(n,i)-.008,Math.min(r,a)-.008,.58,Math.max(n,i)+.008,Math.max(r,a)+.008,.68,K.coping);e.post(t+.04,0,0,1.1,K.wood,.02*X*3),e.box(t+.03,-.1*X*1.5,.75,t+.05,.1*X*1.5,1.05,K.yellow)}),dg=eg.map(e=>[tg(e,0),tg(e,1),tg(e,2)]),fg=[!1,!0].map(e=>[ng(e,0),ng(e,1),ng(e,2)]),pg=og(1,K.wood),mg=og(1.4,K.wood),hg=og(.5,K.basalt);function Z(e,t,n=0){let r=Math.imul(e+40503,2246822507)^Math.imul(t+32586,3266489909)^Math.imul(n+357,668265263);return r=Math.imul(r^r>>>15,739982445),r=Math.imul(r^r>>>12,695872825),((r^r>>>15)>>>0)/4294967296}function gg(e,t){let n=t[0],r=t[1];return n<=r?e>=n&&e<r:e>=n||e<r}function _g(e,t){return Int32Array.from(e.sort((e,n)=>Z(e,t)-Z(n,t)))}var vg=class{mesh;geometry;position;mat;flags;attributes;drawn=0;viewProjection=new cn;terrain;terrainVersion=-1;standing=new Uint8Array;report;version=-1;birdTiles=new Int32Array;flushedAt=new Float32Array;flushedTo=new Int16Array;perches=new Float32Array;crabTiles=new Int32Array;schoolTiles=new Int32Array;honuTiles=new Int32Array;shore=new Float32Array;windows=new Float32Array;nests=new Float32Array;people=new Uint8Array;peopleAt=[];spot={x:0,y:0,lift:0,heading:0};from={x:0,y:0,lift:0,heading:0};constructor(e){let t=new zr;this.position=new wr(new Float32Array(Ih*3),3).setUsage(ft),this.mat=new wr(new Float32Array(Ih),1).setUsage(ft),this.flags=new wr(new Float32Array(Ih),1).setUsage(ft),t.setAttribute(`position`,this.position),t.setAttribute(`aMat`,this.mat),t.setAttribute(`aFlags`,this.flags),t.setAttribute(`aGain`,new wr(new Float32Array(Ih),1)),t.setAttribute(`aExtra`,new wr(new Float32Array(Ih*4),4)),t.setDrawRange(0,0),this.geometry=t,this.attributes=[this.position,this.mat,this.flags],this.mesh=new li(t,e),this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1}setTerrain(e){this.terrain=e,this.terrainVersion=-1,this.report=void 0,this.version=-1,this.people=new Uint8Array(e.size*e.size),this.peopleAt.length=0}setObjects(e,t){let n=this.terrain,r=n.size,i=[];this.standing=new Uint8Array(r*r);let a=new Float32Array(r*r*2).fill(NaN);for(let t of e){let e=Qp(t,n);e&&i.push(e[0],e[1],e[2],0);let[o,s]=Pd(t),c=ou[t.type].category!==`scenery`;for(let e=t.y;e<t.y+s;e++)for(let i=t.x;i<t.x+o;i++){if(!n.inBounds(i,e))continue;let l=e*r+i;this.standing[l]=1,c&&(a[l*2]=t.x+o/2,a[l*2+1]=t.y+s/2)}}this.perches=Float32Array.from(i),this.findWindows(t,a),this.version=-1,this.report&&this.setReport(this.report)}findWindows(e,t){let n=this.terrain.size,r=e.getAttribute(`position`),i=e.getAttribute(`aMat`),a=e.getAttribute(`aExtra`),o=[],s=new Set;for(let e=0;e+2<r.count;e+=3){if(i.getX(e)!==K.window)continue;let c=r.getX(e),l=r.getY(e),u=r.getZ(e),d=r.getX(e+1)-c,f=r.getY(e+1)-l,p=r.getZ(e+1)-u,m=r.getX(e+2)-c,h=r.getY(e+2)-l,g=r.getZ(e+2)-u,_=f*g-p*h,v=p*m-d*g,y=d*h-f*m,b=Math.hypot(_,v,y);if(b<.004||Math.abs(v)>b*.2)continue;_/=b,y/=b;let x=(c+r.getX(e+1)+r.getX(e+2))/3,S=(l+r.getY(e+1)+r.getY(e+2))/3,C=(u+r.getZ(e+1)+r.getZ(e+2))/3,w=NaN,T=NaN;for(let e of[1,-1]){let r=Math.floor(x+_*.06*e),i=Math.floor(C+y*.06*e);if(!(r<0||i<0||r>=n||i>=n||Number.isNaN(t[(i*n+r)*2]))){w=t[(i*n+r)*2],T=t[(i*n+r)*2+1];break}}if(Number.isNaN(w))continue;(x-w)*_+(C-T)*y<0&&(_=-_,y=-y);let E=Math.round(x*6)*100003+Math.round(C*6)*101+Math.round(S*3);s.has(E)||(s.add(E),Z(E,13)>=Bh||o.push(x+_*.03-y*.05,S,C+y*.03+_*.05,_,y,a.getZ(e)))}this.windows=Float32Array.from(o)}setReport(e){this.report=e;let t=this.terrain;if(!t)return;let n=[];for(let r of e.nests){let[e,i]=Sg(t,r.x,r.y);n.push(r.x+.5,r.y+.5,r.laid,r.hatch,e,i)}if(this.nests=Float32Array.from(n),e.version===this.version||this.standing.length!==e.habitat.length)return;this.version=e.version;let r=t.size,i=[],a=[];for(let n=0;n<r*r;n++){let o=e.habitat[n]/100,s=n%r,c=(n-s)/r;!o||this.standing[n]||t.path[n]||t.pool[n]||t.isWater(s,c)||(t.surface[n]===pd.sand?o>=Nh.least&&Z(n,7)<o*Rh&&a.push(n):Z(n,1)<o*o*Lh&&i.push(n))}this.birdTiles=_g(i,3),this.crabTiles=_g(a,8),this.flushedAt=new Float32Array(this.birdTiles.length).fill(NaN),this.flushedTo=new Int16Array(this.birdTiles.length).fill(-1);for(let t=0;t*4<this.perches.length;t++){let n=Math.floor(this.perches[t*4+1])*r+Math.floor(this.perches[t*4]);this.perches[t*4+3]=(e.habitat[n]??0)/100}}findShore(e){let t=e.size,n=[],r=[],i=[];for(let a=0;a<t*t;a++){let o=a%t,s=(a-o)/t;if(!xg(e,o,s)){e.surface[a]===pd.sand&&Z(a,5)<zh&&bg.some(([t,n])=>xg(e,o+t,s+n))&&n.push(o+.5,s+.5);continue}let c=e.water[a]-e.minCorner(o,s);c<Vh[0]||c>Vh[1]||(Z(a,9)<Hh?r.push(a):Z(a,11)<Uh&&i.push(a))}this.shore=Float32Array.from(n),this.schoolTiles=_g(r,10),this.honuTiles=_g(i,12),this.terrainVersion=e.version}update(e,t,n,r,i,a,o,s){this.drawn=0;let c=this.terrain;if(c){c.version!==this.terrainVersion&&this.findShore(c),this.viewProjection.multiplyMatrices(e.three.projectionMatrix,e.three.matrixWorldInverse),this.seePeople(c,a,o);let l=e.zoom===0,u=e.zoom<=1,d=i<.4;u&&d&&gg(n,Wh)&&this.groundBirds(c,t),u&&d&&(gg(n,Wh)||gg(n,qh))&&this.perchedBirds(t,gg(n,qh)),d&&gg(n,Gh)&&this.seabirds(c,t),l&&gg(n,Nh.hours)&&this.crabs(c,t),l&&gg(n,Ph.hours)&&this.geckos(t,s),l&&gg(n,Kh)&&this.fish(c,t),u&&gg(n,Kh)&&this.honu(c,t),this.report?.pod&&d&&gg(n,Mh.hours)&&this.dolphins(c,t,this.report.pod),u&&this.turtles(c,t,n,r,l)}this.geometry.setDrawRange(0,this.drawn);for(let e of this.attributes)e.clearUpdateRanges(),e.addUpdateRange(0,this.drawn*e.itemSize),e.needsUpdate=!0}seePeople(e,t,n){for(let e of this.peopleAt)this.people[e]=0;this.peopleAt.length=0;let r=e.size;for(let e=0;e<n;e++){let n=Math.floor(t[e*3]),i=Math.floor(t[e*3+2]);if(n<0||i<0||n>=r||i>=r)continue;let a=i*r+n;this.people[a]||(this.people[a]=1,this.peopleAt.push(a))}}peopleNear(e,t){let n=this.people;return!!(n[t]||n[t-1]||n[t+1]||n[t-e]||n[t+e])}onScreen(e,t,n){let r=this.viewProjection.elements,i=r[0]*e+r[4]*t+r[8]*n+r[12],a=r[1]*e+r[5]*t+r[9]*n+r[13];return i>-1.1&&i<1.1&&a>-1.1&&a<1.1}emit(e,t,n,r,i,a=0){if(this.drawn+e.count>Ih)return;let o=this.position.array,s=this.mat.array,c=this.flags.array,l=Math.cos(i),u=Math.sin(i),d=Math.cos(a),f=Math.sin(a),p=n*Xc;for(let n=0;n<e.count;n++){let i=e.position[n*3],a=e.position[n*3+1],m=e.position[n*3+2],h=i*d-a*f,g=(this.drawn+n)*3;o[g]=t+h*l-m*u,o[g+1]=p+i*f+a*d,o[g+2]=r+h*u+m*l,s[this.drawn+n]=e.mat[n],c[this.drawn+n]=e.flags[n]}this.drawn+=e.count}hopping(e,t,n,r,i){let a=.8+Z(e,n,21)*.9,o=(r+Z(e,n,22)*10)/a,s=Math.floor(o),c=o-s,l=e%t+.25+Z(e,n,23)*.5,u=Math.floor(e/t)+.25+Z(e,n,24)*.5,d=l+yg(s-1,1,n,.22),f=u+yg(s-1,2,n,.22),p=l+yg(s,1,n,.22),m=u+yg(s,2,n,.22),h=Math.min(1,c/.22);return i.x=d+(p-d)*h,i.y=f+(m-f)*h,i.lift=h<1?Math.sin(Math.PI*h)*.12:0,i.heading=Math.atan2(m-f,p-d),i}nearestPerch(e,t){let n=36,r=-1;for(let i=0;i*4<this.perches.length;i++){let a=(this.perches[i*4]-e)**2+(this.perches[i*4+1]-t)**2;a<n&&(n=a,r=i)}return r}groundBirds(e,t){let n=e.size,r=0;for(let i=0;i<this.birdTiles.length&&r<Fh.birds;i++){let a=this.birdTiles[i],o=a%n+.5,s=Math.floor(a/n)+.5;if(!this.onScreen(o,e.heightAt(o,s)*.2041337075784639,s))continue;let c=this.peopleNear(n,a),l=Yh[0]+Z(a,25)*(Yh[1]-Yh[0]);if(Number.isNaN(this.flushedAt[i]))c&&(this.flushedAt[i]=t,this.flushedTo[i]=this.nearestPerch(o,s));else{let e=t-this.flushedAt[i];c&&e>Jh+l?this.flushedAt[i]=t-Jh:e>=Jh*2+l&&(this.flushedAt[i]=NaN)}let u=1+Math.floor(Z(a,2)*3);for(let c=0;c<u;c++){let u=dg[Math.floor(Z(a,c,26)*dg.length)],d=this.flushedAt[i];if(Number.isNaN(d)){let i=this.hopping(a,n,c,t,this.spot);this.emit(u[0],i.x,e.heightAt(i.x,i.y)+i.lift,i.y,i.heading),r++;continue}let f=t-d,p=this.flushedTo[i],m=p>=0?this.perches[p*4]+(Z(a,c,27)-.5)*.12:o+Math.cos(Z(a,28)*6.28)*8,h=p>=0?this.perches[p*4+1]+(Z(a,c,29)-.5)*.12:s+Math.sin(Z(a,28)*6.28)*8,g=p>=0?this.perches[p*4+2]:e.heightAt(o,s)+8,_=f-Jh;if(_>=0&&_<l){p>=0&&this.emit(u[0],m,g,h,Z(a,c,30)*6.28),r++;continue}let v=_>=l,y=Math.min(1,(v?_-l:f)/Jh),b=this.hopping(a,n,c,v?t:d,this.from),x=v?m:b.x,S=v?h:b.y,C=v?g:e.heightAt(b.x,b.y),w=v?b.x:m,T=v?b.y:h,E=v?e.heightAt(b.x,b.y):g,D=Math.floor(t*10+c)&1?1:2;this.emit(u[D],x+(w-x)*y,C+(E-C)*y+Math.sin(Math.PI*y)*1.2,S+(T-S)*y,Math.atan2(T-S,w-x)),r++}}}perchedBirds(e,t){let n=0;for(let r=0;r*4<this.perches.length&&n<Fh.perched;r++){let i=this.perches[r*4],a=this.perches[r*4+1],o=this.perches[r*4+2],s=this.perches[r*4+3],c=+(Z(r,33)<s)+(t&&Z(r,34)<s*1.5?1:0);if(c&&this.onScreen(i,o*.2041337075784639,a))for(let t=0;t<c;t++){let s=Math.floor((e+Z(r,t,35)*20)/(4+Z(r,t,36)*6)),c=dg[Math.floor(Z(r,t,37)*dg.length)];this.emit(c[0],i+(Z(r,t,s)-.5)*.14,o,a+(Z(r,t+9,s)-.5)*.14,Z(r,t,s+1)*6.28),n++}}}seabirds(e,t){let n=0;for(let r=0;r*2<this.shore.length&&n<Fh.seabirds;r++){let i=this.shore[r*2],a=this.shore[r*2+1],o=Z(r,31)<.3,s=2.5+Z(r,32)*3,c=(.12+Z(r,33)*.12)*(Z(r,34)<.5?-1:1),l=t*c+Z(r,35)*6.28,u=i+Math.cos(l)*s,d=a+Math.sin(l)*s,f=e.seaLevel+9+Z(r,36)*9;if(!this.onScreen(u,f*.2041337075784639,d))continue;let p=!o&&Math.floor(t*.7+Z(r,37)*4)%3==0?Math.floor(t*7)&1?1:2:0;this.emit(fg[+!!o][p],u,f,d,l+(c>0?Math.PI/2:-Math.PI/2)),n++}}crabs(e,t){let n=e.size,r=0;for(let i=0;i<this.crabTiles.length&&r<Fh.crabs;i++){let a=this.crabTiles[i],o=a%n+.5,s=Math.floor(a/n)+.5;if(this.peopleNear(n,a)||!this.onScreen(o,e.heightAt(o,s)*.2041337075784639,s))continue;let c=Z(a,3)<.4?2:1;for(let n=0;n<c;n++){let i=2+Z(a,n,40)*2.5,c=(t+Z(a,n,41)*9)/i,l=Math.floor(c);if(Z(a,n,l)<.15)continue;let u=Math.min(1,(c-l)/.08),d=o+yg(l-1,5,n,.4),f=s+yg(l-1,6,n,.4),p=o+yg(l,5,n,.4),m=s+yg(l,6,n,.4),h=d+(p-d)*u,g=f+(m-f)*u;this.emit(rg,h,e.heightAt(h,g),g,Math.atan2(m-f,p-d)+Math.PI/2),r++}}}geckos(e,t){let n=this.windows,r=0;for(let i=0;i*6<n.length&&r<Fh.geckos;i++){let a=n[i*6+5];if(a>0&&t[(a-1)*4]!==255)continue;let o=n[i*6],s=n[i*6+1],c=n[i*6+2];if(!this.onScreen(o,s,c))continue;let l=n[i*6+3],u=n[i*6+4],d=Math.floor((e+Z(i,50)*30)/(3+Z(i,51)*5)),f=(Z(i,d,52)-.5)*.06,p=(Z(i,d,53)-.5)*.4;this.emit(ig,o-u*f,s/Xc+p,c+l*f,Math.atan2(u,l)),r++}}fish(e,t){let n=e.size,r=0;for(let i=0;i<this.schoolTiles.length&&r<Fh.fish;i++){let a=this.schoolTiles[i],o=a%n+.5,s=Math.floor(a/n)+.5,c=e.water[a]+.02;if(this.peopleNear(n,a)||!this.onScreen(o,c*.2041337075784639,s))continue;let l=t*(.35+Z(a,60)*.25)+Z(a,61)*6.28+Math.max(0,Math.sin(t*.9+a))*1.2,u=l+Math.PI/2,d=o+Math.cos(l)*.28,f=s+Math.sin(l)*.28;for(let e=0;e<4;e++){let n=(e-1.5)*.07,i=(Z(a,e,62)-.5)*.12+Math.sin(t*3+e)*.01,o=d-Math.cos(u)*n-Math.sin(u)*i,s=f-Math.sin(u)*n+Math.cos(u)*i;this.emit(ag,o,c,s,u+Math.sin(t*6+e)*.2),r++}}}honu(e,t){let n=e.size;for(let r=0;r<this.honuTiles.length&&r<Fh.honu;r++){let i=this.honuTiles[r],a=25+Z(i,70)*15;if((t+Z(i,71)*a)%a>5)continue;let o=i%n+.5,s=Math.floor(i/n)+.5,c=e.water[i];!this.peopleNear(n,i)&&this.onScreen(o,c*.2041337075784639,s)&&this.emit(pg,o,c-.15,s,Z(i,72)*6.28+t*.05)}}dolphins(e,t,n){let r=Math.sin(t*.025),i=Math.cos(t*.025)>=0?1:-1,a=n.x+n.dx*r*3,o=n.y+n.dy*r*3,s=Math.atan2(n.dy*i,n.dx*i);if(this.onScreen(a,e.seaLevel*.2041337075784639,o))for(let r=0;r<Fh.dolphins-1;r++){let c=(Z(r,41)-.5)*4,l=(Z(r,42)-.5)*2.4,u=a+n.dx*i*c-n.dy*l,d=o+n.dy*i*c+n.dx*l,f=3.5+Z(r,43)*2.5,p=t+Z(r,44)*f,m=p%f,h=1.3;if(m>=h)continue;let g=m/h,_=r%2==0&&(Math.floor(p/f)+r)%5==0,v=_?-.55+2.6*Math.sin(Math.PI*g):-.45+.5*Math.sin(Math.PI*g),y=(g-.5)*(_?.7:.4),b=u+Math.cos(s)*y,x=d+Math.sin(s)*y;this.emit(sg,b,e.seaLevel+v,x,s,(.5-g)*(_?1.5:.8)),(_?g<.15||g>.85:g<.2)&&this.emit(lg,b,e.seaLevel,x,0)}}turtles(e,t,n,r,i){let a=this.nests,o=0;for(let s=0;s*6<a.length&&s<Fh.nests;s++){let c=a[s*6],l=a[s*6+1],u=a[s*6+2],d=a[s*6+3],f=a[s*6+4],p=a[s*6+5],m=e.heightAt(c,l);if(!this.onScreen(c,m*.2041337075784639,l))continue;let h=Math.atan2(p-l,f-c);r>u&&r<=d&&this.emit(ug,c,m,l,h);let g=r===u&&n>=jh.nestHour||r===u+1&&n<jh.ashoreUntil;if(g||r===u+1&&n<12){let t=Math.hypot(f-c,p-l);for(let n=.3;n<t;n+=.22){let r=c+(f-c)*n/t,i=l+(p-l)*n/t;this.emit(cg,r,e.heightAt(r,i),i,h)}}if(g&&this.emit(mg,c,m,l,h+Math.PI+Math.sin(t*.8)*.15),!i||r!==d||!gg(n,jh.hatching))continue;let[_,v]=jh.hatching,y=Qh[0]+Math.floor(Z(s,u,80)*(Qh[1]-Qh[0])),b=_+Z(s,u,83)*(v-_)*.4;for(let r=0;r<y&&o<Fh.hatchlings;r++){let i=(n-(r>=y*.75?b+Zh+Z(s,r,81)*Math.max(0,v-Xh-b-Zh):b+Z(s,r,81)*Zh))/Xh;if(i<0||i>=1)continue;let a=(Z(s,r,82)-.5)*1.2,u=c+(f-c)*i-Math.sin(h)*a*i+Math.sin(t*9+r)*.02,d=l+(p-l)*i+Math.cos(h)*a*i;this.emit(hg,u,e.heightAt(u,d),d,h+Math.sin(t*9+r)*.4),o++}}}};function yg(e,t,n,r){return r*Math.sin(e*(.31+t*.07)+t*2.1+n*2.3)}var bg=[[1,0],[-1,0],[0,1],[0,-1]];function xg(e,t,n){return e.inBounds(t,n)&&e.isWater(t,n)&&e.water[e.index(t,n)]===e.seaLevel}function Sg(e,t,n){let r=1/0,i=[t+.5,n+.5];for(let a=-12;a<=12;a++)for(let o=-12;o<=12;o++){let s=o*o+a*a;s>=r||!xg(e,t+o,n+a)||(r=s,i=[t+o+.5,n+a+.5])}return i}var Cg={free:0,toDesk:1,checkingIn:2,toRoom:3,inRoom:4,toVenue:5,atVenue:6,toCar:7,inCar:8,checkingOut:9,sliding:10,stepping:11},wg={none:0,sit:1,lie:2,eat:3,swim:4,stand:5,slide:6,wade:7,float:8,kayak:9,board:10},Tg={none:0,drink:1,towel:2,bag:3},Eg=2*Yc.radius;Eg*1.02,Yc.stuckSeconds*Jc.ticksPerSecond,Eg*.95,Yc.slumpBelow,Yc.slumpPace,Yc.settleWithin,Yc.settleAfterTicks;var Dg=new Float64Array(Of.rays),Og=new Float64Array(Of.rays);for(let e=0;e<Of.rays;e++){let t=e/Of.rays*8,n=Math.floor(t)%8,r=t-Math.floor(t),i=[1,1-r,-r,-1,-1,r-1,r,1][n],a=[r,1,1,1-r,-r,-1,-1,r-1][n],o=Math.sqrt(i*i+a*a);Dg[e]=i/o,Og[e]=a/o}var kg={none:-1,pool:-2,road:-3},Ag=[`energy`,`hunger`,`thirst`,`bladder`,`fun`,`relaxation`,`comfort`],jg={energy:`Energy`,hunger:`Hunger`,thirst:`Thirst`,bladder:`Bladder`,fun:`Fun`,relaxation:`Relaxation`,comfort:`Comfort`},Mg={honeymoon:{name:`Honeymooners`,share:.22,party:[2,2],weight:{relaxation:1.4,comfort:1.2,fun:.7},loves:[`spa`,`restaurant`,`villa`,`bungalow`,`fountain`,`shadeTree`,`flowerBed`,`cabana`,`waterfall`],dislikes:[`kidsClub`,`poolBar`],priceSensitivity:.2,noiseSensitivity:1,budget:735,bedtime:22.5,wake:8.5,dinner:19.5,week:{arrive:[1,.6,.6,.6,.8,1,2.2],nights:[[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9]]}},family:{name:`Families`,share:.34,party:[3,5],weight:{fun:1.4,hunger:1.2,bladder:1.2},loves:[`kidsClub`,`beachShack`,`lifeguard`,`coffeeKiosk`,`beachHut`,`slide`],dislikes:[`spa`],priceSensitivity:.9,noiseSensitivity:.3,budget:245,bedtime:21,wake:7,dinner:17.5,week:{arrive:[.5,.3,.3,.4,1,3,1.2],nights:[[4,5],[3,4],[3,4],[3,4],[2,3],[7,7],[6,7]]}},wellness:{name:`Wellness`,share:.18,party:[1,2],weight:{relaxation:1.5,comfort:1.1,fun:.6},loves:[`spa`,`restaurant`,`shadeTree`,`flowerBed`,`hedge`,`bench`,`cabana`,`waterfall`],dislikes:[`poolBar`,`kidsClub`],priceSensitivity:.3,noiseSensitivity:.9,budget:560,bedtime:22,wake:6.5,dinner:18.5,week:{arrive:[1,.5,.5,.5,1.2,.5,2.5],nights:[[4,5],[3,4],[2,3],[2,3],[2,2],[1,2],[5,5]]}},young:{name:`Young groups`,share:.26,party:[3,5],weight:{fun:1.5,thirst:1.3,relaxation:.6},loves:[`poolBar`,`beachShack`,`beachHut`,`restaurant`,`swimUpBar`,`slide`],dislikes:[`spa`],priceSensitivity:.6,noiseSensitivity:.1,budget:315,bedtime:25,wake:10,dinner:20,week:{arrive:[.3,.3,.4,1,3,1.2,.3],nights:[[2,4],[2,4],[2,4],[3,4],[2,3],[1,2],[2,4]]}}},Q=(e,t,n,r)=>({trigger:e,mood:t,text:n,segment:r}),Ng=[Q(`hungry`,-1,`I could eat a whole pineapple. Where is the food?`),Q(`hungry`,-1,`My stomach is louder than the waves.`),Q(`hungry`,-1,`Is there anywhere to eat that isn’t a vending machine?`),Q(`hungry`,-1,`The kids are hungry, which means everyone is hungry.`,`family`),Q(`hungry`,-1,`Skipped breakfast for the view. Regretting it.`,`honeymoon`),Q(`ate`,1,`That poke bowl at the {place} was perfect.`),Q(`ate`,1,`Fish tacos at the {place}. I would move here for these.`),Q(`ate`,1,`The {place} had a green smoothie I didn’t have to apologise for.`,`wellness`),Q(`ate`,1,`Everyone ate something without complaining. A miracle.`,`family`),Q(`ate`,1,`Late-night fries at the {place}. Best decision of the trip.`,`young`),Q(`dinner`,1,`Candlelit dinner at the {place}. I may cry.`,`honeymoon`),Q(`dinner`,1,`Dinner at the {place} with the sea right there. Unreal.`),Q(`dinner`,-1,`Waited forty minutes for a table at the {place}.`),Q(`thirsty`,-1,`So thirsty. Is there a bar anywhere near here?`),Q(`thirsty`,-1,`I’d trade my sunglasses for a cold drink.`),Q(`thirsty`,-1,`Walked all this way without a single drinks stand.`),Q(`drank`,1,`Coconut water from the {place}. Exactly right.`),Q(`drank`,1,`The {place} makes a mean iced coffee.`),Q(`drank`,1,`Two-for-one at the {place}. We are making friends.`,`young`),Q(`bar`,1,`The {place} is where the fun is.`,`young`),Q(`bar`,-1,`The {place} closed before the party even started.`,`young`),Q(`bladder`,-1,`Where are the restrooms? Asking urgently.`),Q(`bladder`,-1,`Nobody tells you how far the restrooms are from the beach.`),Q(`bladder`,-1,`The little one needs the bathroom. Right now.`,`family`),Q(`relieved`,1,`Found clean restrooms just in time. Small mercies.`),Q(`tired`,-1,`I could fall asleep on this path.`),Q(`tired`,-1,`My feet have filed a complaint.`),Q(`tired`,-1,`Too tired to have fun. That’s a new one.`,`young`),Q(`slept`,1,`Slept like a log. A very relaxed log.`),Q(`slept`,1,`Woke up to birdsong instead of an alarm.`),Q(`noiseNight`,-1,`The music from the {place} kept me up last night.`),Q(`noiseNight`,-1,`Someone at the {place} sang until two in the morning.`),Q(`noiseNight`,-1,`Could hear the {place} through the pillow I had over my head.`,`honeymoon`),Q(`bored`,-1,`Is this it? There’s nothing to do.`),Q(`bored`,-1,`I’ve read the whole menu twice. I am that bored.`),Q(`bored`,-1,`The kids are bored. The kids are never quietly bored.`,`family`),Q(`bored`,-1,`We came for a party and found a library.`,`young`),Q(`hadFun`,1,`That was the most fun I’ve had all year.`),Q(`hadFun`,1,`Laughed so hard I snorted pool water.`),Q(`activities`,1,`Kayaked out past the reef from the {place}. Saw a turtle!`),Q(`activities`,1,`Snorkel gear from the {place} and the reef to ourselves.`),Q(`kidsClub`,1,`The kids’ club! Two hours of peace. Two whole hours.`,`family`),Q(`kidsClub`,1,`They made a volcano out of papier-mâché at the {place}.`,`family`),Q(`kidsClub`,-1,`Somebody built a kids’ club next to our quiet spot.`,`honeymoon`),Q(`tense`,-1,`I came here to unwind and I am still wound.`),Q(`tense`,-1,`My shoulders are up by my ears again.`,`wellness`),Q(`relaxed`,1,`Lay in the shade and thought about absolutely nothing.`),Q(`relaxed`,1,`A bench, a breeze and a view. That’s the whole list.`),Q(`spa`,1,`The massage at the {place} rearranged my soul.`,`wellness`),Q(`spa`,1,`Couples’ treatment at the {place}. Bliss.`,`honeymoon`),Q(`spa`,-1,`Wanted the spa and there isn’t one. What kind of resort is this?`,`wellness`),Q(`hot`,-1,`It is very, very hot. Shade, please.`),Q(`hot`,-1,`The sun is trying to cook me.`),Q(`hot`,-1,`Not a single tree on this whole stretch.`),Q(`cooled`,1,`Shade under the {place}. Heaven.`),Q(`cooled`,1,`Jumped in the pool and felt human again.`),Q(`sunburned`,-1,`I am the colour of the hibiscus now. Ouch.`),Q(`sunburned`,-1,`Forgot sunscreen. My shoulders will remember.`),Q(`pool`,1,`The pool is the exact temperature of happiness.`),Q(`pool`,1,`Floated in the pool for an hour. Zero regrets.`),Q(`pool`,-1,`The pool is a soup of strangers.`),Q(`pool`,1,`The shallow end is perfect for the little ones.`,`family`),Q(`slide`,1,`The slide is terrifying. Again!`),Q(`slide`,1,`Went down the slide eleven times. Twelve.`),Q(`slide`,1,`Headfirst down the slide. Do not tell my mother.`,`young`),Q(`slide`,1,`The kids want to live on the slide now.`,`family`),Q(`slide`,-1,`That slide was far too much for me.`),Q(`lazyRiver`,1,`Floated round the lazy river until I forgot my own name.`),Q(`lazyRiver`,1,`Three laps of the lazy river and nobody argued once.`,`family`),Q(`lazyRiver`,1,`The lazy river is the best idea anyone ever had.`,`young`),Q(`waterfall`,1,`Sat under the waterfall and let it pound my shoulders.`),Q(`waterfall`,1,`Kissed behind the waterfall. Like a film.`,`honeymoon`),Q(`waterfall`,1,`The waterfall drowns out everything else.`,`wellness`),Q(`swimUpBar`,1,`A drink without leaving the water. Civilisation.`),Q(`swimUpBar`,1,`Spent the whole afternoon at the swim-up bar.`,`young`),Q(`swimUpBar`,1,`Ordered a piña colada waist-deep in the pool.`),Q(`infinityEdge`,1,`Swam to the edge and the pool just poured into the view.`),Q(`infinityEdge`,1,`The edge of the pool disappears. How do they do that?`),Q(`infinityEdge`,1,`The infinity pool at sunset. I have no words left.`,`honeymoon`),Q(`splashPad`,1,`The little ones shrieked in the fountains for an hour. Happy shrieks.`,`family`),Q(`splashPad`,1,`The splash pad wore the kids out. Bless it.`,`family`),Q(`poolKids`,-1,`Too many children shrieking at the pool for my liking.`),Q(`poolKids`,-1,`We came for romance, not a splash pad soundtrack.`,`honeymoon`),Q(`quietPool`,1,`An adults-only pool. Bliss.`),Q(`quietPool`,1,`Silent laps in the quiet pool at dawn.`,`wellness`),Q(`poolShade`,-1,`Not a scrap of shade by the pool.`),Q(`poolShade`,-1,`Roasted on a lounger with nowhere to hide from the sun.`),Q(`poolDull`,-1,`The pool is a plain blue box.`),Q(`poolDull`,-1,`Nothing to do at the pool but get wet.`,`young`),Q(`poolCrowded`,-1,`Couldn’t find a spot in the pool.`),Q(`poolCrowded`,-1,`Shoulder to shoulder in the shallow end.`),Q(`cabana`,1,`Rented a cabana for the afternoon. Never leaving.`),Q(`cabana`,1,`Our own cabana by the pool. We felt like royalty.`,`honeymoon`),Q(`beach`,1,`Walked the beach at dawn. Not another soul.`),Q(`beach`,1,`Toes in the sand, drink in hand.`),Q(`beach`,1,`Built a sandcastle. Lost to the tide. Built another.`,`family`),Q(`beach`,-1,`The beach is a long way from our room.`),Q(`view`,1,`The view from our lanai is unreal.`),Q(`view`,1,`Woke up and the ocean was just there.`,`honeymoon`),Q(`view`,1,`You can see the whole bay from up here.`),Q(`viewLake`,1,`The lake is like glass first thing in the morning.`),Q(`viewLake`,1,`Watched the mist lift off the water from our balcony.`,`wellness`),Q(`viewMountain`,1,`Woke up to the mountains right outside the window.`),Q(`viewMountain`,1,`The light on the peaks at sunset. I have no words.`,`honeymoon`),Q(`viewMountain`,1,`The kids keep counting the peaks. They get a different number every time.`,`family`),Q(`badView`,-1,`Our window looks straight at the {place}.`),Q(`badView`,-1,`Paid for an ocean view and got a view of the {place}.`),Q(`scenery`,1,`So many flowers. It smells like a perfume shop.`),Q(`scenery`,1,`The gardens here are gorgeous.`,`wellness`),Q(`scenery`,1,`Palms everywhere. I feel like a postcard.`),Q(`scenery`,-1,`Where did all the trees go? It’s all concrete here.`),Q(`scenery`,-1,`This corner of the resort looks like a loading dock.`),Q(`sunset`,1,`The sunset from our lanai was unreal.`,`honeymoon`),Q(`sunset`,1,`Watched the sun go down over the water. Everyone went quiet.`),Q(`sunset`,1,`Golden hour made everyone look ten years younger.`),Q(`torches`,1,`The torches along the paths at night are magical.`),Q(`torches`,1,`Walking back by torchlight. Very romantic.`,`honeymoon`),Q(`noise`,-1,`It’s so loud near the {place}. I can’t hear myself think.`),Q(`noise`,-1,`Somebody is having a lot of fun at the {place}. Too much fun.`,`wellness`),Q(`noise`,-1,`Kids screaming by the {place}. Lovely for them.`,`honeymoon`),Q(`quiet`,1,`So quiet you can hear the palms.`,`wellness`),Q(`quiet`,1,`Peace and quiet at last.`),Q(`quiet`,-1,`It’s like a church in here. Where’s the music?`,`young`),Q(`kids`,-1,`There are a lot of children here for a romantic getaway.`,`honeymoon`),Q(`noKids`,1,`Not a single child in sight. Paradise.`,`honeymoon`),Q(`backOfHouse`,-1,`I’ve walked past the {place} three times today.`),Q(`backOfHouse`,-1,`Is that the {place}? Why is it next to the pool?`),Q(`servicePath`,-1,`We keep ending up on the service path behind the bins.`),Q(`servicePath`,-1,`Saw a laundry trolley go by. Romance is dead.`,`honeymoon`),Q(`longWalk`,-1,`Our room is a hike from everything.`),Q(`longWalk`,-1,`Carrying a beach bag, a cooler and a toddler this far is a sport.`,`family`),Q(`longWalk`,-1,`Why is the {place} so far away?`),Q(`stairs`,-1,`All these stairs! My calves are crying.`),Q(`stairs`,1,`The steps up the hill are worth it for the view.`),Q(`hill`,-1,`Who put the resort on a mountain?`),Q(`hill`,1,`Walked up the hill and the whole coast opened up.`),Q(`lost`,-1,`We’ve been walking in circles. Where is anything?`),Q(`lost`,-1,`The paths here go nowhere. Literally nowhere.`),Q(`crowded`,-1,`It’s so crowded by the {place}.`),Q(`crowded`,-1,`Had to queue to walk down the path.`),Q(`crowded`,1,`Love the buzz around the {place}.`,`young`),Q(`litter`,-1,`There’s rubbish by the {place}. Not a good look.`),Q(`drinkPrice`,-1,`{price} for a mai tai?!`),Q(`drinkPrice`,-1,`{price} for a drink at the {place}. It had better change my life.`),Q(`foodPrice`,-1,`{price} for a sandwich. It wasn’t even a good sandwich.`),Q(`foodPrice`,-1,`Feeding four at these prices needs a second mortgage.`,`family`),Q(`foodPrice`,-1,`{price}? For a kids’ portion?`,`family`),Q(`roomPrice`,-1,`Our room costs {price} a night and the towels are thin.`),Q(`roomPrice`,-1,`{price} a night. For that I expected a butler.`,`young`),Q(`price`,-1,`{price} at the {place}. I’ll be thinking about that all week.`),Q(`price`,-1,`{price} for an hour at the {place}? I could fly home for that.`,`family`),Q(`goodValue`,1,`Honestly, {price} for that is a bargain.`),Q(`goodValue`,1,`Good food, fair prices. Coming back.`),Q(`goodValue`,1,`Splurged at the {place} and it was worth every cent.`,`honeymoon`),Q(`arrived`,1,`We’re here! It smells like flowers and sunscreen.`),Q(`arrived`,1,`First glimpse of the sea from the car. Squeal.`),Q(`arrived`,-1,`Long drive. Somebody get me a drink.`),Q(`checkedIn`,1,`The front desk had our names and a cold towel ready.`),Q(`checkedIn`,-1,`Queued at the lobby for ages to check in.`),Q(`noRoom`,-1,`They’ve lost our booking. There’s no room.`),Q(`roomNice`,1,`Our room is gorgeous. I’m never leaving.`),Q(`roomNice`,1,`The bungalow has its own steps down to the sand!`,`honeymoon`),Q(`roomNice`,-1,`The room is fine. Just fine. Very fine.`),Q(`checkout`,1,`Booking next year before we even leave.`),Q(`checkout`,1,`Best holiday we’ve had. The kids agree, which never happens.`,`family`),Q(`checkout`,-1,`Can’t wait to get home and have a holiday.`),Q(`checkout`,-1,`Leaving a long review. You’ve been warned.`),Q(`rain`,-1,`Rain on holiday. Of course.`),Q(`rain`,1,`Warm rain on a tin roof. Lovely, actually.`,`wellness`),Q(`rain`,-1,`Soaked to the skin between the room and breakfast.`),Q(`rain`,1,`Dancing in the rain! We are on holiday!`,`young`),Q(`rainBored`,-1,`Raining, and nothing to do but stare at the room.`),Q(`rainBored`,-1,`The kids have read every leaflet in the room. Twice.`,`family`),Q(`rainBored`,-1,`Rainy day, and not a single thing on indoors.`,`young`),Q(`rainIndoors`,1,`Rainy afternoon at the {place}. Perfect, actually.`),Q(`rainIndoors`,1,`Let it rain. We’re at the {place}.`,`wellness`),Q(`rainIndoors`,1,`The {place} saved the rainy day.`,`family`),Q(`heatwave`,-1,`It is too hot to think. Too hot to move. Too hot.`),Q(`heatwave`,-1,`This heat. My sunglasses are sweating.`),Q(`heatwave`,-1,`The little ones are wilting in this heat.`,`family`),Q(`storm`,-1,`A storm on our holiday. The palms are bent double.`),Q(`storm`,-1,`Sitting out the storm in our room. At least the bed is comfy.`),Q(`storm`,1,`Watching the storm roll in over the sea. Wild.`,`young`),Q(`poolClosed`,-1,`The pool is closed! Something about the pump.`),Q(`poolClosed`,-1,`Put my swimsuit on for nothing. The pool’s broken.`),Q(`poolClosed`,-1,`The kids were promised a pool. The pool is closed.`,`family`),Q(`noAircon`,-1,`The air conditioning in our room is dead. It’s a sauna.`),Q(`noAircon`,-1,`Slept on top of the sheets. The AC is broken.`),Q(`noAircon`,-1,`No AC. Romantic, if you like sweating.`,`honeymoon`),Q(`kitchenClosed`,-1,`The {place} is shut. The kitchen’s broken down.`),Q(`kitchenClosed`,-1,`Dinner cancelled: the kitchen is out of order.`),Q(`roomNotMade`,-1,`Back from the beach and the room still isn’t made up.`),Q(`roomNotMade`,-1,`Wet towels on the floor since this morning. Nobody’s been in.`),Q(`roomNotMade`,-1,`No fresh towels, no turned-down bed. Did housekeeping forget us?`,`honeymoon`),Q(`beachWatched`,1,`A lifeguard on the beach, so the kids could swim. Bliss.`,`family`),Q(`beachWatched`,1,`Swam out past the waves with the lifeguard keeping an eye on me.`),Q(`beachUnwatched`,-1,`No lifeguard on the beach. We kept the kids out of the sea.`,`family`),Q(`beachUnwatched`,-1,`Nobody watching the water. I stayed in the shallows.`),Q(`activities`,1,`Stood up on a paddleboard for nearly a whole minute.`),Q(`activities`,1,`Paddled a kayak out and looked back at the resort from the water.`),Q(`activities`,1,`The kids paddled their own kayak. Proud and soaked.`,`family`),Q(`activities`,1,`Paddleboard race. I lost. I fell in. Best afternoon yet.`,`young`),Q(`bridge`,1,`Stopped on the little bridge to watch the fish.`),Q(`bridge`,1,`Dry feet all the way across, thanks to the boardwalk.`),Q(`fineDinner`,1,`Seven courses at the {place}. I’ll be talking about that for years.`),Q(`fineDinner`,1,`The tasting menu at the {place}. Worth every cent.`,`honeymoon`),Q(`fineDinner`,1,`Best meal of my life, at the {place}. And the wine!`),Q(`spaDay`,1,`A whole afternoon at the {place}: the pools, the steam, a massage. Reborn.`),Q(`spaDay`,1,`Side by side at the {place}. The best hour of the trip.`,`honeymoon`),Q(`spaDay`,1,`The hydrotherapy pool at the {place} is the real thing.`,`wellness`),Q(`concierge`,1,`The concierge got us a boat for tomorrow and a table for tonight. Effortless.`),Q(`concierge`,1,`The concierge remembered our names. And our anniversary.`,`honeymoon`),Q(`workout`,1,`Forty minutes on the treadmill before breakfast. Smug all day.`),Q(`workout`,1,`A gym with a sea breeze. I did an extra set just to stay.`),Q(`workout`,1,`Morning workout done before the others woke up.`,`family`),Q(`workout`,1,`Leg day, then the pool bar. Balance.`,`young`),Q(`workout`,1,`Worked out together at dawn. We’re that couple now.`,`honeymoon`),Q(`workout`,1,`Stretched, lifted, breathed. Ready for anything.`,`wellness`),Q(`yogaClass`,1,`Yoga on the studio deck at the {place}. A new person.`),Q(`yogaClass`,1,`The class at the {place} was hard and wonderful.`),Q(`yogaClass`,1,`Sunrise yoga, breakfast, the spa. That’s the whole plan.`,`wellness`),Q(`noGym`,-1,`No gym? Where am I meant to work off the buffet?`),Q(`noGym`,-1,`Packed my trainers for nothing. There’s no gym.`,`wellness`),Q(`noGym`,-1,`No gym, so it’s press-ups on the balcony again.`,`young`),Q(`tennis`,1,`A proper game of tennis in the cool of the morning.`),Q(`tennis`,1,`Lost in straight sets and loved every minute.`),Q(`tennis`,1,`Family doubles. Nobody’s speaking to Dad.`,`family`),Q(`pickleball`,1,`Pickleball! I see what the fuss is about.`),Q(`pickleball`,1,`Pickleball tournament: losers buy the drinks.`,`young`),Q(`pickleball`,1,`The kids beat us at pickleball. Twice.`,`family`),Q(`lesson`,1,`The coach fixed my serve in an hour.`),Q(`lesson`,1,`A lesson with the pro. Worth every cent.`),Q(`paddles`,-1,`Pock. Pock. Pock. The {place} never stops.`),Q(`paddles`,-1,`The {place} sounds like popcorn that never finishes popping.`),Q(`paddles`,-1,`Our quiet lie-in, scored by the {place}.`,`honeymoon`),Q(`birdsong`,1,`Nothing but birdsong out here. Bliss.`),Q(`birdsong`,1,`A little red-headed bird keeps singing at me from the frangipani.`),Q(`birdsong`,1,`Woke to the birds, not the alarm. I could live like this.`,`wellness`),Q(`birdsong`,1,`The gardens are full of birds. The kids are trying to count them.`,`family`),Q(`dolphins`,1,`DOLPHINS! A whole pod, right there off the beach!`),Q(`dolphins`,1,`Dolphins spinning out of the water before breakfast. Unreal.`),Q(`dolphins`,1,`Watched dolphins from our balcony with our coffee. Best morning ever.`,`honeymoon`),Q(`dolphins`,1,`The kids saw dolphins. We will hear about nothing else for a year.`,`family`),Q(`turtle`,1,`A sea turtle swam right past me. I may have screamed into my snorkel.`),Q(`turtle`,1,`A turtle came up the beach in the dark to lay her eggs. We kept well back and whispered.`),Q(`turtle`,1,`Swam alongside a turtle for a whole minute. Life made.`,`young`),Q(`hatchlings`,1,`Baby turtles scrambling down the sand to the sea. I cried. Everyone cried.`),Q(`hatchlings`,1,`A turtle nest hatched this morning and we were there. Tiny flippers everywhere!`),Q(`hatchlings`,1,`The kids cheered every single hatchling into the waves.`,`family`),Q(`crabs`,1,`Ghost crabs all over the sand at dusk. They run sideways like they’re late for something.`),Q(`crabs`,1,`The kids chased ghost crabs along the beach until it was dark.`,`family`),Q(`geckos`,1,`A gecko on the window, chirping at the moths. We’ve named him Kevin.`),Q(`geckos`,1,`A little lizard on our window, eating the bugs. Good lad.`),Q(`geckos`,1,`There is a LIZARD on our window. The kids are thrilled. I am less thrilled.`,`family`),Q(`upgraded`,1,`They needed our room for some work and moved us to a better one. No charge!`),Q(`upgraded`,1,`A free upgrade to the {place}. I could get used to this.`),Q(`upgraded`,1,`Moved to a nicer room, and they carried our bags. Romantic, actually.`,`honeymoon`),Q(`upgraded`,1,`New room, more space, same price. The kids have claimed the balcony.`,`family`),Q(`walked`,-1,`They’re sending us to another hotel. In the middle of our holiday!`),Q(`walked`,-1,`Packed our bags again for a taxi to some other hotel. Not the plan.`),Q(`walked`,-1,`Our honeymoon, moved to a hotel down the road. Lovely.`,`honeymoon`)],Pg=`Aiko.Alana.Amara.Anders.Ari.Beatriz.Bodhi.Carmen.Chen.Dami.Dara.Diego.Elif.Emeka.Esme.Farah.Felix.Gaurav.Hana.Hemi.Ines.Isaac.Jae.Jalen.Kai.Kalani.Keoni.Kiri.Lars.Leilani.Lena.Luca.Mahina.Malia.Mateo.Mei.Mila.Nalu.Nia.Noa.Olu.Omar.Pania.Priya.Rafael.Rangi.Rosa.Ruth.Sakura.Sami.Sione.Sofia.Tama.Tariq.Tavita.Teo.Uma.Valentina.Wen.Xavier.Yara.Yusuf.Zainab.Zoe`.split(`.`),Fg=`Abara.Akana.Bergström.Castillo.Chang.Delacroix.Dube.Eriksen.Fonoti.García.Haddad.Hale.Iwasaki.Jensen.Kahananui.Kapoor.Keliʻi.Kowalski.Lindqvist.Makoa.Mendes.Moana.Nakamura.Nguyen.Okafor.Ortega.Palakiko.Patel.Quintero.Rahman.Rossi.Sato.Silva.Tanaka.Tuilagi.Ueda.Vaughan.Wairua.Whitfield.Yamada.Zhou`.split(`.`),Ig=[`sleep`,`noise`,`room`,`view`,`food`,`drinks`,`pool`,`beach`,`fun`,`kids`,`spa`,`service`,`value`,`grounds`,`gettingAround`,`comfort`,`weather`,`breakdowns`,`calm`],Lg={hungry:[`food`,1],ate:[`food`,1],dinner:[`food`,2.5],foodPrice:[`value`,1],thirsty:[`drinks`,1],drank:[`drinks`,1],bar:[`drinks`,1.5],swimUpBar:[`drinks`,2],drinkPrice:[`value`,1],bladder:[`comfort`,.7],relieved:[`comfort`,.3],hot:[`comfort`,1],cooled:[`comfort`,.5],sunburned:[`comfort`,1.5],poolShade:[`comfort`,1.5],heatwave:[`comfort`,1.5],tired:[`sleep`,1],slept:[`sleep`,1.5],bored:[`fun`,1.5],hadFun:[`fun`,1.5],activities:[`fun`,2],tense:[`calm`,1],relaxed:[`calm`,1],noise:[`noise`,1.5],noiseNight:[`noise`,3],quiet:[`noise`,1.2],view:[`view`,2],viewLake:[`view`,2],viewMountain:[`view`,2],badView:[`view`,2.5],scenery:[`grounds`,1],servicePath:[`grounds`,1.5],backOfHouse:[`grounds`,1.5],litter:[`grounds`,1],sunset:[`grounds`,1.5],torches:[`grounds`,1],longWalk:[`gettingAround`,1.5],lost:[`gettingAround`,1.2],stairs:[`gettingAround`,1],hill:[`gettingAround`,1],crowded:[`service`,1.2],checkedIn:[`service`,1],price:[`value`,1.2],roomPrice:[`value`,2.5],goodValue:[`value`,1.5],kids:[`kids`,1.5],noKids:[`kids`,1.5],kidsClub:[`kids`,2],splashPad:[`kids`,2],poolKids:[`kids`,1.5],pool:[`pool`,1.5],slide:[`pool`,2.5],lazyRiver:[`pool`,2.5],waterfall:[`pool`,2],infinityEdge:[`pool`,3],quietPool:[`pool`,2],poolDull:[`pool`,1.5],poolCrowded:[`pool`,1.5],cabana:[`pool`,2],beach:[`beach`,1.5],spa:[`spa`,2.5],noRoom:[`room`,6],roomNice:[`room`,2],rain:[`weather`,1],rainBored:[`weather`,2.5],rainIndoors:[`weather`,2],storm:[`weather`,1.5],poolClosed:[`breakdowns`,2.5],noAircon:[`breakdowns`,3],kitchenClosed:[`breakdowns`,2],roomNotMade:[`room`,1.5],beachWatched:[`beach`,2],beachUnwatched:[`beach`,1.5],bridge:[`grounds`,1],fineDinner:[`food`,4.5],spaDay:[`spa`,4],concierge:[`service`,3],workout:[`calm`,1.5],yogaClass:[`calm`,2.5],noGym:[`fun`,2.5],tennis:[`fun`,1.5],pickleball:[`fun`,1.5],lesson:[`fun`,2],paddles:[`noise`,1.5],birdsong:[`grounds`,1.5],dolphins:[`view`,3],turtle:[`beach`,3],hatchlings:[`beach`,5],crabs:[`beach`,1],upgraded:[`room`,2.5],walked:[`room`,6]},Rg={start:3,prior:6,halfLife:30,own:1,other:.3,demandPerStar:.45,payPerStar:.1,kept:60,settle:.1},zg=[{name:`A restaurant`,hint:`A restaurant, with a kitchen`,has:[`restaurant`]},{name:`Casual food`,hint:`A beach shack or a coffee kiosk`,has:[`beachShack`,`coffeeKiosk`]},{name:`A bar`,hint:`A pool bar or a swim-up bar`,has:[`poolBar`,`swimUpBar`]},{name:`A pool`,hint:`Any pool`,has:[`pool`]},{name:`Pool features`,hint:`A slide, a waterfall, a lazy river that flows, or a splash pad`,has:[`slide`,`waterfall`,`poolFeature`]},{name:`A spa`,hint:`A spa, with a therapist`,has:[`spa`]},{name:`A kids’ club`,hint:`A kids’ club`,has:[`kidsClub`]},{name:`Activities`,hint:`A beach activity hut, or a tennis or pickleball court`,has:[`beachHut`,`tennisCourt`,`tennisCourtLit`,`pickleballCourt`,`pickleballCourtLit`]},{name:`A gym`,hint:`A gym: hotels rated four stars and up have a fitness centre`,has:[`gym`]}],Bg={base:1.5,perKind:.5},$=(e,t,n,r)=>({key:e,mood:t,text:n,segment:r}),Vg=[$(`sleep`,1,`Slept like logs every single night.`),$(`sleep`,1,`The beds are clouds. Expensive clouds, but clouds.`),$(`sleep`,-1,`We barely slept.`),$(`sleep`,-1,`Never once got a full night’s sleep.`),$(`noise`,1,`Blissfully quiet.`),$(`noise`,1,`So quiet at night you could hear the waves.`),$(`noise`,1,`Quiet enough to hear the palms, which is exactly what we came for.`,`wellness`),$(`noise`,-1,`The {place} was loud day and night.`),$(`noise`,-1,`Noise everywhere. Bring earplugs.`),$(`noiseNight`,-1,`The music from the {place} kept us up every night.`),$(`noiseNight`,-1,`Our room was right by the {place}. Sleep was not an option.`),$(`noiseNight`,-1,`Came for a honeymoon, got a soundtrack from the {place} until 2 am.`,`honeymoon`),$(`room`,1,`Our room was gorgeous.`),$(`room`,1,`The room was spotless and the bed was huge.`),$(`room`,1,`Our villa was the most romantic room we have ever stayed in.`,`honeymoon`),$(`room`,-1,`The room wasn’t worth the money.`),$(`roomNotMade`,-1,`Housekeeping missed our room more days than not.`),$(`roomNotMade`,-1,`Nobody made up our room. We stopped expecting it.`),$(`noRoom`,-1,`They lost our booking. There was no room for us. We drove home.`),$(`noRoom`,-1,`Arrived to be told there was no room. Unbelievable.`),$(`view`,1,`The view from our room is the real reason to come.`),$(`view`,1,`Woke up to the ocean every morning.`),$(`view`,1,`The sea from our balcony at dawn. That’s the review.`,`honeymoon`),$(`viewMountain`,1,`The mountains from our window were breathtaking.`),$(`viewLake`,1,`The lake from our room was like glass every morning.`),$(`view`,-1,`Our “view” was of the {place}.`),$(`view`,-1,`Paid for a view and got a wall.`),$(`badView`,-1,`Paid for an ocean view and looked at the {place} all week.`),$(`food`,1,`The food was a highlight.`),$(`food`,1,`We ate well every single day.`),$(`dinner`,1,`Dinner by the water every night. Unforgettable.`),$(`dinner`,1,`Candlelit dinners at the {place}. Bliss.`,`honeymoon`),$(`food`,-1,`Finding something to eat was a daily expedition.`),$(`food`,-1,`Hungry kids and nowhere to feed them.`,`family`),$(`dinner`,-1,`Waited ages for a table at the {place}.`),$(`drinks`,1,`A cold drink was never more than a stroll away.`),$(`drinks`,1,`The {place} makes the best cocktails on the coast.`),$(`bar`,1,`The {place} was where the party was. Every night.`,`young`),$(`swimUpBar`,1,`Spent whole afternoons at the swim-up bar. No regrets.`),$(`drinks`,-1,`Nowhere to get a drink when you wanted one.`),$(`drinks`,-1,`The bar was a long walk from anywhere.`),$(`bar`,-1,`The {place} closed just as the night got going.`,`young`),$(`pool`,1,`The pool is a work of art.`),$(`pool`,1,`{place} is the best pool we have ever swum in.`),$(`pool`,1,`The kids never wanted to leave the pool.`,`family`),$(`slide`,1,`The slide at {place} was a huge hit.`),$(`slide`,1,`The kids went down the slide about a thousand times.`,`family`),$(`slide`,1,`That slide! Twelve goes and still screaming.`,`young`),$(`lazyRiver`,1,`Floating round the lazy river was the best hour of the trip.`),$(`waterfall`,1,`Swimming under the waterfall at {place} was magical.`),$(`infinityEdge`,1,`The infinity pool at {place} pours straight into the view. Stunning.`),$(`infinityEdge`,1,`Sunset in the infinity pool. We may never recover.`,`honeymoon`),$(`quietPool`,1,`An adults-only pool! Peace at last.`),$(`cabana`,1,`Rent a cabana by the pool. Trust us.`),$(`pool`,-1,`The pool was nothing special.`),$(`poolDull`,-1,`{place} is a plain blue box. Nothing to do but get wet.`),$(`poolCrowded`,-1,`You couldn’t move in {place} for people.`),$(`poolCrowded`,-1,`The pool was packed every afternoon.`),$(`beach`,1,`The beach was empty at dawn and perfect all day.`),$(`beach`,1,`Toes in the sand every day.`),$(`beach`,-1,`The beach was a trek from everything.`),$(`fun`,1,`Never a dull moment.`),$(`fun`,1,`The kids never once said they were bored. A miracle.`,`family`),$(`activities`,1,`Kayaks, snorkels and a turtle. What more could you want?`),$(`fun`,-1,`Nothing to do after the first day.`),$(`fun`,-1,`Bored stiff by day two.`),$(`fun`,-1,`We came for a good time and found a library.`,`young`),$(`fun`,-1,`Bored kids are loud kids, and ours were very bored.`,`family`),$(`kids`,1,`Great for children.`),$(`kidsClub`,1,`The kids’ club gave us our sanity back.`,`family`),$(`splashPad`,1,`Our toddler lived in the splash pad. Happy toddler, happy holiday.`,`family`),$(`noKids`,1,`No children anywhere. Exactly what we wanted.`,`honeymoon`),$(`kids`,-1,`Children everywhere. Not the romantic break we’d hoped for.`,`honeymoon`),$(`kids`,-1,`Too many screaming children for a restful break.`,`wellness`),$(`kids`,-1,`Nothing here for children.`,`family`),$(`spa`,1,`The spa alone is worth the trip.`),$(`spa`,1,`Booked a treatment every day. Floated home.`,`wellness`),$(`spa`,-1,`No spa? At these prices?`,`wellness`),$(`service`,1,`Check-in was quick and friendly.`),$(`service`,1,`The staff couldn’t do enough for us.`),$(`service`,-1,`Queues for everything.`),$(`crowded`,-1,`Queued at the {place} for ages, every day.`),$(`checkedIn`,-1,`An hour in the lobby just to check in.`),$(`value`,1,`Great value for what you get.`),$(`goodValue`,1,`Fair prices everywhere. Refreshing.`),$(`value`,-1,`Eye-wateringly expensive.`),$(`value`,-1,`Feeding a family here costs a fortune.`,`family`),$(`roomPrice`,-1,`Far too much money for that room.`),$(`drinkPrice`,-1,`Drink prices at the {place} are daylight robbery.`),$(`foodPrice`,-1,`The prices at the {place} took our breath away, and not in a good way.`),$(`grounds`,1,`The gardens are gorgeous.`),$(`grounds`,1,`Flowers and palms everywhere you look.`),$(`torches`,1,`Torchlit paths at night. Magical.`),$(`sunset`,1,`The sunsets here are worth the flight alone.`),$(`grounds`,-1,`Too much concrete, not enough green.`),$(`backOfHouse`,-1,`Kept walking past the {place}. Not a holiday look.`),$(`servicePath`,-1,`Laundry carts and bins on the way to breakfast. Romance, dead.`,`honeymoon`),$(`servicePath`,-1,`We kept ending up behind the bins on the service paths.`),$(`gettingAround`,1,`Everything is a short stroll away.`),$(`gettingAround`,-1,`Everything is miles from everything else.`),$(`lost`,-1,`We got lost every single day.`),$(`stairs`,-1,`So. Many. Stairs.`),$(`longWalk`,-1,`Our room was a hike from everything, which is no fun with a toddler.`,`family`),$(`comfort`,1,`Plenty of shade and somewhere cool whenever we needed it.`),$(`comfort`,-1,`Nowhere to hide from the sun.`),$(`sunburned`,-1,`Sunburned on day one. There’s barely any shade.`),$(`poolShade`,-1,`Not a scrap of shade round the pool.`),$(`heatwave`,-1,`We came in a heat wave and could hardly cope.`),$(`weather`,1,`Even the rainy day was lovely.`),$(`rainIndoors`,1,`It rained one day, so we spent it at the {place}. Perfect.`),$(`rainIndoors`,1,`A rainy afternoon in the spa turned out to be the highlight.`,`wellness`),$(`weather`,-1,`Rain, and nowhere to go but our room.`),$(`rainBored`,-1,`It rained and there was nothing to do indoors.`),$(`rainBored`,-1,`One rainy day and the kids were climbing the walls. Nothing indoors for them.`,`family`),$(`storm`,-1,`A storm hit and we sat it out in our room.`),$(`breakdowns`,-1,`Things kept breaking.`),$(`poolClosed`,-1,`{place} was closed with a broken pump.`),$(`poolClosed`,-1,`The pool was shut half our stay. Something about a pump.`),$(`noAircon`,-1,`Our air conditioning died and nobody came to fix it.`),$(`noAircon`,-1,`No air conditioning in a heat wave. We slept in a puddle.`),$(`kitchenClosed`,-1,`The {place} shut because the kitchen broke down.`),$(`calm`,1,`We have never been so relaxed.`),$(`calm`,1,`Came home a different, calmer person.`,`wellness`),$(`calm`,-1,`Never managed to relax.`),$(`beachWatched`,1,`A lifeguard on the beach, so the kids swam in the sea every day.`,`family`),$(`beachUnwatched`,-1,`Nobody watching the sea, so the children never went in.`,`family`),$(`activities`,1,`Kayaks and paddleboards from the beach hut every afternoon.`),$(`workout`,1,`A lovely gym to start the day in.`),$(`yogaClass`,1,`Yoga on the deck every morning. Bliss.`,`wellness`),$(`yogaClass`,1,`The classes at the {place} were a highlight.`),$(`noGym`,-1,`No gym, at a resort like this.`),$(`noGym`,-1,`Brought our running shoes for nothing: there is no gym.`,`wellness`),$(`tennis`,1,`Tennis in the cool of the morning, then the pool. Perfect.`),$(`pickleball`,1,`We got hooked on pickleball.`),$(`lesson`,1,`Book a lesson with the coach. You won’t regret it.`),$(`paddles`,-1,`The pickleball court by our room popped from breakfast to dusk.`),$(`birdsong`,1,`The gardens are full of birdsong. We woke to it every day.`),$(`birdsong`,1,`Birds everywhere in the gardens, and so quiet you can hear every one.`,`wellness`),$(`dolphins`,1,`Dolphins off the beach one morning. We will never forget it.`),$(`dolphins`,1,`We watched a pod of dolphins from our balcony over breakfast.`,`honeymoon`),$(`turtle`,1,`We swam with a sea turtle. Bucket list, ticked.`),$(`hatchlings`,1,`We saw turtle hatchlings race down to the sea at dawn. The best thing that has ever happened to us.`),$(`hatchlings`,1,`A turtle nest hatched on the beach while we were there. The kids still talk about it.`,`family`),$(`crabs`,1,`Ghost crabs on the beach at dusk kept the kids busy for hours.`,`family`),$(`fineDinner`,1,`The tasting menu at the {place} was the meal of a lifetime.`),$(`fineDinner`,1,`Book the {place} for your last night. Trust us.`),$(`spaDay`,1,`Spent a whole day at the {place}. Heaven.`),$(`spaDay`,1,`The {place} alone is worth the trip.`),$(`concierge`,1,`The concierge thought of everything before we did.`),$(`upgraded`,1,`They moved us mid-stay for some building work, into a better room, at no extra cost.`),$(`walked`,-1,`Halfway through our stay they sent us to another hotel for building work.`),$(`walked`,-1,`They put us in a taxi to another hotel. They paid, but that isn’t the point.`)];Ig.length;var Hg=[`honeymoon`,`family`,`wellness`,`young`],Ug=[...new Set(Ng.map(e=>e.trigger))];new Map(Ug.map((e,t)=>[e,t]));var Wg=new Map;Ng.forEach((e,t)=>{let n=`${e.trigger}:${e.mood}:${e.segment??``}`,r=Wg.get(n);r?r.push(t):Wg.set(n,[t])});function Gg(e,t,n){let r=Ng[e-1];return r?r.text.replace(`{place}`,Jg(t)).replace(`{price}`,`$${n}`):``}var Kg={poolBar:`pool bar`,beachShack:`beach shack`,coffeeKiosk:`coffee kiosk`,kidsClub:`kids’ club`,beachHut:`activity hut`,housekeeping:`laundry`,maintenance:`maintenance shed`,shadeTree:`trees`,roomBlock:`room block`,oceanBlock:`ocean-view block`,tennisCourtLit:`tennis court`,pickleballCourtLit:`pickleball court`},qg={[kg.pool]:`pool`,[kg.road]:`road`};function Jg(e){let t=e>=0?su[e]:void 0;return t?Yg(t):qg[e]??`place`}function Yg(e){return Kg[e]??e.replace(/[A-Z]/g,e=>` ${e.toLowerCase()}`)}pu.riverSpacing,uu.shallow,uu.deep,uu.splash,uu.river,wg.sit,wg.eat,wg.lie,wg.stand,Ig.length,new Map(Ig.map((e,t)=>[e,t]));var Xg=Object.keys(Lg);new Map(Xg.map((e,t)=>[e,t+1]));var Zg=new Map;Vg.forEach((e,t)=>{let n=`${e.key}:${e.mood}`;Zg.set(n,[...Zg.get(n)??[],t])});function Qg(e){return Math.min(5,Bg.base+Bg.perKind*Math.max(0,e-1))}var $g={share:.15,least:20};function e_(e){return Math.max($g.least,Math.round(e*$g.share/10)*10)}function t_(e,t){return[[`west`,`east`],[`north`,`south`],[`east`,`west`],[`south`,`north`]][e&3][t]}function n_(e,t,n,r,i){let a=e_(Id(t)),o=e.occupancy.slice(),[s,c]=Pd(t);for(let n=t.y;n<t.y+c;n++)for(let r=t.x;r<t.x+s;r++)o[e.terrain.index(r,n)]=0;let l=Yd({...e,occupancy:o,objects:e.objects.filter(e=>e.id!==t.id),sandbox:!0},n,r,i);return l.ok?!e.sandbox&&e.cash<a?{ok:!1,cost:a,reason:`Not enough cash`}:{ok:!0,cost:a}:{ok:!1,cost:a,reason:l.reason}}1/Jc.ticksPerSecond,Hg.map(e=>{let{arrive:t,nights:n}=Mg[e].week,r=t.reduce((e,t,r)=>e+t*(n[r][0]+n[r][1])/2,0);return t.map(e=>e*7*5/r)}),Object.fromEntries(Ag.map((e,t)=>[e,t]));var r_=[`rooms`,`food`,`drink`,`spa`,`activities`],i_=[`wages`,`upkeep`,`utilities`,`goods`,`repairs`,`construction`,`land`,`interest`],a_=[`full`,`unready`,`price`,`storm`];function o_(e){return r_.reduce((t,n)=>t+e.revenue[n],0)}function s_(e){return i_.reduce((t,n)=>t+e.costs[n],0)}function c_(e){let t=o_(e)-e.revenue.rooms;return{occupancy:e.roomsAvailable?e.roomNights/e.roomsAvailable:0,adr:e.roomNights?e.nightValue/e.roomNights:0,revpar:e.roomsAvailable?e.nightValue/e.roomsAvailable:0,spendPerGuest:e.guestNights?t/e.guestNights:0,profit:o_(e)-s_(e)}}Object.keys(bu),Ml.length-1;var l_={start:5,end:23};(l_.end-l_.start)*ku;var u_={off:0,toPost:1,atPost:2,toRound:3,onRound:4,toClean:5,cleaning:6,toLinen:7,linen:8,toHome:9,resting:10,toFix:11,fixing:12,toInspect:13,inspecting:14,waiting:15,toWatch:16,watching:17},d_={welcome:{title:`Welcome to Kaleo Point`,text:`You have an inland lot at the end of the drive and $180,000. Make Kaleo Point a 3.5-star resort that fills 70% of its rooms in a high-season month, by the end of Year 1. July is a month away.`,button:{label:`See the goal`,to:{window:`goal`}}},buildLobby:{title:`First, the lobby`,text:`Guests drive up to the lobby’s arrival court to check in, then go out of its back door into the resort. Build the lobby with its arrival court where the drive can reach it: it turns to meet a road beside it, and R turns it yourself. Lay more road if you want it somewhere else.`,button:{label:`Build the lobby`,to:{window:`build`}}},buildRooms:{title:`Somewhere to sleep`,text:`Guests book once there are rooms to book. Lay a path from the back of the lobby, then build rooms beside it, their doors on the path: a guest wing, or a bungalow or two.`,button:{label:`Build rooms`,to:{window:`build`}}},roomsOpen:{title:`Open for bookings`,text:`Your first rooms are open. Booking requests come in from 10:00 to 19:00, and guests drive up to the lobby to check in. A new resort is featured for its first few weeks; after that, its reviews spread the word.`,button:{label:`Finances`,to:{window:`finances`}}},noDoor:{title:`The way in`,text:`Guests go in by a building’s door, and one of yours has no path to it yet, so nobody can use it. While you place a building, arrows mark its way in: green where it’s there, amber where a path should go. Tap a building to see what it’s missing.`},pricedOut:{title:`Turned away on price`,text:`Someone asked to book but wouldn’t pay the rate. What guests will pay depends on the room, its view and the resort’s star rating, and a new resort with little to do rates low. Lower your room rates in Finances, or add amenities to lift the rating.`,button:{label:`Finances`,to:{window:`finances`}}},slowBookings:{title:`Quiet days`,text:`Nobody asked to book today. Few people know Kaleo Point yet, and resort guests want more than a room: each kind of amenity, from food and a bar to a pool and activities, lets the resort rate half a star higher, and a better rating brings more bookings. A lower room rate draws more too.`,button:{label:`Amenities`,to:{window:`reviews`}}},firstGuests:{title:`Your first guests`,text:`A party has checked in. Tap any guest to follow them and see what they think of the place.`},noise:{title:`Noise`,text:`A guest was kept awake. Noise carries from pools, bars, the kids’ club, pickleball courts and the road; distance and hedges soften it.`,button:{label:`Show night noise`,to:{overlay:`noiseNight`}}},dirtyRoom:{title:`Housekeeping`,text:`Rooms need cleaning between guests. Housekeepers work from a housekeeping and laundry building; hire enough to keep up.`,button:{label:`Staff`,to:{window:`staff`}}},hungry:{title:`Something to eat`,text:`Guests are hungry. A coffee kiosk or beach shack is a cheap start. A restaurant has its own kitchen and needs a cook and a server; choose what it cooks to suit your guests.`,button:{label:`Build`,to:{window:`build`}}},restroom:{title:`Restrooms`,text:`Guests need a restroom near where they spend the day. Restaurants and bars have their own; elsewhere, build restrooms.`,button:{label:`Build`,to:{window:`build`}}},bored:{title:`Nothing to do`,text:`Guests are bored. A pool is the heart of most resorts; the beach, a spa or a kids’ club give them more to do.`,button:{label:`Build`,to:{window:`build`}}},longWalk:{title:`A long walk`,text:`Guests weigh the walk against what’s at the end of it. Put what they use every day near their rooms.`},backOfHouse:{title:`Behind the scenes`,text:`Guests don’t like seeing kitchens, laundries or service paths. Screen them with hedges, or keep them out of the way.`,button:{label:`Show back of house`,to:{overlay:`backOfHouse`}}},badView:{title:`The view`,text:`A guest didn’t think much of the view from their room. Rooms facing the sea, the pool or gardens earn more and please more.`,button:{label:`Show views`,to:{overlay:`view`}}},price:{title:`Prices`,text:`A guest thought something cost too much. Each kind of guest pays differently: watch who complains before you change prices.`,button:{label:`Finances`,to:{window:`finances`}}},fullHouse:{title:`Fully booked`,text:`Guests wanted to stay but every room was taken. Build more rooms, or raise your rates.`,button:{label:`Finances`,to:{window:`finances`}}},breakdown:{title:`Something broke`,text:`Pumps, air conditioning and kitchens wear out. Maintenance staff fix them, from a maintenance shed; until then, it stays broken.`,button:{label:`Staff`,to:{window:`staff`}}},firstReview:{title:`Your first review`,text:`Every party writes a review as it leaves. Reviews make your star rating, and the rating brings bookings.`,button:{label:`Read it`,to:{window:`reviews`}}},ratingCapped:{title:`More to do`,text:`Guests love their stays, but a resort with so few kinds of things to do can’t rate any higher. The reviews window lists what’s missing.`,button:{label:`See what’s missing`,to:{window:`reviews`}}},lowCash:{title:`Running low`,text:`Cash is running low. The bank will lend up to $200,000 at 8% a year: borrow in the finances window.`,button:{label:`Finances`,to:{window:`finances`}}},landForSale:{title:`Land for sale`,text:`The land around the lot belongs to neighbours. Tap a For Sale sign to see a plot. The beach path would let guests reach the sand.`,button:{label:`Land`,to:{window:`land`}}},landUnlocked:{title:`A new plot for sale`,text:`Kaleo Point’s rising rating has won over a neighbour: they’ll sell you their land now.`,button:{label:`Land`,to:{window:`land`}}},rain:{title:`Rain`,text:`Rain sends guests indoors: to restaurants, bars, the spa and the kids’ club. A resort with nowhere to shelter has a long, wet day.`},noGym:{title:`No gym`,text:`A guest got up early to work out and found no gym. Wellness guests work out most mornings and young groups often, and they say so in their reviews. A gym counts towards the star rating too.`,button:{label:`Build`,to:{window:`build`}}},highSeason:{title:`High season`,text:`Demand is at its strongest this month. Fill 70% of your rooms over the month at 3.5 stars or better, and you’ve met the goal.`,button:{label:`See the goal`,to:{window:`goal`}}},beachUnwatched:{title:`Nobody watching the sea`,text:`Families keep their children out of a sea nobody is watching. A lifeguard tower on the sand near the water, with a lifeguard up it, brings them in, and brings more families to the beach.`,button:{label:`Build`,to:{window:`build`}}},turtles:{title:`A turtle nest`,text:`A green turtle came ashore last night and laid her eggs in the sand. In seven or eight weeks the hatchlings dig out at dawn and race for the sea, and guests on the beach that morning will never forget it. Turtles nest only on dark, quiet sand: lights in sight of the beach turn them back.`,button:{label:`Show wildlife`,to:{overlay:`wildlife`}}},brightBeach:{title:`A bright beach`,text:`It’s turtle season, May to October, but much of the beach is now too bright for turtles to nest. Torches, lit rooms, bars and pools in sight of the sand keep them away. Keep lights back from the beach, or screen them with sea grape, hedges or buildings.`,button:{label:`Show wildlife`,to:{overlay:`wildlife`}}}};Object.keys(d_),Object.keys(q),Object.keys(uu),1/Jc.ticksPerSecond;var f_={poseMask:15,child:16,miserable:32,propShift:6,walking:256,facingShift:9},p_={tip:.42,base:.02,half:.3,tail:-.34,stem:.11,lift:.025,scale:{guests:1,staff:.72,cars:.86},met:K.overlay+1,missing:K.overlay+2},m_=2048,h_=8,g_=-2,__=10,v_=1,y_=.45*Math.SQRT2,b_=.25,x_=.02,S_=.05;function C_(e,t,n){return(e===0||e===1?t:-t)+(e===1||e===2?n:-n)}var w_=class e{camera;composite=new Xl;renderer;options;scene=new Gn;uniforms=If();style=`tropical`;objects=[];worldMaterial;shadowMaterial;ghostMaterial;ghostMesh;doorMesh;ghostKey=``;shadowTarget;lightCamera=new fa;light=new V;buffer;guests;cars;wildlife;atlases;frames;drawnCount=0;drawnId;drawnFeet;drawnRect;pickPoint=new V;seatHeight=new Float32Array;slides=[];land;terrainGroup=new In;chunks=new Map;objectsMesh;torches=[];roomSlots=new Map;litRooms=[];roomLights=(()=>{let e=new fi(new Uint8Array(16384),64,64,fe,M);return e.magFilter=E,e.minFilter=E,e.generateMipmaps=!1,e.needsUpdate=!0,e})();highestLevel=0;capacity;prev;curr;prevIndex;facing;headingX;headingY;artWidth=2;artHeight=2;deviceWidth=1;deviceHeight=1;raycaster=new ja;ndc=new Lt;scratch=new V;corner=new V;bounds=new or;onBufferFree=()=>{};lastHeader=Eh();constructor(e,t,n,r,i,a){this.renderer=e,this.options=t,this.atlases=n,this.land=xd.from(r),this.capacity=i,this.camera=a,this.prevIndex=new Int32Array(i).fill(-1),this.facing=new Uint8Array(i),this.headingX=new Float32Array(i),this.headingY=new Float32Array(i),this.worldMaterial=Lf(this.uniforms),this.shadowMaterial=zf(this.uniforms),this.ghostMaterial=Rf(this.uniforms),this.shadowTarget=new an(m_,m_,{depthBuffer:!0,depthTexture:new xi(m_,m_),minFilter:E,magFilter:E}),this.shadowTarget.depthTexture.minFilter=E,this.shadowTarget.depthTexture.magFilter=E,this.uniforms.uShadowMap.value=this.shadowTarget.depthTexture,this.uniforms.uRoomLights.value=this.roomLights,this.buffer=this.createBuffer(2,2),this.frames=n.map(tu),this.drawnId=new Int32Array(i),this.drawnFeet=new Float32Array(i*3),this.drawnRect=new Int16Array(i*4),this.guests=new au(i*3,n[a.zoom]),this.cars=new Ah(this.worldMaterial),this.wildlife=new vg(this.worldMaterial),this.scene.add(this.terrainGroup,this.guests.mesh,this.cars.mesh,this.wildlife.mesh)}static async create(t,n,r,i){let a=new qc({canvas:t.canvas,antialias:!1,alpha:!1,stencil:!1,powerPreference:`high-performance`});a.setPixelRatio(1),a.autoClear=!1;let o=await Promise.all(el.map(e=>nu(`./atlases/`,e)));return new e(a,t,o,n,r,i)}createBuffer(e,t){return new an(e,t,{minFilter:E,magFilter:E,generateMipmaps:!1,depthBuffer:!0,type:M})}setWorld(e,t){this.land=xd.from(e),this.wildlife.setTerrain(this.land);for(let e of this.chunks.values())this.terrainGroup.remove(e),e.geometry.dispose();this.chunks.clear();for(let e=0;e<this.land.size;e+=16)for(let t=0;t<this.land.size;t+=16)this.rebuildChunk(t,e);this.setObjects(t),this.measureHeight()}updateTerrain(e,t){let n=this.land;n.corners.set(e.corners),n.surface.set(e.surface),n.water.set(e.water),n.path.set(e.path),n.pool.set(e.pool),n.bridge.set(e.bridge),n.version++;let r=new Set;for(let e of t){let t=e%n.size,i=(e-t)/n.size;for(let[e,a]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){if(!n.inBounds(t+e,i+a))continue;let[o,s]=sh(t+e,i+a);r.add(`${o},${s}`)}}for(let e of r){let[t,n]=e.split(`,`).map(Number);this.rebuildChunk(t,n)}this.measureHeight()}setStyle(e){e!==this.style&&(this.style=e,this.setObjects(this.objects))}setObjects(e){this.objects=e,this.objectsMesh&&(this.scene.remove(this.objectsMesh),this.objectsMesh.geometry.dispose()),this.seatHeight=om(e,this.land),this.slides=e.filter(e=>e.type===`slide`).map(e=>({...Bd(this.land,e),points:Vd(this.land,e).points}));let t=sm(e,this.land,this.worldMaterial,this.style);this.objectsMesh=t.mesh,this.torches=t.torches,this.roomSlots=t.rooms,this.scene.add(t.mesh),this.showLights(this.litRooms),this.wildlife.setObjects(e,t.mesh.geometry)}showWildlife(e){this.wildlife.setReport(e)}showLights(e){this.litRooms=e;let t=this.roomLights.image.data;t.fill(0);for(let n=0;n+1<e.length;n+=2){let r=this.roomSlots.get(e[n]);if(r===void 0)continue;let i=r+e[n+1];i<4096&&(t[i*4]=255)}this.roomLights.needsUpdate=!0}rebuildChunk(e,t){let n=`${e},${t}`,r=this.chunks.get(n);r&&(this.terrainGroup.remove(r),r.geometry.dispose(),this.chunks.delete(n));let i=ch(this.land,e,t,this.worldMaterial);i&&(this.chunks.set(n,i),this.terrainGroup.add(i))}measureHeight(){let e=0;for(let t=0;t<this.land.corners.length;t++)e=Math.max(e,this.land.corners[t]);this.highestLevel=e}resize(e,t){let n=this.scale;this.deviceWidth=e,this.deviceHeight=t,this.renderer.setSize(e,t,!1);let r=Math.ceil(e/n/2)*2,i=Math.ceil(t/n/2)*2;(r!==this.artWidth||i!==this.artHeight)&&(this.artWidth=r,this.artHeight=i,this.buffer.dispose(),this.buffer=this.createBuffer(r,i))}get scale(){return this.options.scale*this.camera.magnify}refit(){this.resize(this.deviceWidth,this.deviceHeight)}get viewWidth(){return this.artWidth}get viewHeight(){return this.artHeight}get hasSnapshot(){return this.curr!==void 0}get terrain(){return this.land}pushSnapshot(e,t){let n=wh(e,this.capacity),r=Th(n,Eh());if(this.prev&&this.onBufferFree(this.prev.buffer),this.prev=this.curr,this.curr={buffer:e,views:n,header:r,arrived:t},this.lastHeader=r,this.prevIndex.fill(-1),this.prev){let e=this.prev;for(let t=0;t<e.header.count;t++)this.prevIndex[e.views.ids[t]]=t}}frame(e){let t=this.options.frozen,n=this.camera;n.update(e,this.artWidth,this.artHeight,t);let r=n.pixelsPerUnit;this.light.copy(n.right).multiplyScalar(-y_).setY(v_).normalize(),this.uniforms.uLight.value.copy(this.light),this.uniforms.uView.value.copy(n.back),this.uniforms.uTime.value=t?0:e/1e3,this.updateTorches();let i=12;if(this.curr){let r=this.curr,a=r.header.ticksInBatch*1e3/Jc.ticksPerSecond/Math.max(1,r.header.speed),o=t||r.header.speed===0?1:Math.min(1,(e-r.arrived)/a);this.placeGuests(r.views,r.header.count,o,t?0:e,r.header.rain>=l.wet),this.cars.update(r.views.cars,this.prev?.views.cars,o,this.land);let s=this.prev?.header.hour??r.header.hour,c=((r.header.hour-s)%24+24)%24;i=s+(c<12?c*o:0),this.wildlife.update(n,t?0:e/1e3,i%24,r.header.day,r.header.rain,this.drawnFeet,this.drawnCount,this.roomLights.image.data)}this.guests.setView(this.artWidth,this.artHeight,r,n.back,n.toward);let a=this.renderer;this.fitShadow(),this.guests.mesh.visible=!1,this.ghostMesh&&(this.ghostMesh.visible=!1),this.doorMesh&&(this.doorMesh.visible=!1),this.scene.overrideMaterial=this.shadowMaterial,a.setRenderTarget(this.shadowTarget),a.clear(!0,!0),a.render(this.scene,this.lightCamera),this.scene.overrideMaterial=null,this.guests.mesh.visible=!0,this.ghostMesh&&(this.ghostMesh.visible=!0),this.doorMesh&&(this.doorMesh.visible=!0),a.setRenderTarget(this.buffer),a.setClearColor(0,0),a.clear(!0,!0),a.render(this.scene,n.three);let o=this.scale;this.composite.setBuffer(this.buffer.texture,this.artWidth,this.artHeight,n.gridPx.x-this.artWidth/2,n.gridPx.y-this.artHeight/2);let s=this.curr?.header;this.composite.update(i,t?0:e,s?.sky??0,s?.rain??0),a.setRenderTarget(null),a.setViewport(0,this.deviceHeight-this.artHeight*o,this.artWidth*o,this.artHeight*o),a.render(this.composite.scene,this.composite.camera)}fitShadow(){let e=this.camera.three,t=this.lightCamera;t.position.copy(this.light).multiplyScalar(500),t.up.set(0,1,0),t.lookAt(0,0,0),t.updateMatrixWorld();let n=t.matrixWorldInverse,r=this.camera.back,i=g_*Xc,a=(this.highestLevel+__)*Xc;this.bounds.makeEmpty();for(let t of[-1,1])for(let o of[-1,1]){this.scratch.set(t,o,-1).unproject(e);for(let e of[i,a]){let t=(this.scratch.y-e)/r.y;this.corner.copy(this.scratch).addScaledVector(r,-t).applyMatrix4(n),this.bounds.expandByPoint(this.corner)}}let{min:o,max:s}=this.bounds,c=Math.ceil(s.x-o.x+1),l=Math.ceil(s.y-o.y+1),u=c/m_,d=l/m_;t.left=Math.floor(o.x/u)*u,t.right=t.left+c,t.bottom=Math.floor(o.y/d)*d,t.top=t.bottom+l,t.near=-s.z-h_,t.far=-o.z+1,t.updateProjectionMatrix(),this.uniforms.uShadowMatrix.value.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.uniforms.uShadowBias.value=.03/(t.far-t.near)}updateTorches(){let e=this.torches;if(e.length>32){let t=this.camera.centerX,n=this.camera.centerY;e.sort((e,r)=>(e.x-t)**2+(e.z-n)**2-((r.x-t)**2+(r.z-n)**2))}let t=Math.min(32,e.length);for(let n=0;n<t;n++)this.uniforms.uTorches.value[n].copy(e[n]);this.uniforms.uTorchCount.value=t}slideLevel(e,t){for(let n of this.slides){let r=n.tower[0]+.5,i=n.tower[1]+.5,a=(e-r)*n.dir[0]+(t-i)*n.dir[1];if(!(Math.abs((e-r)*n.dir[1]-(t-i)*n.dir[0])>.5||a<-.6||a>n.run+.6))return Hd(n.points,Math.max(0,Math.min(n.run,a)))+.05}}placeGuests(e,t,n,r,i){let a=this.prev?.views,o=this.camera;this.guests.useAtlas(this.atlases[o.zoom]);let s=this.frames[o.zoom],c=1/el[o.zoom],l=o.right.x,u=o.right.z,d=o.toward.x,f=o.toward.z,p=this.land,m=p.size,h=Math.floor(r/420)&1,g=0;this.drawnCount=0;for(let r=0;r<t;r++){let t=e.ids[r],o=e.x[r],_=e.y[r],v=a?this.prevIndex[t]:-1;a&&v>=0&&(o=a.x[v]+(o-a.x[v])*n,_=a.y[v]+(_-a.y[v])*n);let y=e.vx[r],b=e.vy[r],x=Math.hypot(y,b);x>1e-4&&(this.headingX[t]=y/x,this.headingY[t]=b/x);let S=this.headingX[t],C=this.headingY[t],w=S*l+C*u,T=S*d+C*f,E=w>=0?+(T>=0):T>=0?2:3,D=v>=0?this.facing[t]:E;C_(E,w,T)>C_(D,w,T)+b_?this.facing[t]=E:this.facing[t]=D;let O=e.flags[r],k=O&f_.poseMask,A=O>>f_.facingShift&7;if(k!==wg.none&&A){let[e,n]=Zu[A-1],r=e*l+n*u,i=e*d+n*f;this.facing[t]=r>=0?+(i>=0):i>=0?2:3}let j=this.facing[t],M=e.look[r],ee=Math.min(m-1,Math.max(0,Math.floor(_)))*m+Math.min(m-1,Math.max(0,Math.floor(o))),te=p.standingHeight(o,_),ne=O&f_.child,N=ne?s.child[j][e.anim[r]>>6]:s.walk[j][e.anim[r]>>6],re=0;if(k===wg.swim||k===wg.wade||k===wg.float||k===wg.kayak||k===wg.board){if(p.path[ee]===q.bridge)continue;let e=p.pool[ee]===uu.splash?pu.splashDrop:qm;te=p.pool[ee]?p.minCorner(ee%m,(ee-ee%m)/m)-e:Math.max(p.heightAt(o,_),p.water[ee]),N=k===wg.wade?ne?s.wadeChild[j]:s.wade[j]:k===wg.float?s.float[j][t%3]:k===wg.kayak?s.kayak[j][t%3]:k===wg.board?s.board[j][t%3]:s.swim[j][h+t&1]}else if(k===wg.slide)te=this.slideLevel(o,_)??te,N=s.sit[j];else if(k!==wg.none){let e=this.seatHeight[ee];Number.isNaN(e)||(te=e),k===wg.sit||k===wg.eat?N=s.sit[j]:k===wg.lie&&(N=s.lie[j],re=S_,Number.isNaN(e)&&this.guests.set(g++,o,te*Xc,_,s.towels[+(j===0||j===2)][t%3],M,0,0,x_))}let ie=te*Xc;this.guests.set(g++,o,ie,_,N,M,0,0,re);let ae=this.drawnCount++;this.drawnId[ae]=t,this.drawnFeet[ae*3]=o,this.drawnFeet[ae*3+1]=ie,this.drawnFeet[ae*3+2]=_,this.drawnRect[ae*4]=N[2],this.drawnRect[ae*4+1]=N[3],this.drawnRect[ae*4+2]=N[4],this.drawnRect[ae*4+3]=N[5];let oe=O>>f_.propShift&3;if(i&&k===wg.none&&t%5!=0){let e=s.umbrellas[t%3],n=O&f_.child?5:7,r=j===1||j===0?2:-2;this.guests.set(g++,o,ie,_,e,M,Math.round(r*c),Math.round(n*c))}else if(oe&&k===wg.none){let e=oe===Tg.drink?s.drink:oe===Tg.towel?s.towel:s.bag,t=j===1||j===0?3:-3;this.guests.set(g++,o,ie,_,e,M,Math.round(t*c),Math.round(-4*c))}O&f_.miserable&&this.guests.set(g++,o,ie,_,s.miserable,M,0,Math.round(-(N[5]+3)*c))}this.guests.commit(g)}setOverlay(e){let t=this.uniforms;if(!e){t.uOverlayOn.value=0;return}let n=Math.round(Math.sqrt(e.length)),r=t.uOverlay.value;r&&r.image.width===n||(r?.dispose(),r=new fi(new Uint8Array(n*n),n,n,he,M),r.magFilter=E,r.minFilter=E,r.generateMipmaps=!1,r.flipY=!1,r.unpackAlignment=1,t.uOverlay.value=r),r.image.data.set(e),r.needsUpdate=!0,t.uOverlayOn.value=1}setLand(e){let t=this.uniforms;if(!e){t.uLandOn.value=0;return}let n=Math.round(Math.sqrt(e.length)),r=t.uLand.value;r&&r.image.width===n||(r?.dispose(),r=new fi(new Uint8Array(n*n),n,n,he,M),r.magFilter=E,r.minFilter=E,r.generateMipmaps=!1,r.flipY=!1,r.unpackAlignment=1,t.uLand.value=r),r.image.data.set(e),r.needsUpdate=!0,t.uLandOn.value=1}setGhost(e){let t=e?JSON.stringify(e):``;if(t===this.ghostKey)return;this.ghostKey=t;for(let e of[this.ghostMesh,this.doorMesh])e&&(this.scene.remove(e),e.geometry.dispose());if(this.ghostMesh=void 0,this.doorMesh=void 0,!e)return;if(e.doors?.length){let t=new Bf;for(let n of e.doors)this.addDoor(t,n);this.doorMesh=new li(t.build(),this.worldMaterial),this.doorMesh.matrixAutoUpdate=!1,this.doorMesh.renderOrder=1,this.scene.add(this.doorMesh)}let n=new Bf,r=em([...this.objects,...e.objects],this.land.size);for(let t of e.objects)im(n,t,this.land,this.style,r);let i=this.land,a=Xc;for(let[t,r]of e.tiles){if(!i.inBounds(t,r))continue;let e=[0,1,2,3].map(e=>i.corner(t,r,e)),o=_d(e[0],e[1],e[2],e[3])?[[0,1,3],[1,2,3]]:[[0,1,2],[0,2,3]];for(let i of o)for(let o of i)n.vertex(t+hd[o],e[o]*a+.012,r+gd[o],K.coping)}this.uniforms.uRefused.value=+!!e.refused,n.count!==0&&(this.ghostMesh=new li(n.build(),this.ghostMaterial),this.ghostMesh.matrixAutoUpdate=!1,this.ghostMesh.renderOrder=2,this.scene.add(this.ghostMesh))}addDoor(e,t){let n=this.land;if(!n.inBounds(t.x,t.y))return;let r=n.index(t.x,t.y),i=n.pool[r],a=i?n.minCorner(t.x,t.y)-(i===uu.splash?pu.splashDrop:qm):void 0,o=p_.scale[t.who],s=t.x+.5,c=t.y+.5,l=(e,n)=>[s+(t.dx*e-t.dy*n)*o,c+(t.dy*e+t.dx*n)*o],u=t.met?p_.met:p_.missing,d=([t,r])=>e.vertex(t,(a??n.walkHeight(t,r))*Xc+p_.lift,r,u,Hl.outlined+Hl.daylit),f=l(p_.tip,0),[p,m]=[l(p_.base,p_.half),l(p_.base,-p_.half)],[h,g,_,v]=[l(p_.base,p_.stem),l(p_.base,-p_.stem),l(p_.tail,p_.stem),l(p_.tail,-p_.stem)];for(let e of[f,p,m,h,_,v,h,v,g])d(e)}screenOf(e,t,n,r){let i=this.pickPoint.set(e,(this.land.heightAt(e,t)+n)*Xc,t).project(this.camera.three),a=this.scale/(window.devicePixelRatio||1);return r.x=(i.x*.5+.5)*this.artWidth*a,r.y=(.5-i.y*.5)*this.artHeight*a,r}crowdInView(e){let t=this.terrain;e.crowd=0,e.swimmers=0;for(let n=0;n<this.drawnCount;n++){let r=this.drawnFeet[n*3],i=this.drawnFeet[n*3+2],a=this.pickPoint.set(r,this.drawnFeet[n*3+1],i).project(this.camera.three);if(a.x<-1||a.x>1||a.y<-1||a.y>1)continue;e.crowd++;let o=Math.floor(r),s=Math.floor(i);t.inBounds(o,s)&&t.pool[t.index(o,s)]&&e.swimmers++}return e}guestPoints(){let e=this.scale/(window.devicePixelRatio||1),t=[];for(let n=0;n<this.drawnCount;n++){let r=this.pickPoint.set(this.drawnFeet[n*3],this.drawnFeet[n*3+1],this.drawnFeet[n*3+2]).project(this.camera.three),i=this.drawnRect[n*4+1],a=this.drawnRect[n*4+3],o=Math.floor((r.x*.5+.5)*this.artWidth+.5),s=Math.floor((.5-r.y*.5)*this.artHeight+.5);t.push({x:o*e,y:(s-a+i/2)*e})}return t}guestAt(e,t){let n=this.scale,r=e/n,i=t/n,a=this.camera.back,o=-1,s=-1/0;for(let e=0;e<this.drawnCount;e++){let t=this.pickPoint.set(this.drawnFeet[e*3],this.drawnFeet[e*3+1],this.drawnFeet[e*3+2]),n=t.dot(a);t.project(this.camera.three);let c=Math.floor((t.x*.5+.5)*this.artWidth+.5),l=Math.floor((.5-t.y*.5)*this.artHeight+.5),u=this.drawnRect[e*4],d=this.drawnRect[e*4+1],f=this.drawnRect[e*4+2],p=this.drawnRect[e*4+3];r<c-f-2||r>c-f+u+2||i<l-p-2||i>l-p+d+2||n>s&&(s=n,o=this.drawnId[e])}return o}tileAt(e,t,n){return this.pick(e,t,!0,n)}groundAt(e,t,n){return this.pick(e,t,!1,n)}pick(e,t,n,r){let i=this.scale;this.ndc.set(e/i/this.artWidth*2-1,1-t/i/this.artHeight*2),this.raycaster.setFromCamera(this.ndc,this.camera.three);let a=[...this.terrainGroup.children];n&&this.objectsMesh&&a.push(this.objectsMesh);let o=this.raycaster.intersectObjects(a,!1)[0];if(!o)return;let s=o.point.addScaledVector(this.raycaster.ray.direction,.001),c=this.land.size;return r.x=Math.min(c-1,Math.max(0,Math.floor(s.x))),r.y=Math.min(c-1,Math.max(0,Math.floor(s.z))),r}};function T_(e,t){try{e.setPointerCapture(t)}catch{}}var E_=24,D_=1024,O_=class{element;body;label;onHide=()=>{};constructor(e,t,n,r,i){this.element=document.createElement(`div`),this.element.className=`window bevel`,this.element.dataset.category=n,this.element.style.left=`${r}px`,this.element.style.top=`${i}px`;let a=document.createElement(`div`);a.className=`title`;let o=document.createElement(`span`);o.className=`label`,o.textContent=t,this.label=o;let s=document.createElement(`button`);s.className=`close`,s.textContent=`x`,s.dataset.tip=`Close`,s.addEventListener(`click`,()=>this.hide()),a.append(o,s),this.body=document.createElement(`div`),this.body.className=`body`,this.element.append(a,this.body),e.append(this.element),this.makeDraggable(a)}get visible(){return this.element.style.display!==`none`}show(){this.element.style.display=``,this.keepOnScreen()}hide(){this.element.style.display=`none`,this.onHide()}setTitle(e){this.label.textContent=e}toggle(){this.visible?this.hide():this.show()}makeDraggable(e){let t=0,n=0,r=0,i=0,a=!1;e.addEventListener(`pointerdown`,o=>{o.target.closest(`button`)||(a=!0,t=o.clientX,n=o.clientY,r=this.element.offsetLeft,i=this.element.offsetTop,T_(e,o.pointerId),o.preventDefault())}),e.addEventListener(`pointermove`,e=>{a&&(this.element.style.left=`${Math.round(r+e.clientX-t)}px`,this.element.style.top=`${Math.round(i+e.clientY-n)}px`)});let o=t=>{a&&(a=!1,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId),this.snap())};e.addEventListener(`pointerup`,o),e.addEventListener(`pointercancel`,o)}snap(){let e=this.element,t=window.innerWidth-e.offsetWidth,n=window.innerHeight-e.offsetHeight,r=Math.min(Math.max(0,e.offsetLeft),t),i=Math.min(Math.max(0,e.offsetTop),n);window.innerWidth<D_?r=r<t/2?0:t:r<E_?r=0:t-r<E_&&(r=t),i<E_?i=0:n-i<E_&&(i=n),e.style.left=`${r}px`,e.style.top=`${i}px`}keepOnScreen(){let e=this.element;e.style.left=`${Math.min(Math.max(0,e.offsetLeft),Math.max(0,window.innerWidth-e.offsetWidth))}px`,e.style.top=`${Math.min(Math.max(0,e.offsetTop),Math.max(0,window.innerHeight-e.offsetHeight))}px`}},k_={needs:[{built:`lobby`,text:`A lobby, where guests check in`},{staff:`housekeeper`}],gives:[`Rooms to let`]},A_=(e,t)=>({...t?{needs:[{note:`Rooms well away: its pop carries`}]}:{},better:[{staff:`coach`,text:`Lessons, and games for someone on their own`}],gives:[`Games for parties of two to four, ${e?`into the evening`:`in daylight`}`]}),j_={lobby:{needs:[{staff:`frontDesk`}],better:[{staff:`concierge`,text:`Tables, boats and taxis booked: guests remember it`}],gives:[`Check-in and check-out: no guests without one`]},wing:k_,bungalow:k_,villa:k_,roomBlock:k_,oceanBlock:k_,restaurant:{needs:[{staff:`cook`},{staff:`server`}],better:[{staff:`chef`,text:`Fine dining, which opens only with a head chef`}],gives:[`Breakfast, lunch and dinner, as you choose`]},poolBar:{needs:[{staff:`server`}],gives:[`Drinks by the pool`]},swimUpBar:{needs:[{staff:`server`},{built:`pool`,text:`A pool, for its stools to stand in`}],gives:[`Drinks in the water`]},beachShack:{needs:[{staff:`server`}],gives:[`Snacks and cold drinks`]},coffeeKiosk:{needs:[{staff:`server`}],gives:[`Coffee and a pastry`]},spa:{needs:[{staff:`therapist`}],gives:[`Treatments, one guest to a therapist`,`Heat rooms and pools anyone can use, if you add them`]},kidsClub:{gives:[`Somewhere for children: fewer of them about the pools`]},beachHut:{gives:[`Kayaks and snorkels out on the sea`]},restrooms:{gives:[`Restrooms where guests spend the day`]},housekeeping:{gives:[`Housekeepers clean twice as fast`,`Staff quarters, where staff rest between shifts`]},maintenance:{gives:[`Repairs twice as fast, with tools and parts to hand`,`Staff quarters`]},kitchen:{needs:[{staff:`cook`},{built:`restaurant`,text:`Restaurants, joined to it by a service path`}],gives:[`Cooking for the restaurants joined to it`,`Staff quarters`]},lifeguard:{needs:[{staff:`lifeguard`},{note:`A pool or the sea within 8 tiles`}],gives:[`A guard on the water: families swim where they can see one`]},slide:{needs:[{built:`pool`,text:`A pool to splash down in`}],gives:[`Thrills: the bigger the drop, the more`]},waterfall:{needs:[{built:`pool`,text:`A pool to fall into`}],gives:[`Scenery and a little thrill in the water`]},cabana:{gives:[`A shaded daybed, rented by the visit`]},parkingLot:{gives:[`Bays for guests who drive`]},valet:{gives:[`Cars parked for guests`]},gym:{better:[{staff:`instructor`,text:`Classes, which draw more guests in`}],gives:[`Somewhere to work out, early and late`]},tennisCourt:A_(!1,!1),tennisCourtLit:A_(!0,!1),pickleballCourt:A_(!1,!0),pickleballCourtLit:A_(!0,!0)},M_={frontDesk:`A front desk clerk`,housekeeper:`Housekeepers`,maintenance:`Maintenance staff`};function N_(e){return M_[e]??`A ${bu[e].name.toLowerCase()}`}function P_(e){return Object.keys(j_).filter(t=>j_[t].needs?.some(t=>`staff`in t&&t.staff===e))}var F_=class{staff=[];amenities=[];mirror;listeners=[];constructor(e){this.mirror=e}onChange(e){this.listeners.push(e)}setStaff(e){let t=e=>e.map(e=>`${e.hired}:${e.wontJoin??``}`).join(),n=t(this.staff);if(this.staff=e,t(e)!==n)for(let e of this.listeners)e()}setAmenities(e){let t=this.amenities.map(e=>e.has).join();if(this.amenities=e,e.map(e=>e.has).join()!==t)for(let e of this.listeners)e()}hired(e){return this.staff.find(t=>t.type===e)?.hired??0}wontJoin(e){return this.staff.find(t=>t.type===e)?.wontJoin}built(e){let t=this.mirror();return e===`pool`?+!!t.terrain.water.some(e=>e>0):t.objects.filter(t=>t.type===e).length}};function I_(e,t,n){let r=document.createElement(`div`);r.className=`need-line ${e}`;let i=document.createElement(`span`);if(i.textContent=t,r.append(i),n!==void 0){let e=typeof n==`string`?document.createElement(`span`):n;typeof n==`string`&&(e.textContent=n),e.classList.add(`aside`),r.append(e)}return r}function L_(e){let t=document.createElement(`div`);return t.className=`section-title`,t.textContent=e,t}function R_(e,t,n,r,i){let a=n.hired(e);if(a)return I_(`met`,t,`${a} on the staff`);let o=n.wontJoin(e);if(o)return I_(`locked`,t,o.replace(/^A [^,]*? joins only a resort that/,`Joins a resort that`));let s=document.createElement(`button`);return s.className=`link-button`,s.textContent=i?`Hire one in Staff`:`Hire in Staff`,r.onStaff&&s.addEventListener(`click`,r.onStaff),I_(i?`missing`:`info`,t,s)}function z_(e,t,n){return`staff`in e?R_(e.staff,N_(e.staff),t,n,!0):`built`in e?t.built(e.built)?I_(`met`,e.text):I_(`missing`,e.text,`Build one first`):I_(`info`,e.note)}function B_(e,t){let n=t.wayIn??dm(e,t.design);if(n)return I_(`info`,n.charAt(0).toUpperCase()+n.slice(1),t.planning?`Marked by arrows as you place it`:void 0)}function V_(e){return zg.findIndex(t=>t.has.includes(e))}function H_(e,t,n){if(e<0)return;let r=zg[e].name;if(t.amenities[e]?.has??!1)return I_(`info`,`Counts toward the stars as ${r.toLowerCase()}`,n?`You have one already`:void 0);let i=t.amenities.filter(e=>e.has).length,a=Qg(i),o=Qg(i+1);return I_(`new`,`New for the resort: ${r.toLowerCase()}`,o>a?`Star limit ${a} → ${o}`:`A kind guests look for`)}function U_(e,t,n){let r=e===`pool`?void 0:j_[e],i=[],a=e===`pool`?void 0:B_(e,n),o=[...(r?.needs??[]).map(e=>z_(e,t,n)),...a?[a]:[]];if(o.length&&i.push(L_(`Needs`),...o),n.needsOnly)return i;r?.better?.length&&i.push(L_(`Better with`),...r.better.map(e=>R_(e.staff,`${bu[e.staff].name}: ${e.text.charAt(0).toLowerCase()}${e.text.slice(1)}`,t,n,!1)));let s=[...(r?.gives??[]).map(e=>I_(`info`,e)),H_(V_(e),t,n.planning)].filter(e=>e!==void 0);return s.length&&i.push(L_(`Adds`),...s),i}function W_(e,t){for(let n of j_[e]?.needs??[])if(`built`in n&&!t.built(n.built))return n.built===`pool`?`a pool`:`a ${ou[n.built].name.toLowerCase()}`}function G_(e,t){let n=V_(e);return n>=0&&t.amenities.length>0&&!t.amenities[n].has}var K_=e=>`$${e.toLocaleString(`en-US`)}`,q_={label:`Pool deck`,detail:`${K_(cd.deckCost)} a tile`,blurb:`Paving round a pool to lie out on. Guests get into the water from it, and loungers, cabanas and umbrellas stand on it. A pool with a deck of its own is more relaxing. Drag over a walkway to relay it as deck.`,tool:{kind:`path`,pathKind:q.deck}};function J_(){return[{label:`Guest path`,detail:`${K_(lu.guestPathCost)} a tile`,blurb:`A walkway: drag to lay a straight run. Ramps and stairs on slopes. Benches and planters may stand on it; loungers belong on a pool deck, where they don’t block the way.`,tool:{kind:`path`,pathKind:q.guest}},q_,{label:`Bridge or boardwalk`,detail:`${K_(cd.bridgeCost)} a tile over water`,blurb:`A timber walkway over water: drag it from bank to bank across a stream, a lake, the shallows or a pool. Up to ${ld.span} tiles of water, no more than ${ld.deepest} m deep; its deck is level, and its ends must meet the ground at its height. Swimmers and floaters pass under it. Guests don’t wade across water to reach dry land.`,tool:{kind:`path`,pathKind:q.bridge}},{label:`Service path`,detail:`${K_(lu.servicePathCost)} a tile`,blurb:`Cheaper, for staff. Guests dislike seeing it.`,tool:{kind:`path`,pathKind:q.service}},{label:`Road`,detail:`${K_(lu.roadCost)} a tile, two lanes`,blurb:`Drag to lay a two-lane road, its second lane on your right as you drag. Cars climb a metre a tile at most.`,tool:{kind:`path`,pathKind:q.road}},{label:`Raise land`,detail:`${K_(lu.terraformCost)} a corner`,blurb:`Lift a tile a metre; the ground around it slopes up to meet it.`,tool:{kind:`land`,delta:1}},{label:`Lower land`,detail:`${K_(lu.terraformCost)} a corner`,blurb:`Dig a tile down a metre. Water can’t be let out of its banks.`,tool:{kind:`land`,delta:-1}},{label:`Demolish`,detail:`refund ${Math.round(lu.refund*100)}%`,blurb:`Remove a building, scenery or path.`,tool:{kind:`demolish`}}]}function Y_(){let e=du.map(e=>({label:fu[e].name,detail:`${K_(fu[e].cost)} a tile, paint`,blurb:`${fu[e].blurb} Drag to paint on flat ground; Brush changes its size.`,type:`pool`,tool:{kind:`pool`,water:e,brush:1}}));e.push({label:`Erase pool`,detail:`refund ${Math.round(lu.refund*100)}%`,blurb:`Drag to take water away. A pool split in two keeps its name on the bigger part.`,tool:{kind:`pool`,water:0,brush:1}});let t=[`lounger`,`umbrella`,`lifeguard`].map(e=>({label:ou[e].name,detail:`${K_(ou[e].cost)}, 1x1`,blurb:e===`lifeguard`?`Watches a pool within ${pu.lifeguardReach} tiles, or the sea within 10 from the sand, with a lifeguard up it. Families want one wherever there\u2019s deep water, a slide or the sea.`:`${ou[e].blurb} Not on a walkway, where it would block the way. Seats within two tiles of the water count for the pool.`,type:e,tool:{kind:`build`,type:e,orient:0}}));return[...e,q_,...X_(`pool`),...t]}function X_(e){return Object.keys(ou).filter(t=>ou[t].category===e&&!ou[t].legacy).flatMap(e=>{let t=ou[e];if(e===`lobby`){let n={type:e,orient:0,design:{arrival:`court`}};return[{label:t.name,detail:`${K_(t.cost)}, 3x3`,blurb:t.blurb,type:e,tool:{kind:`build`,type:e,orient:0}},{label:`Lobby with arrival court`,detail:`${K_(Id(n))}, 5x7, level ground`,blurb:`The lobby behind a horseshoe drive round a planted island, with a porte-cochère at the door. Join a road to either end of the drive.`,type:e,tool:{kind:`build`,type:e,orient:0,design:{arrival:`court`}}}]}if(e===`slide`)return{label:t.name,detail:`from ${K_(Id({type:e,orient:0,design:{length:mu.minLength}}))}, drag`,blurb:t.blurb,type:e,tool:{kind:`build`,type:e,orient:0,design:{length:3}}};if(e===`wing`){let i={length:n.minLength,floors:2,loaded:`single`,room:r};return{label:t.name,detail:`from ${K_(Id({type:e,orient:0,design:i}))}, drag a run`,blurb:t.blurb,type:e,tool:{kind:`build`,type:e,orient:0,design:i}}}return{label:t.name,detail:`${K_(Id({type:e,orient:0}))}, ${t.footprint[0]}x${t.footprint[1]}${e===`restaurant`||e===`spa`?`, drag`:``}`,blurb:t.blurb,type:e,tool:{kind:`build`,type:e,orient:0}}})}function Z_(e,t){return!e||e.kind!==t.kind?!1:e.kind===`build`&&t.kind===`build`?e.type===t.type&&e.design?.arrival===t.design?.arrival:e.kind===`path`&&t.kind===`path`?e.pathKind===t.pathKind:e.kind===`land`&&t.kind===`land`?e.delta===t.delta:e.kind===`pool`&&t.kind===`pool`?e.water===t.water:!0}var Q_=class{window;construction;resort;tabs;list;details;tab=`rooms`;hovered;items=[];onStaff;constructor(e,t,n,r,i){this.construction=t,this.resort=n,this.window=new O_(e,`Build`,`construction`,r,i),this.window.element.classList.add(`build-window`),this.tabs=document.createElement(`div`),this.tabs.className=`tabs`,this.list=document.createElement(`div`),this.list.className=`items`,this.list.addEventListener(`pointerleave`,()=>{this.hovered=void 0,this.showDetails()}),this.details=document.createElement(`div`),this.details.className=`build-details inset`,this.window.body.append(this.tabs,this.list,this.details),t.onChange(()=>this.render()),n.onChange(()=>this.render()),this.render(),this.window.hide()}render(){this.tabs.replaceChildren(...[...cu.map(e=>[e.id,e.name]),[`ground`,`Paths and land`]].map(([e,t])=>{let n=document.createElement(`button`);return n.className=`tab`,n.textContent=t,n.setAttribute(`aria-pressed`,String(e===this.tab)),n.addEventListener(`click`,()=>{this.tab=e,this.hovered=void 0,this.render()}),n})),this.items=this.tab===`ground`?J_():this.tab===`pool`?Y_():X_(this.tab);let e=this.construction.tool;this.list.replaceChildren(...this.items.map(t=>{let n=document.createElement(`button`);n.className=`item`,n.setAttribute(`aria-pressed`,String(Z_(e,t.tool)));let r=document.createElement(`span`);r.className=`name`,r.textContent=t.label,t.type&&G_(t.type,this.resort)&&r.append($_(`new`,`New`));let i=t.type&&t.type!==`pool`?W_(t.type,this.resort):void 0;i&&r.append($_(`missing`,`Needs ${i}`));let a=document.createElement(`span`);return a.className=`detail`,a.textContent=t.detail,n.append(r,a),n.addEventListener(`pointerenter`,e=>{e.pointerType===`mouse`&&(this.hovered=t,this.showDetails())}),n.addEventListener(`click`,()=>this.construction.select(Z_(this.construction.tool,t.tool)?void 0:t.tool)),n})),this.showDetails()}showDetails(){let e=this.construction.tool,t=this.hovered??this.items.find(t=>Z_(e,t.tool));if(!t){let e=document.createElement(`div`);e.className=`muted`,e.textContent=matchMedia(`(pointer: coarse)`).matches?`Tap something to build it and to see what it needs.`:`Point at something to see what it needs and what it adds.`,this.details.replaceChildren(e);return}let n=document.createElement(`div`);n.className=`details-title`;let r=document.createElement(`span`);r.textContent=t.label;let i=document.createElement(`span`);i.className=`detail`,i.textContent=t.detail,n.append(r,i);let a=document.createElement(`div`);a.className=`blurb`,a.textContent=t.blurb;let o=t.tool.kind===`build`?t.tool.design:void 0,s=t.type?U_(t.type,this.resort,{planning:!0,design:o,onStaff:this.onStaff}):[];this.details.replaceChildren(n,a,...s)}};function $_(e,t){let n=document.createElement(`span`);return n.className=`card-tag ${e}`,n.textContent=t,n}var ev=450,tv=450,nv=200,rv=(e,t)=>document.elementFromPoint(e,t)?.closest(`[data-tip]`)??void 0;function iv(e){let t=document.createElement(`div`);t.className=`tooltip`,t.style.display=`none`,e.append(t);let n,r,i,a,o={x:0,y:0},s=()=>t.style.display!==`none`,c=e=>{let n=e.getBoundingClientRect(),r=Math.min(window.innerWidth-t.offsetWidth-4,Math.max(4,n.left+n.width/2-t.offsetWidth/2)),i=n.bottom+6,a=i+t.offsetHeight>window.innerHeight-4?Math.max(4,n.top-6-t.offsetHeight):i;t.style.left=`${r}px`,t.style.top=`${a}px`},l=e=>{a=e,t.textContent=e.dataset.tip??``,t.style.display=``,c(e),r??=setInterval(d,nv)},u=()=>{n&&clearTimeout(n),r&&clearInterval(r),n=r=a=void 0,t.style.display=`none`},d=()=>{if(!a||a.isConnected){a&&s()&&t.textContent!==a.dataset.tip&&l(a);return}let e=i?void 0:rv(o.x,o.y);e?l(e):u()},f=e=>e!==void 0&&a!==void 0&&(e===a||e.dataset.tip===a.dataset.tip);e.addEventListener(`pointerover`,e=>{if(e.pointerType!==`mouse`)return;o.x=e.clientX,o.y=e.clientY;let t=e.target.closest(`[data-tip]`)??void 0;f(t)?(a=t,s()&&c(t)):(u(),t&&(a=t,n=setTimeout(()=>{n=void 0;let e=rv(o.x,o.y);e&&l(e)},ev)))}),e.addEventListener(`pointerout`,e=>{if(e.pointerType!==`mouse`)return;let t=e.relatedTarget?.closest(`[data-tip]`)??void 0;f(t)||u()}),e.addEventListener(`pointerdown`,e=>{if(e.pointerType===`mouse`){u();return}let t=e.target.closest(`[data-tip]`);t&&(u(),i={x:e.clientX,y:e.clientY},a=t,n=setTimeout(()=>l(t),tv))}),e.addEventListener(`pointermove`,e=>{o.x=e.clientX,o.y=e.clientY,i&&Math.hypot(e.clientX-i.x,e.clientY-i.y)>10&&u()});let p=()=>{i=void 0,n&&clearTimeout(n),n=void 0,s()?setTimeout(u,1400):a=void 0};e.addEventListener(`pointerup`,p),e.addEventListener(`pointercancel`,p)}var av=60,ov=class{element;worstPerSecond=new Float32Array(av);last=0;second=-1;frames=0;frameSum=0;shownAt=0;stats={frameMs:0,worstMs:0,tickMs:0,fps:0,guests:0};constructor(e){this.element=document.createElement(`div`),this.element.className=`perf`,e.append(this.element),window.__perf=this.stats}frame(e,t){if(this.last){let t=e-this.last,n=Math.floor(e/1e3),r=n%av;n!==this.second&&(this.second=n,this.worstPerSecond[r]=0),t>this.worstPerSecond[r]&&(this.worstPerSecond[r]=t),this.frames++,this.frameSum+=t}if(this.last=e,e-this.shownAt<500||this.frames===0)return;let n=0;for(let e of this.worstPerSecond)e>n&&(n=e);let r=this.frameSum/this.frames;this.stats.frameMs=r,this.stats.worstMs=n,this.stats.tickMs=t.tickMs,this.stats.fps=1e3/r,this.stats.guests=t.count,this.element.textContent=`${this.stats.fps.toFixed(0)} fps\nframe ${r.toFixed(2)} ms\nworst ${n.toFixed(1)} ms (60 s)\ntick ${t.tickMs.toFixed(3)} ms\nguests ${t.count}`,this.frames=0,this.frameSum=0,this.shownAt=e}};function sv(e){let t=(e,n,r)=>{if(n===0||typeof e!=`object`||!e)return JSON.stringify(e);let i=`${r}  `,a=Array.isArray(e)?e.map(e=>t(e,n-1,i)):Object.entries(e).filter(([,e])=>e!==void 0).map(([e,r])=>`${JSON.stringify(e)}: ${t(r,n-1,i)}`),[o,s]=Array.isArray(e)?[`[`,`]`]:[`{`,`}`];return a.length?`${o}\n${a.map(e=>i+e).join(`,
`)}\n${r}${s}`:`${o}${s}`};return`${t(e,2,``)}\n`}function cv(e){let t=0,n=0;for(let r of e)t+=r.sold,n+=r.available;return n?t/n:void 0}function lv(e){let t=u[e]?.scenario,n=t?fd[t]:void 0;return n?Iu(n.goal.byYear+1,0):void 0}function uv(e){let t=e.state,n=t.clock,r=t.scenario?.status,i=lv(e.scene),a=cv(t.ledger?.week??[]),o=t.objects??[];return{scene:e.scene,day:Math.floor((t.startTicks+t.tick)/(n.ticksPerHour*24)),cash:Math.round(t.cash),loan:t.loan??0,sandbox:!!t.sandbox,reviews:t.reputation?.total??0,rooms:o.reduce((e,[t,,,,n,,r])=>e+Fd({type:su[t],orient:n,design:r}),0),...a===void 0?{}:{occupancy:a},...r&&i!==void 0?{goal:{status:r,deadline:i}}:{}}}var dv=`paradise-lot`,fv=`saves`,pv=`Autosave`,mv={kaleo:`Kaleo Point`,play:`demo resort`,sandbox:`sandbox`};function hv(e){return e===`kaleo`?pv:`${pv} (${mv[e]??e})`}function gv(e){return e===`Autosave`||e.startsWith(`Autosave (`)}function _v(){return new Promise((e,t)=>{let n=indexedDB.open(dv,1);n.onupgradeneeded=()=>n.result.createObjectStore(fv,{keyPath:`slot`}),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function vv(e,t){let n=await _v();try{return await new Promise((r,i)=>{let a=t(n.transaction(fv,e).objectStore(fv));a.onsuccess=()=>r(a.result),a.onerror=()=>i(a.error)})}finally{n.close()}}async function yv(){try{return navigator.storage?.persist?await navigator.storage.persisted()||await navigator.storage.persist():!1}catch{return!1}}async function bv(e,t,n,r){await vv(`readwrite`,i=>i.put({slot:e,savedAt:n,data:t,summary:r}))}async function xv(e){return(await vv(`readonly`,t=>t.get(e)))?.data}function Sv(e){return`Before an update: ${e}`}async function Cv(e){let t=await vv(`readonly`,t=>t.get(e));if(t){try{let n=(await Cf(t.data)).version,r=Sv(e),i=await vv(`readonly`,e=>e.get(r));n<12&&!i&&!e.startsWith(`Before an update: `)&&await vv(`readwrite`,e=>e.put({...t,slot:r}))}catch{}return t.data}}async function wv(e){await vv(`readwrite`,t=>t.delete(e))}async function Tv(e,t){let n=await _v();try{await new Promise((r,i)=>{let a=n.transaction(fv,`readwrite`),o=a.objectStore(fv),s=o.get(e);s.onsuccess=()=>{s.result&&(o.put({...s.result,slot:t}),o.delete(e))},a.oncomplete=()=>r(),a.onerror=()=>i(a.error)})}finally{n.close()}}async function Ev(){let e=await vv(`readonly`,e=>e.getAll()),t=[];for(let n of e){let e=n.summary;if(!e)try{let t=await Cf(n.data);if(xf(t)){await wv(n.slot);continue}e=uv(Sf(t)),await vv(`readwrite`,t=>t.put({...n,summary:e}))}catch{}t.push({slot:n.slot,savedAt:n.savedAt,bytes:n.data.byteLength,summary:e})}return t.sort((e,t)=>t.savedAt-e.savedAt)}function Dv(e,t,n){let r=URL.createObjectURL(e),i=document.createElement(`a`);i.href=r,i.download=`${t.replace(/[^\w-]+/g,`-`)}.${n}`,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}function Ov(e,t){Dv(new Blob([e],{type:`application/octet-stream`}),t,`plsave`)}function kv(e,t){Dv(new Blob([e],{type:`application/json`}),t,`json`)}function Av(){return new Promise(e=>{let t=document.createElement(`input`);t.type=`file`,t.accept=`.plsave,application/octet-stream`,t.addEventListener(`change`,async()=>{let n=t.files?.[0];e(n?new Uint8Array(await n.arrayBuffer()):void 0)}),t.addEventListener(`cancel`,()=>e(void 0)),t.click()})}var jv={kaleo:`Kaleo Point`,play:`the demo resort`,sandbox:`the sandbox`};function Mv(e){return jv[e]??e}function Nv(e){return Mv(e).replace(/^./,e=>e.toUpperCase())}function Pv(e){let t=Math.round((Date.now()-e)/6e4);if(t<1)return`just now`;if(t<60)return`${t} minute${t===1?``:`s`} ago`;let n=Math.round(t/60);if(n<24)return`${n} hour${n===1?``:`s`} ago`;let r=Math.round(n/24);return r===1?`yesterday`:`${r} days ago`}var Fv=e=>`${e<0?`-`:``}$${Math.abs(e).toLocaleString(`en-US`)}`;function Iv(e,t){if(e.status===`won`)return`Goal met`;if(e.status===`lost`)return`Bankrupt`;if(e.status===`missed`)return`Goal missed`;let n=e.deadline-t;return`Goal: ${n} day${n===1?``:`s`} left`}function Lv(e){let t=[zu(e.day,!0),e.sandbox?`sandbox money`:Fv(e.cash)];e.rating!==void 0&&t.push(`${e.rating} star${e.rating===1?``:`s`}`);let n=e.occupancy===void 0?``:`, ${Math.round(e.occupancy*100)}% full`,r=e.rooms?`${e.rooms} room${e.rooms===1?``:`s`}${n}`:`No rooms yet`;return[t.join(`, `),e.goal?`${r}. ${Iv(e.goal,e.day)}`:r]}var Rv,zv;function Bv(e){Rv=document.createElement(`div`),Rv.className=`toast bevel`,Rv.style.display=`none`,Rv.setAttribute(`role`,`status`),e.append(Rv)}function Vv(e,t=!1,n=2600){Rv&&(Rv.textContent=e,Rv.classList.toggle(`refused`,t),Rv.style.display=``,zv&&clearTimeout(zv),zv=setTimeout(()=>{Rv&&(Rv.style.display=`none`)},n))}var Hv=class{window;send;list;nameInput;saveButton;waiting=new Map;nextId=1;names=new Set;overwriting;renaming=!1;autosave=pv;onTitle=()=>{};constructor(e,t,n,r){this.send=t,this.window=new O_(e,`Save and load`,`resort`,n,r),this.window.element.classList.add(`save-window`);let i=document.createElement(`div`);i.className=`save-row`,this.nameInput=document.createElement(`input`),this.nameInput.type=`text`,this.nameInput.placeholder=`Name this save`,this.nameInput.maxLength=40,this.nameInput.addEventListener(`input`,()=>this.stopOverwriting()),this.nameInput.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.saveButton.click()}),this.saveButton=this.button(`Save`,`Save the game under this name`,()=>void this.pressSave()),i.append(this.nameInput,this.saveButton),this.list=document.createElement(`div`),this.list.className=`slots`;let a=this.note(`Saves stay in this browser, on this device, and clearing its data deletes them. To move a game to another device, or keep it safe, export it as a file.`),o=document.createElement(`div`);o.className=`save-row`,o.append(this.button(`Export this game`,`Download the game as it is now as a file, to keep it safe or carry on elsewhere`,()=>void this.exportNow()),this.button(`Import a game`,`Carry on from a game file`,()=>void this.importNow()));let s=document.createElement(`div`);s.className=`save-heading`,s.textContent=`Play report`;let c=this.note(`A summary of this game, month by month: money, guests, reviews, and what was built when. Read it, share it, or hand it to an AI to ask how the resort could do better. It holds nothing but the game.`),l=document.createElement(`div`);l.className=`save-row`,l.append(this.button(`Play report`,`Download a summary of this game as a JSON file`,()=>this.send({type:`playReport`})));let u=document.createElement(`div`);u.className=`save-heading`,u.textContent=`Leave this game`;let d=this.note(`Saves the game first, so you can carry on from the title screen, or start another.`),f=document.createElement(`div`);f.className=`save-row`,f.append(this.button(`Title screen`,`Save this game, then go to the title screen`,()=>void this.leave(()=>this.onTitle()))),this.window.body.append(i,this.list,a,o,s,c,l,u,d,f),this.window.hide()}button(e,t,n){let r=document.createElement(`button`);return r.className=`text-button`,r.textContent=e,r.dataset.tip=t,r.addEventListener(`click`,n),r}note(e){let t=document.createElement(`div`);return t.className=`save-note muted`,t.textContent=e,t}async show(){this.window.show(),await this.refresh()}async handle(e){e.id===-1?(await bv(this.autosave,e.data,e.savedAt,e.summary),this.window.visible&&await this.refresh()):(this.waiting.get(e.id)?.(e),this.waiting.delete(e.id))}report(e){kv(sv(e),`paradise-lot-report ${e.game.name} ${e.game.today}`)}async leave(e){let t=await this.request();try{await bv(this.autosave,t.data,t.savedAt,t.summary)}catch{Vv(`This browser won’t store the game, so it hasn’t been saved. Export it first.`,!0);return}e()}request(){let e=this.nextId++;return new Promise(t=>{this.waiting.set(e,t),this.send({type:`save`,id:e})})}async pressSave(){let e=this.nameInput.value.trim()||Uv();if(gv(e)){Vv(`That name is kept for autosaves. Choose another.`,!0);return}if(this.names.has(e)&&this.overwriting!==e){this.overwriting=e,this.saveButton.textContent=`Replace`,this.saveButton.dataset.tip=`Save over “${e}”`,Vv(`There’s already a save called “${e}”. Tap Replace to save over it.`);return}this.stopOverwriting();let t=await this.request();await bv(e,t.data,t.savedAt,t.summary),this.nameInput.value=``,Vv(`Saved “${e}”`),await this.refresh()}stopOverwriting(){this.overwriting=void 0,this.saveButton.textContent=`Save`,this.saveButton.dataset.tip=`Save the game under this name`}async exportNow(){let e=await this.request();Ov(e.data,`paradise-lot-${new Date(e.savedAt).toISOString().slice(0,16).replace(`:`,``)}`)}async importNow(){let e=await Av();e&&(this.send({type:`load`,data:e}),this.window.hide())}async refresh(){if(this.renaming)return;let e;try{e=await Ev()}catch{this.list.textContent=`This browser won’t let the game store saves. Use Export instead.`;return}this.names=new Set(e.map(e=>e.slot)),e.length?this.list.replaceChildren(...e.map(e=>this.row(e))):this.list.textContent=`No saves yet.`}row(e){let t=document.createElement(`div`);t.className=`slot`;let n=document.createElement(`span`);n.className=`name`,n.textContent=e.slot;let r=document.createElement(`span`);r.className=`when muted`,r.textContent=Pv(e.savedAt),r.dataset.tip=`Saved ${new Date(e.savedAt).toLocaleString()}`;let i=e.summary?Lv(e.summary):[];e.summary&&(i[0]=`${Nv(e.summary.scene)}, ${i[0]}`);let a=i.map(e=>{let t=document.createElement(`span`);return t.className=`detail`,t.textContent=e,t}),o=document.createElement(`div`);o.className=`slot-actions`;let s=this.button(`Load`,`Carry on from “${e.slot}”`,async()=>{let t=await Cv(e.slot);t&&(this.send({type:`load`,data:t}),this.window.hide())}),c=gv(e.slot),l=this.button(`Rename`,c?`Rename this autosave to keep it: the game starts a new one`:`Rename “${e.slot}”`,()=>this.rename(n,e.slot)),u=this.button(`Export`,`Download “${e.slot}” as a file`,async()=>{let t=await xv(e.slot);t&&Ov(t,`paradise-lot-${e.slot}`)}),d=this.button(`Delete`,c?`The autosave can’t be deleted`:`Delete “${e.slot}”`,async()=>{await wv(e.slot),await this.refresh()});d.disabled=c;for(let e of[s,l,u,d])e.classList.add(`small`);return o.append(s,l,u,d),t.append(n,r,...a,o),t}rename(e,t){this.renaming=!0;let n=document.createElement(`input`);n.type=`text`,n.className=`rename`,n.value=t,n.maxLength=40,n.setAttribute(`aria-label`,`New name for “${t}”`),e.replaceWith(n),n.focus(),n.select();let r=!1,i=async e=>{if(r)return;r=!0;let i=n.value.trim();e&&i&&i!==t&&(gv(i)?Vv(`That name is kept for autosaves. Choose another.`,!0):this.names.has(i)?Vv(`There’s already a save called “${i}”.`,!0):(await Tv(t,i),Vv(`Renamed “${i}”`))),this.renaming=!1,await this.refresh()};n.addEventListener(`keydown`,e=>{e.key===`Enter`?i(!0):e.key===`Escape`&&(e.stopPropagation(),i(!1))}),n.addEventListener(`blur`,()=>void i(!0))}};function Uv(){let e=new Date;return`Save ${e.toLocaleDateString()} ${e.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}`}var Wv=`rotateLeft.rotateRight.zoomOut.zoomIn.pause.speed1.speed2.speed4.resort.build.save.finances.staff.overlays.reviews.star.starHalf.starEmpty.spanner.sunny.cloudy.showers.rain.heat.storm.goal.land.sound.mute.advice`.split(`.`),Gv=14;function Kv(e,t=1){let n=document.createElement(`span`);return n.className=`stars`,n.setAttribute(`aria-label`,`${e} star${e===1?``:`s`}`),qv(n,e,t),n}function qv(e,t,n=1){e.setAttribute(`aria-label`,`${t} star${t===1?``:`s`}`);let r=Gv*n,i=[...[,,,,,]].map((e,n)=>{let i=t>=n+1?`star`:t>=n+.5?`starHalf`:`starEmpty`,a=document.createElement(`span`);return a.className=`star`,a.style.width=`calc(${r}px * var(--ui-scale))`,a.style.height=`calc(${r}px * var(--ui-scale))`,a.style.backgroundSize=`calc(${Wv.length*r}px * var(--ui-scale)) calc(${r}px * var(--ui-scale))`,a.style.backgroundPosition=`calc(${-Wv.indexOf(i)*r}px * var(--ui-scale)) 0`,a});e.replaceChildren(...i)}function Jv(e,t=1){let n=Gv*t,r=document.createElement(`span`);return r.className=`inline-icon`,r.style.width=`calc(${n}px * var(--ui-scale))`,r.style.height=`calc(${n}px * var(--ui-scale))`,r.style.backgroundSize=`calc(${Wv.length*n}px * var(--ui-scale)) calc(${n}px * var(--ui-scale))`,Yv(r,e,t),r}function Yv(e,t,n=1){e.style.backgroundPosition=`calc(${-Wv.indexOf(t)*Gv*n}px * var(--ui-scale)) 0`}var Xv={[u_.off]:`Between jobs.`,[u_.toPost]:`On the way to work.`,[u_.atPost]:`At work.`,[u_.toRound]:`On their rounds.`,[u_.onRound]:`Checking things over.`,[u_.toWatch]:`Off to watch the pool.`,[u_.watching]:`Watching the pool from its edge: a tower would let them see it all.`,[u_.toClean]:`On the way to clean a room.`,[u_.cleaning]:`Cleaning a room.`,[u_.toLinen]:`Off to the laundry.`,[u_.linen]:`Folding linen in the laundry.`,[u_.toHome]:`Off duty, heading to the staff quarters.`,[u_.resting]:`Off duty.`,[u_.toFix]:`Hurrying to a breakdown.`,[u_.fixing]:`Fixing a breakdown.`,[u_.toInspect]:`On the way to an inspection.`,[u_.inspecting]:`Inspecting the equipment.`,[u_.waiting]:`Off duty, waiting for the staff shuttle.`};function Zv(e){let t=e.targetType?`the ${ou[e.targetType].name.toLowerCase()}`:e.target<=-10?`the pool`:e.target===-3?`the beach`:void 0;switch(e.activity){case Cg.toDesk:return`Heading to the front desk`;case Cg.checkingIn:return`Checking in`;case Cg.checkingOut:return`Checking out`;case Cg.toRoom:return`Going back to their room`;case Cg.inRoom:return`In their room`;case Cg.toVenue:return`On the way to ${t??`somewhere nice`}`;case Cg.atVenue:return t?`At ${t}`:`Enjoying themselves`;case Cg.sliding:return`Whooshing down the slide`;case Cg.stepping:return e.target<=-10?`In the water`:t?`At ${t}`:`Finding a spot`;case Cg.toCar:return`Leaving`;default:return`Strolling about`}}var Qv=class{window;send;header;status;verdict;bars;thoughts;watching=-1;constructor(e,t,n,r){this.send=t,this.window=new O_(e,`Guest`,`guests`,n,r),this.window.element.classList.add(`guest-window`),this.header=document.createElement(`div`),this.header.className=`guest-header`,this.status=document.createElement(`div`),this.status.className=`inset`,this.verdict=document.createElement(`div`),this.verdict.className=`verdict`,this.verdict.dataset.tip=`The review their party would write if they checked out now`,this.bars=document.createElement(`div`),this.bars.className=`needs`,this.thoughts=document.createElement(`div`),this.thoughts.className=`thoughts`,this.window.body.append(this.header,this.status,this.verdict,this.bars,this.thoughts),this.window.hide(),this.window.onHide=()=>this.watch(-1)}open(e){this.watch(e),this.window.show()}watch(e){e!==this.watching&&(this.watching=e,this.send({type:`watchGuest`,id:e}))}show(e){if(!e||e.id!==this.watching){!e&&this.watching>=0&&(this.status.textContent=`They’ve gone home.`);return}if(e.staff){let t=bu[e.staff.type];this.window.setTitle(`${Pg[e.firstName]??``} ${Fg[e.lastName]??``}`.trim());let n=document.createElement(`div`);n.textContent=`${t.name}, on staff`,this.header.replaceChildren(n),this.status.textContent=Xv[e.staff.job]??`At work.`,this.verdict.replaceChildren(),this.bars.replaceChildren(),this.thoughts.replaceChildren();return}let t=e.segment>=0?Mg[Hg[e.segment]]:void 0,n=`${Pg[e.firstName]??``} ${Fg[e.lastName]??``}`.trim();this.window.setTitle(n);let r=e.partySize>1?`, party of ${e.partySize}`:``,i=t?`${t.name}${r}${e.child?` (a child)`:``}`:`Day visitor`,a=e.room?`${ou[e.room].name}, ${e.nightsLeft===0?`leaving today`:`${e.nightsLeft} night${e.nightsLeft===1?``:`s`} left`}`:``;this.header.replaceChildren(...[i,a].filter(Boolean).map(e=>{let t=document.createElement(`div`);return t.textContent=e,t}));let o=e.happiness>=70?`Happy`:e.happiness>=45?`Content`:e.happiness>=25?`Unhappy`:`Miserable`;this.status.textContent=`${Zv(e)}. ${o}.`,e.wouldGive===void 0?this.verdict.replaceChildren():this.verdict.replaceChildren(document.createTextNode(`Their review so far: `),Kv(e.wouldGive));let s=[[`Happiness`,e.happiness],...Ag.map((t,n)=>[jg[t],e.needs[n]])];this.bars.replaceChildren(...s.map(([e,t])=>{let n=document.createElement(`div`);n.className=`need`;let r=document.createElement(`span`);r.textContent=e;let i=document.createElement(`span`);i.className=`bar`;let a=document.createElement(`span`);return a.className=t<25?`fill low`:t<50?`fill mid`:`fill`,a.style.width=`${Math.round(Math.max(0,Math.min(100,t)))}%`,i.append(a),n.append(r,i),n})),this.thoughts.replaceChildren(...(e.thoughts.length?e.thoughts:[void 0]).map(e=>{let t=document.createElement(`div`);return t.className=`thought`,t.textContent=e?`“${Gg(e.template,e.cause,e.price)}”`:`No thoughts yet.`,t}))}},$v=e=>`${e<0?`−`:``}$${Math.abs(Math.round(e)).toLocaleString(`en-US`)}`;function ey(e,t,n,r=`row`){let i=document.createElement(`div`);i.className=r;let a=document.createElement(`span`);a.className=`key`,a.textContent=e;let o=document.createElement(`span`);return o.textContent=t,i.append(a,o),n&&(i.dataset.tip=n),i}var ty={rooms:`Room nights at the agreed rates, less its upkeep, utilities and the housekeeping time spent on it.`,takings:`What guests paid here, less its upkeep, its stock and the time staff worked here.`,free:`Free to guests: it takes nothing itself, but it’s part of why guests book and what they write.`,support:`Behind the scenes: it costs money so the rest of the resort can run.`};function ny(e,t){let n=document.createElement(`div`);if(n.className=`section-title`,n.textContent=`The books`,n.dataset.tip=ty[t],!e.days){let e=document.createElement(`div`);return e.className=`inset`,e.textContent=`New today: its books start at midnight.`,[n,e]}let r=e.week,i=e.days===1?`Yesterday`:`Last ${e.days} days`,a=[n],o=r.revenue-r.costs;if(t===`free`||t===`support`?a.push(ey(i,`cost ${$v(r.costs)}`)):a.push(ey(i,`took ${$v(r.revenue)}, cost ${$v(r.costs)}`),ey(`Net`,$v(o),void 0,`row ${o>=0?`gain`:`loss`}`)),t===`rooms`?(r.rooms&&a.push(ey(`Full`,`${Math.round(r.nights/r.rooms*100)}% of nights`,`Room nights sold, of those it had`)),r.nights&&a.push(ey(`Average rate`,`${$v(r.revenue/r.nights)} a night`,`What a room night actually sold for`))):(r.visits||t!==`support`)&&a.push(ey(`Visits`,`${r.visits}, about ${Math.round(r.visits/e.days)} a day`,`Guests who came to use it`)),t===`rooms`||t===`takings`){let t=e.total,n=t.revenue-t.costs;if(a.push(ey(`Since it opened`,`took ${$v(t.revenue)}, cost ${$v(t.costs)}`)),e.built>0){let t=n>=e.built?`Paid for itself`:n<=0?`Nothing back yet`:`${Math.round(n/e.built*100)}% back`;a.push(ey(`Built for ${$v(e.built)}`,t,`What it has earned, after its running costs, of what it cost to build`))}}else e.built>0&&a.push(ey(`Built for`,$v(e.built)));return a}var ry=[`honeymoon`,`family`,`wellness`,`young`];function iy(e,t,n){let r=document.createElement(`div`);r.className=`need rating`;let i=document.createElement(`span`);i.textContent=e;let a=document.createElement(`span`);a.className=`bar`;let o=document.createElement(`span`);o.className=t<3.5?`fill low`:t<6?`fill mid`:`fill`,o.style.width=`${Math.round(Math.max(0,Math.min(10,t))*10)}%`,a.append(o);let s=document.createElement(`span`);if(s.className=`score`,s.textContent=t.toFixed(1),r.append(i,a,s),n){let e=document.createElement(`div`);e.className=`why`,e.textContent=n,r.append(e)}return r}var ay=[[`ratings`,`Ratings`],[`suits`,`Who it suits`],[`books`,`Books`]],oy=class{window;send;nameInput;status;tabButtons;panels;ratings;features;appeal;adults;watching=-1;constructor(e,t,n,r){this.send=t,this.window=new O_(e,`Pool`,`construction`,n,r),this.window.element.classList.add(`pool-window`),this.nameInput=document.createElement(`input`),this.nameInput.className=`pool-name`,this.nameInput.maxLength=32,this.nameInput.dataset.tip=`Name it: type a new name and press Enter`,this.nameInput.addEventListener(`change`,()=>{this.watching>=0&&this.nameInput.value.trim()&&t({type:`command`,command:{type:`poolSettings`,pool:this.watching,name:this.nameInput.value}})}),this.status=document.createElement(`div`),this.status.className=`status-strip`;let i=document.createElement(`div`);i.className=`tabs place-tabs`,this.tabButtons=ay.map(([e,t])=>{let n=document.createElement(`button`);return n.className=`tab`,n.textContent=t,n.addEventListener(`click`,()=>this.showTab(e)),n}),i.append(...this.tabButtons),this.ratings=document.createElement(`div`),this.ratings.className=`needs`,this.features=document.createElement(`div`),this.features.className=`pool-features`,this.appeal=document.createElement(`div`),this.appeal.className=`needs`;let a=document.createElement(`label`);a.className=`check`,a.dataset.tip=`Calmer, and couples love it, but families can’t use it`,this.adults=document.createElement(`input`),this.adults.type=`checkbox`,this.adults.addEventListener(`change`,()=>{this.watching>=0&&t({type:`command`,command:{type:`poolSettings`,pool:this.watching,adultsOnly:this.adults.checked}})}),a.append(this.adults,document.createTextNode(` Adults only`));let o=(...e)=>{let t=document.createElement(`div`);return t.className=`pool-panel`,t.append(...e),t},s=document.createElement(`div`);s.className=`section-title`,s.textContent=`It has`,this.panels={ratings:o(this.ratings,s,this.features),suits:o(this.appeal,a),books:o()},this.window.body.append(this.nameInput,this.status,i,...Object.values(this.panels)),this.showTab(`ratings`),this.window.hide(),this.window.onHide=()=>this.watch(-1)}open(e){this.watch(e),this.window.show()}showTab(e){ay.forEach(([t],n)=>this.tabButtons[n].setAttribute(`aria-pressed`,String(t===e)));for(let[t,n]of Object.entries(this.panels))n.style.display=t===e?``:`none`}watch(e){e!==this.watching&&(this.watching=e,this.send({type:`watchPool`,id:e}))}show(e){if(!e||e.id!==this.watching){!e&&this.watching>=0&&(this.status.textContent=`This pool has been filled in.`);return}this.window.setTitle(e.name),document.activeElement!==this.nameInput&&(this.nameInput.value=e.name);let t=e.seats?`, ${e.shadedSeats} in the shade`:``;this.status.textContent=e.warnings.length?e.warnings.join(` `):`${e.using} swimming of ${e.swimmers}. ${e.seats} seat${e.seats===1?``:`s`} by the water${t}.`,this.status.classList.toggle(`closed`,e.warnings.length>0),this.ratings.replaceChildren(...hu.map(t=>{let n=e.reasons[t].slice(0,2).map(e=>`${e.amount>0?`+`:`−`} ${e.text}`).join(`   `);return iy(gu[t],e.ratings[t],n)})),this.features.textContent=e.features.length?e.features.join(` · `):`Plain water, nothing more. Add a slide, a waterfall, a bar or shade.`,this.appeal.replaceChildren(...ry.map(t=>iy(Mg[t].name,e.appeal[t]))),this.adults.checked=e.adultsOnly,this.panels.books.replaceChildren(...ny(e.books,`free`))}},sy=e=>`$${Math.round(e).toLocaleString(`en-US`)}`,cy=[`breakfast`,`lunch`,`dinner`],ly={beds:`Beds`,bath:`Bath`,outdoor:`Outside`,extras:`Extras`};function uy(e,t){let n=document.createElement(`div`);n.className=`choice-row`;let r=document.createElement(`span`);r.className=`key`,r.textContent=e;let i=document.createElement(`span`);i.className=`choices`;for(let e of t){let t=document.createElement(`button`);t.className=`text-button small`,t.textContent=e.label,t.dataset.tip=e.tip,t.setAttribute(`aria-pressed`,String(e.pressed)),t.disabled=e.disabled??!1,t.addEventListener(`click`,e.choose),i.append(t)}return n.append(r,i),n}function dy(e,t){let r=Od(e),a=Array.from({length:n.maxFloors},(e,n)=>({label:String(n+1),tip:n?`More rooms on the same ground; taller blocks hide the views behind them`:`One floor: every room on the ground`,pressed:r.floors===n+1,choose:()=>t({floors:n+1})})),o=[{label:`One row`,tip:`Every room faces out, with an open gallery behind`,pressed:r.loaded===`single`,choose:()=>t({loaded:`single`})},{label:`Two rows`,tip:`Rooms either side of a corridor: twice the rooms, but the back row looks the other way`,pressed:r.loaded===`double`,choose:()=>t({loaded:`double`})}],s=e=>uy(ly[e],Object.keys(i[e]).map(n=>{let a=i[e][n];return{label:a.name,tip:a.cost?`${a.blurb} ${sy(a.cost)} more a room.`:a.blurb,pressed:r.room[e]===n,choose:()=>t({room:{...r.room,[e]:n}})}}));return[uy(`Floors`,a),uy(`Rooms`,o),s(`beds`),s(`bath`),s(`outdoor`),s(`extras`)]}function fy(e,t){let n=Dd(`restaurant`,e),r=$u[n.dining].dinnerOnly??!1,i=Object.keys(Qu).map(e=>({label:Qu[e].name,tip:Qu[e].blurb,pressed:n.cuisine===e,choose:()=>t({cuisine:e})})),a=Object.keys($u).map(e=>({label:$u[e].name,tip:$u[e].blurb,pressed:n.dining===e,choose:()=>t({dining:e})})),o=cy.map(e=>{let i=n.meals.includes(e);return{label:e.charAt(0).toUpperCase()+e.slice(1),tip:r?`Fine dining serves dinner only`:i?`Stop serving ${e}`:`Serve ${e} too`,pressed:i,disabled:r||i&&n.meals.length===1,choose:()=>t({meals:cy.filter(t=>t===e?!i:n.meals.includes(t))})}}),s=n.size[1]>=id.minDepth,c=[{label:`None`,tip:`Every table indoors`,pressed:!n.terrace,choose:()=>t({terrace:!1})},{label:`Terrace`,tip:s?`Tables in the open air at the front: more seats, and dinner with the view, but not in the rain`:`A terrace needs a floor at least ${id.minDepth} deep`,pressed:n.terrace,disabled:!s&&!n.terrace,choose:()=>t({terrace:!0})}];return[uy(`Cuisine`,i),uy(`Style`,a),uy(`Meals`,o),uy(`Outside`,c)]}function py(e,t){let n=Dd(`spa`,e);return[uy(`Add`,Object.keys(ed).map(e=>{let r=n.features.includes(e),i=ed[e];return{label:i.name,tip:`${i.blurb}. ${sy(i.cost)}`,pressed:r,choose:()=>t({features:r?n.features.filter(t=>t!==e):[...n.features,e]})}}))]}var my=new Map;function hy(e,t){if(t.length<2)return t;let n=e=>e.querySelector(`.key`).textContent,r=t.find(t=>n(t)===my.get(e))??t[0],i=document.createElement(`div`);return i.className=`choice-axes`,i.append(...t.map(a=>{let o=[...a.querySelectorAll(`.choices button[aria-pressed="true"]`)].map(e=>e.textContent).join(`, `),s=document.createElement(`button`);return s.className=`text-button small`,s.textContent=`${n(a)}: ${o||`none`}`,s.setAttribute(`aria-pressed`,String(a===r)),s.addEventListener(`click`,()=>{my.set(e,n(a)),r.remove(),i.replaceWith(...hy(e,t))}),s})),[i,r]}function gy(e,t,n,r=!1,i=[]){let a=document.createElement(`div`);a.className=`design-choices`;let o=[...(e===`wing`?dy(t,n):e===`restaurant`?fy(t,n):py(t,n)).filter(t=>!(r&&e===`wing`&&t.querySelector(`.key`).textContent===`Rooms`)),...i];return a.append(...matchMedia(`(pointer: coarse)`).matches?hy(e,o):o),a}var _y=e=>`$${Math.round(e).toLocaleString(`en-US`)}`;function vy(e){if(!e.after)return`${e.name} filled in`;let t=hu.flatMap(t=>{let n=e.after[t],r=e.before?.[t];return r===void 0?[`${gu[t]} ${n.toFixed(1)}`]:Math.abs(n-r)>=.1?[`${gu[t]} ${r.toFixed(1)} \u2192 ${n.toFixed(1)}`]:[]});return`${e.name}: ${t.length?t.join(`, `):`no change to its ratings`}`}var yy={[q.guest]:`Guest path`,[q.service]:`Service path`,[q.road]:`Road`,[q.deck]:`Pool deck`,[q.bridge]:`Bridge`};function by(e){switch(e.kind){case`build`:return e.moving===void 0?e.design?.arrival===`court`?`Lobby with arrival court`:ou[e.type].name:`Moving: ${ou[e.type].name}`;case`path`:return yy[e.pathKind]??`Guest path`;case`demolish`:return`Demolish`;case`land`:return e.delta>0?`Raise land`:`Lower land`;case`pool`:return e.water?fu[e.water].name:`Erase pool`}}var xy={pointer:[`Move the view: right-drag, Space-drag or two-finger scroll`,`Zoom: wheel or pinch. Turn: Q and E`],touch:[`Move the view: drag with two fingers`,`Zoom: pinch. Turn: twist two fingers`]},Sy=[`waterfall`,`swimUpBar`];function Cy(e,t,r,i){let a=i.x-r.x,o=i.y-r.y,s=t.turned?!(t.orient&1):Math.abs(a)>=Math.abs(o),c=Math.max(n.minLength,Math.min(n.maxLength,Math.abs(s?a:o)+1)),l={...t.design,length:c},u=s&&a<0?r.x-c+1:r.x,d=!s&&o<0?r.y-c+1:r.y,f=e=>({shape:{type:`wing`,orient:e,design:l},x:u,y:d});if(t.turned)return f(t.orient);let p=n.depth[Od(l).loaded],m=e.terrain.size,h=(t,n)=>t>=0&&n>=0&&t<m&&n<m?e.coast[n*m+t]:255,g=0,_=0;for(let e=0;e<c;e++)g+=s?h(u+e,d+p):h(u-1,d+e),_+=s?h(u+e,d-1):h(u+p,d+e);return f(+!s+(g<=_?0:2))}function wy(e,t,n,r){let i=e.terrain,a=(e,t)=>i.inBounds(e,t)&&(i.pool[i.index(e,t)]===uu.shallow||i.pool[i.index(e,t)]===uu.deep),o=r.x-n.x,s=r.y-n.y,c=(e,n,r,i)=>{let a={...t.design,length:n},o=e===3?r-n+1:r,s=e===0?i-n+1:i;return{shape:{type:`slide`,orient:e,design:a},x:o,y:s}},l=[[0,1],[-1,0],[0,-1],[1,0]];if(o===0&&s===0){let e=Md(t.design);for(let n=0;n<4;n++){let i=t.orient+n&3;if(a(r.x+l[i][0],r.y+l[i][1]))return c(i,e,r.x,r.y)}return c(t.orient,e,r.x,r.y)}let u=Math.abs(o)>=Math.abs(s),d=Math.max(mu.minLength,Math.min(mu.maxLength,Math.abs(u?o:s)+1)),f=Math.sign(u?o:s),p={x:u?n.x+f*(d-1):n.x,y:u?n.y:n.y+f*(d-1)},m=u?f>0?3:1:f>0?0:2,h=m+2&3;return a(p.x+l[m][0],p.y+l[m][1])?c(m,d,p.x,p.y):a(n.x+l[h][0],n.y+l[h][1])?c(h,d,n.x,n.y):c(m,d,p.x,p.y)}function Ty(e,t,n,r){let i=t.type,{min:a,max:o}=td[i],s=n.x!==r.x||n.y!==r.y,c=(e,t,n)=>Math.max(t,Math.min(n,e)),l=e=>{let l=(e,t,n)=>e&1?[n,t]:[t,n],[u,d]=s?l(e,Math.abs(r.x-n.x)+1,Math.abs(r.y-n.y)+1):Dd(i,t.design).size,f=c(u,a[0],o[0]),p=c(d,a[1],o[1]),[m,h]=l(e,f,p),g=s?r.x<n.x?n.x-m+1:n.x:r.x-Math.floor((m-1)/2),_=s?r.y<n.y?n.y-h+1:n.y:r.y-Math.floor((h-1)/2);return{shape:{type:i,orient:e,design:{...t.design,size:[f,p]}},x:g,y:_}};if(t.turned)return l(t.orient);let u=[0,1,2,3].map(e=>l(t.orient+e&3)),d=vm(e);return u.find(t=>Dy(d,t)&&Yd(e,t.shape,t.x,t.y).ok)??u[0]}function Ey(e){if(!Ed(e.type))return ou[e.type].name;let t=Dd(e.type,e.design),n=`${t.size[0]}x${t.size[1]}`;if(e.type===`restaurant`){let r=Td(e).seats.length;return`${$u[t.dining].name} ${Qu[t.cuisine].name.toLowerCase()} restaurant, ${n}, ${r} seats${t.terrace?` with a terrace`:``}`}let r=Math.floor(t.size[0]*t.size[1]/ad),i=t.features.map(e=>ed[e].name.toLowerCase());return`Spa, ${n}, ${r} treatment rooms${i.length?`, ${i.join(`, `)}`:``}`}function Dy(e,{shape:t,x:n,y:r}){return Um(Vm({...t,x:n,y:r},e))}function Oy(e,{shape:t,x:n,y:r}){let[i,a]=Rd({...t,x:n,y:r});return e.terrain.inBounds(i,a)&&!!e.terrain.pool[e.terrain.index(i,a)]}function ky(e,t,n,r){if(t.type===`wing`)return Cy(e,t,n,r);if(t.type===`slide`)return wy(e,t,n,r);if(Ed(t.type))return Ty(e,t,n,r);let i=[0,1,2,3].map(e=>{let n={type:t.type,orient:t.orient+e&3,design:t.design},[i,a]=Pd(n);return{shape:n,x:r.x-Math.floor((i-1)/2),y:r.y-Math.floor((a-1)/2)}}),a=i[0],o=t=>Yd(e,t.shape,t.x,t.y).ok;if(Sy.includes(t.type))return i.find(t=>Oy(e,t)&&o(t))??a;if(t.turned)return a;let s=vm(e);return Dy(s,a)?a:i.find(e=>Dy(s,e)&&o(e))??a}function Ay(e,t){return{...e,orient:t+1&3,turned:!0}}var jy=class{toolValue;world;mirror;send;tip;bar;barLabel;confirmButton;rotateButton;wingOptions;listeners=[];aimAt;anchor;beforePress;viewHint;hinting=!0;viewKey=``;tipSize={width:0,height:0};onScreen={x:0,y:0};ghostRect;pending;previewKey;scratch={x:0,y:0};stroke=new Set;strokeLast;poolAsked;poolAnswer;constructor(e,t,n,r){this.world=t,this.mirror=n,this.send=r,this.tip=document.createElement(`div`),this.tip.className=`build-tip`,this.tip.style.display=`none`,this.viewHint=xy[matchMedia(`(pointer: coarse)`).matches?`touch`:`pointer`].map(e=>{let t=document.createElement(`div`);return t.className=`muted`,t.textContent=e,t}),this.bar=document.createElement(`div`),this.bar.className=`build-bar bevel`,this.bar.style.display=`none`,this.barLabel=document.createElement(`span`),this.barLabel.className=`label`,this.rotateButton=this.button(`Rotate`,`Turn it a quarter (R)`,()=>this.rotate()),this.confirmButton=this.button(`Confirm`,`Build it here`,()=>this.confirm()),this.confirmButton.classList.add(`primary`);let i=this.button(`Cancel`,`Stop building (Esc)`,()=>this.cancel()),a=this.button(`Undo`,`Undo the last thing built, with a full refund (Ctrl+Z)`,()=>this.undo());this.wingOptions=document.createElement(`div`),this.wingOptions.className=`bar-design`;let o=document.createElement(`div`);o.className=`bar-actions`,o.append(this.barLabel,this.rotateButton,this.confirmButton,a,i),this.bar.append(this.wingOptions,o),e.append(this.tip,this.bar),n.onChange(()=>this.refresh())}button(e,t,n){let r=document.createElement(`button`);return r.className=`text-button`,r.textContent=e,r.dataset.tip=t,r.addEventListener(`click`,n),r}get tool(){return this.toolValue}useMirror(e){this.mirror=e,e.onChange(()=>this.refresh()),this.refresh()}viewsChanged(){this.previewKey=void 0,this.refresh()}onChange(e){this.listeners.push(e)}select(e){this.toolValue=e,this.anchor=void 0,this.beforePress=void 0,this.viewKey=``,this.bar.style.display=e?``:`none`,this.stroke.clear(),this.strokeLast=void 0,e&&(this.barLabel.textContent=by(e),this.rotateButton.style.display=e.kind===`build`||e.kind===`pool`?``:`none`,this.rotateButton.textContent=e.kind===`pool`?`Brush ${e.brush}`:`Rotate`,this.rotateButton.dataset.tip=e.kind===`pool`?`Brush size: one, two or three tiles across (R)`:e.kind===`build`&&e.type===`wing`?`Turn it a quarter (R), then drag to stretch it`:e.kind===`build`&&Ed(e.type)?`Turn it a quarter (R): its door and terrace are at the front. Drag from corner to corner to size its floor`:`Turn it a quarter (R)`),this.showWingOptions(),this.refresh();for(let e of this.listeners)e()}active(){return this.toolValue!==void 0}aim(e,t,n){if(!this.toolValue)return;let r=this.toolValue.kind===`demolish`?this.world.tileAt(e,t,this.scratch):this.world.groundAt(e,t,this.scratch);this.aimAt=r?{x:r.x,y:r.y}:void 0;let i=this.toolValue;!n&&(i.kind===`path`||i.kind===`pool`||i.kind===`build`&&(i.type===`wing`||i.type===`slide`||Ed(i.type)))&&(this.anchor=void 0),i.kind===`pool`&&(n&&this.aimAt&&this.strokeLast?this.paintAlong(i,this.strokeLast,this.aimAt):!n&&!this.pendingTouch&&this.stroke.clear(),this.strokeLast=n?this.aimAt:void 0),this.refresh()}pendingTouch=!1;brushAt(e,t){let n=this.mirror.terrain.size,r=-Math.floor((e.brush-1)/2),i=[];for(let a=r;a<r+e.brush;a++)for(let o=r;o<r+e.brush;o++){let e=t.x+o,r=t.y+a;e>=0&&r>=0&&e<n&&r<n&&i.push(r*n+e)}return i}paintAlong(e,t,n){let r=Math.max(Math.abs(n.x-t.x),Math.abs(n.y-t.y));for(let i=0;i<=r;i++){let a={x:Math.round(t.x+(n.x-t.x)*i/Math.max(1,r)),y:Math.round(t.y+(n.y-t.y)*i/Math.max(1,r))};for(let t of this.brushAt(e,a))this.stroke.size<400&&this.stroke.add(t)}}poolPreview(e,t){e===this.poolAsked&&(this.poolAnswer=t,this.refresh())}press(e,t){if(!this.toolValue)return;let n=this.toolValue;if(this.beforePress={aimAt:this.aimAt,anchor:this.anchor,stroke:new Set(this.stroke),strokeLast:this.strokeLast},n.kind===`pool`&&(this.pendingTouch||this.stroke.clear(),this.strokeLast=void 0),this.aim(e,t,!0),this.anchor=this.aimAt?{...this.aimAt}:void 0,n.kind===`pool`&&this.aimAt){for(let e of this.brushAt(n,this.aimAt))this.stroke.add(e);this.strokeLast=this.aimAt}this.refresh()}release(e){this.toolValue&&(this.toolValue.kind===`pool`&&(this.pendingTouch=!e&&this.stroke.size>0),e&&this.confirm(),e&&(this.anchor=void 0))}abort(){let e=this.beforePress;e&&(this.beforePress=void 0,this.aimAt=e.aimAt,this.anchor=e.anchor,this.stroke=e.stroke,this.strokeLast=e.strokeLast,this.refresh())}cancel(){this.select(void 0)}rotate(){let e=this.toolValue;if(e?.kind===`pool`){this.toolValue={...e,brush:e.brush%pu.brushes.length+1},this.rotateButton.textContent=`Brush ${this.toolValue.brush}`,this.refresh();return}if(e?.kind!==`build`)return;let t=this.aimAt;this.toolValue=Ay(e,t?ky(this.mirror,e,this.anchor??t,t).shape.orient:e.orient),this.refresh()}redesign(e){let t=this.toolValue;if(!(t?.kind!==`build`||t.type!==`wing`&&!Ed(t.type))){this.toolValue={...t,design:{...t.design,...e}},this.showWingOptions(),this.refresh();for(let e of this.listeners)e()}}showWingOptions(){let e=this.toolValue,t=e?.kind===`build`&&(e.type===`wing`||Ed(e.type));this.wingOptions.style.display=t?``:`none`,t&&this.wingOptions.replaceChildren(gy(e.type,e.design,e=>this.redesign(e)))}undo(){this.send({type:`command`,command:{type:`undo`}})}confirm(){if(!this.pending)return;if(this.send({type:`command`,command:this.pending}),this.pending.type===`move`)return this.select(void 0);let e=this.toolValue;e?.kind===`build`&&Ed(e.type)&&this.pending.type===`build`&&(this.toolValue={...e,design:{...e.design,size:this.pending.design?.size}}),this.toolValue?.kind===`path`&&(this.anchor=void 0),this.toolValue?.kind===`pool`&&(this.stroke.clear(),this.pendingTouch=!1,this.poolAnswer=void 0,this.poolAsked=void 0)}refresh(){let e=this.toolValue,t=this.aimAt;this.pending=void 0;let n=this.previewKey;if(this.previewKey=void 0,this.ghostRect=void 0,!e||!t){this.world.setGhost(void 0),this.tip.style.display=`none`,this.confirmButton.disabled=!0;return}let r=this.mirror,i,a,o;switch(e.kind){case`build`:{let{shape:s,x:c,y:l}=ky(r,e,this.anchor??t,t),[u,d]=Pd(s),f=e.moving===void 0?void 0:r.objects.find(t=>t.id===e.moving);i=f?n_(r,f,s,c,l):Yd(r,s,c,l);let p=[];for(let e=l;e<l+d;e++)for(let t=c;t<c+u;t++)p.push([t,e]);this.ghostRect={x:c,y:l,w:u,d};let m=Vm({...s,x:c,y:l},vm(r));a={objects:[{...s,x:c,y:l}],tiles:p,refused:!i.ok,doors:m?.ways.flatMap(e=>e.doors)};let h=Fd(s),g=s.design?.floors??1;o=e.type===`wing`?`Guest wing, ${h} rooms on ${g} floor${g>1?`s`:``}: ${_y(i.cost)}`:e.type===`slide`?`Water slide, ${Md(s.design)} tiles of tube: ${_y(i.cost)}`:Ed(e.type)?`${Ey(s)}: ${_y(i.cost)}`:`${ou[e.type].name}: ${_y(i.cost)}`,m&&i.ok&&(o+=`. ${Hm(m)}`),this.pending={type:`build`,building:e.type,x:c,y:l,orient:s.orient,design:s.design},f&&(o=`Move the ${ou[e.type].name.toLowerCase()} here: ${_y(i.cost)}`,this.pending={type:`move`,object:f.id,x:c,y:l,orient:s.orient}),this.previewKey=`${e.type},${c},${l},${s.orient},${JSON.stringify(s.design??{})}`,this.previewKey!==n&&this.send({type:`previewViews`,key:this.previewKey,building:e.type,x:c,y:l,orient:s.orient,design:s.design});break}case`path`:{let n=this.anchor??t,s=tf(e.pathKind,n.x,n.y,t.x,t.y);i=nf(r,e.pathKind,s),a={objects:[],tiles:s,refused:!i.ok},o=`${by(e)}, ${s.length} tile${s.length===1?``:`s`}: ${_y(i.cost)}`,this.pending={type:`path`,kind:e.pathKind,x0:n.x,y0:n.y,x1:t.x,y1:t.y};break}case`demolish`:{let e=cf(r,t.x,t.y);if(e?.object){let t=e.object,[n,r]=Pd(t),s=[];for(let e=t.y;e<t.y+r;e++)for(let r=t.x;r<t.x+n;r++)s.push([r,e]);a={objects:[t],tiles:s,refused:!0},o=`Demolish ${ou[t.type].name.toLowerCase()}: refund ${_y(e.refund)}`,i={ok:!0,cost:0}}else e?.path?(a={objects:[],tiles:[[t.x,t.y]],refused:!0},o=`Remove path: refund ${_y(e.refund)}`,i={ok:!0,cost:0}):(a={objects:[],tiles:[[t.x,t.y]],refused:!1},o=`Nothing to demolish here`,i={ok:!1,cost:0,reason:``});this.pending={type:`demolish`,x:t.x,y:t.y};break}case`pool`:{let n=this.stroke.size?[...this.stroke]:this.brushAt(e,t);i=Zd(r,e.water,n);let s=r.terrain.size;a={objects:[],tiles:n.map(e=>[e%s,Math.floor(e/s)]),refused:!i.ok};let c=i.cost<0?`refund ${_y(-i.cost)}`:_y(i.cost);o=`${by(e)}, ${n.length} tile${n.length===1?``:`s`}: ${c}`,this.pending={type:`pool`,kind:e.water,tiles:n};let l=`${e.water}:${n.length}:${n.reduce((e,t)=>e*31+t>>>0,7)}`;i.ok&&l!==this.poolAsked&&(this.poolAsked=l,this.poolAnswer=void 0,this.send({type:`previewPool`,key:l,kind:e.water,tiles:n})),i.ok&&this.poolAnswer&&l===this.poolAsked&&(o+=` \u2014 ${vy(this.poolAnswer)}`);break}case`land`:{let n=df(r,t.x,t.y,e.delta);i=n,a={objects:[],tiles:n.edit?[...n.edit.corners.keys()].map(e=>[e%r.terrain.size,Math.floor(e/r.terrain.size)]):[[t.x,t.y]],refused:!i.ok},o=`${by(e)}: ${_y(i.cost)}`,this.pending={type:`land`,x:t.x,y:t.y,delta:e.delta};break}}i.ok||(this.pending=void 0),this.world.setGhost(a),this.confirmButton.disabled=!this.pending,this.tip.replaceChildren(i.ok?o:i.reason?`${o}. ${i.reason}`:o,...this.hinting?this.viewHint:[]),this.tip.classList.toggle(`refused`,!i.ok),this.tip.style.display=``,this.tipSize={width:this.tip.offsetWidth,height:this.tip.offsetHeight},this.placeTip()}frame(){if(!this.toolValue)return;let e=this.world.camera,t=`${e.centerX},${e.centerY},${e.zoom},${e.magnify},${e.rotation}`,n=this.viewKey!==``&&t!==this.viewKey;this.viewKey=t,n&&this.hinting?(this.hinting=!1,this.refresh()):this.placeTip()}placeTip(){let e=this.aimAt;if(!e||this.tip.style.display===`none`)return;let t=this.world.screenOf(e.x+.5,e.y+.5,0,this.onScreen),n=t.y,r=this.ghostRect;if(r)for(let[e,t]of[[r.x-1,r.y-1],[r.x+r.w+1,r.y-1],[r.x-1,r.y+r.d+1],[r.x+r.w+1,r.y+r.d+1]])n=Math.max(n,this.world.screenOf(e,t,0,this.scratch).y);let i=Math.min(window.innerWidth-this.tipSize.width-4,Math.round(t.x)+18),a=Math.min(window.innerHeight-this.tipSize.height-4,Math.round(n)+12);this.tip.style.left=`${Math.max(4,i)}px`,this.tip.style.top=`${Math.max(4,a)}px`}},My=e=>`$${Math.round(e).toLocaleString(`en-US`)}`,Ny=(e,t,n=`${t}s`)=>`${e} ${e===1?t:n}`,Py,Fy=new Map,Iy=``,Ly={key:``,at:-1/0},Ry=()=>{},zy=()=>{};function By(e){zy=e}function Vy(e,t){Fy.set(e,t),e===Iy&&Ry()}function Hy(e,t=``){let n=document.createElement(`div`);return n.className=e,n.textContent=t,n}function Uy(e,t,n,r=`text-button`){let i=document.createElement(`button`);return i.className=r,i.textContent=e,i.dataset.tip=t,i.addEventListener(`click`,n),i}function Wy(e,t,n,r,i,a){let o=Ly.key===e&&performance.now()-Ly.at<3e3;return Uy(o?n:t,r,()=>{Ly.key===e&&performance.now()-Ly.at<3e3?(Ly={key:``,at:-1/0},i()):Ly={key:e,at:performance.now()},a()},o?`text-button refused`:`text-button`)}function Gy(e){let t=[];return e.rehoused&&t.push(`${Ny(e.rehoused,`party`,`parties`)} to rooms as good or better, free`),e.walked&&t.push(`${Ny(e.walked,`party`,`parties`)} (${Ny(e.walkedGuests,`guest`)}) to another hotel, at ${My(e.cost)}: they won’t like it`),t.length?`Moving them: ${t.join(`; `)}.`:``}var Ky;function qy(e){Ky={object:e,what:`down`}}function Jy(e,t,n){Ry=n,Py&&Py.object!==e.id&&(Py=void 0),Ky&&Ky.object!==e.id&&(Ky=void 0);let r=e=>t({type:`command`,command:e}),i=[],a=e.bookings;a&&i.push(...Xy(e,a,r));let o=a?.wing&&!a.wing.refitting&&!a.comingDown,s=a?.held&&!a.comingDown;if(o||s){let c=(t,r,i)=>{let a=Ky?.what===t,o=Uy(r,i,()=>{Ky=a?void 0:{object:e.id,what:t},t===`refit`&&a&&(Py=void 0),n()});return o.setAttribute(`aria-pressed`,String(a)),o},l=Hy(`refit-actions`);o&&l.append(c(`refit`,`Refit`,`Change its rooms, style, floors or length, a floor at a time`)),s&&l.append(c(`down`,a.undoRefund===void 0?`Demolish`:`Undo`,`Take it down once its guests have gone, or move them out now`)),i.push(l),Ky?.what===`refit`&&o&&i.push(...Qy(e,a.wing,t,r,n)),Ky?.what===`down`&&s&&i.push(...Zy(e,a,r,n))}return e.moveFee!==void 0&&i.push(Uy(`Move it: ${My(e.moveFee)}`,`Pick it up and put it down somewhere else. It keeps its books and its history`,()=>{zy({kind:`build`,type:e.type,orient:e.orient??0,turned:!0,moving:e.id})})),i}function Yy(e){return e.lastOut>=0?`its last guests leave on ${zu(e.lastOut,!0)}`:`nobody is staying or booked`}function Xy(e,t,n){let r=[];for(let e of t.work)r.push(Hy(`inset`,e));return t.comingDown?(r.push(Hy(`inset`,`It comes down by itself once it’s empty: ${Yy(t)}.`)),r.push(Uy(`Keep it`,`Don’t take it down: it takes bookings again`,()=>n({type:`cancelWork`,object:e.id}))),r):(t.closed?r.push(Hy(`inset`,`Taking no new bookings: ${Yy(t)}.`)):t.held&&r.push(Hy(`inset`,`${Ny(t.vacate.guests,`guest`)} staying or booked: ${Yy(t)}.`)),r.push(t.closed?Uy(`Take bookings again`,`Open its rooms to new bookings`,()=>n({type:`closeBookings`,object:e.id,closed:!1})):Uy(`Close to new bookings`,`Its guests stay on to the end of their stays, but nobody new books it, so it empties`,()=>n({type:`closeBookings`,object:e.id,closed:!0}))),r)}function Zy(e,t,n,r){let i=t.undoRefund!==void 0,a=i?`Undo`:`Demolish`,o=i?t.undoRefund:t.refund,s={x:e.x,y:e.y},c=t.vacate.cost?`, ${My(t.vacate.cost)}`:``;return[...Gy(t.vacate)?[Hy(`inset`,Gy(t.vacate))]:[],Uy(`${a} when it’s empty`,`It takes no new bookings, and comes down by itself as its last guests leave, for ${My(o)} back. No stay is lost`,()=>{n(i?{type:`undo`,when:`empty`}:{type:`demolish`,...s,when:`empty`})}),Wy(`now:${e.id}`,`${a} now: move ${Ny(t.vacate.guests,`guest`)}${c}`,`Tap again to move them and ${a.toLowerCase()} it`,`Move its guests out now, then take it down for ${My(o)} back`,()=>{n(i?{type:`undo`,when:`now`}:{type:`demolish`,...s,when:`now`})},r)]}function Qy(r,i,a,o,s){let c=Od(i.design),l=Py?.object===r.id?Py.change:{},u=Py?.object===r.id?Py.end:1,d=Od({...i.design,...l}),f=l.style??i.design.style,p=(e,t=u)=>{Py={object:r.id,change:{...l,...e},end:t},s()},m=[Hy(`section-title`,`Refit`)],h=[{label:`The resort’s`,tip:`Built in whatever style the resort is`,pressed:!f,choose:()=>p({style:void 0})},...t.map(t=>({label:e[t].name,tip:`Its architecture: ${e[t].name.toLowerCase()}`,pressed:f===t,choose:()=>p({style:t})}))],g=[{label:`Shorter`,tip:`A room fewer along its run, on every floor, taken off once its guests have gone`,pressed:!1,disabled:d.length<=n.minLength,choose:()=>p({length:Math.max(n.minLength,d.length-1)})},{label:`Longer`,tip:`A room more along its run, on every floor, built while the rest stay open`,pressed:!1,disabled:d.length>=n.maxLength,choose:()=>p({length:Math.min(n.maxLength,d.length+1)})}],_=[0,1].map(e=>({label:`${t_(i.orient,e).replace(/^./,e=>e.toUpperCase())} end`,tip:`The end of its run that grows or shrinks`,pressed:u===e,choose:()=>p({},e)}));if(m.push(gy(`wing`,{...i.design,...l},e=>p(e),!0,[uy(`Style`,h),uy(`Length`,g),uy(`At`,_)])),m.push(Hy(`inset`,`${Ny(d.length*d.floors*(d.loaded===`double`?2:1),`room`)}: ${d.length} along, on ${Ny(d.floors,`floor`)}${d.length!==c.length||d.floors!==c.floors?` (now ${c.length} on ${c.floors})`:``}.`)),!Py||Py.object!==r.id)return m;let v=JSON.stringify([r.id,l,u]);v!==Iy&&(Iy=v,a({type:`previewWork`,key:v,object:r.id,design:l,end:u}));let y=Fy.get(v);if(!y)return m;let b=Uy(`Keep it as it is`,`Forget these changes`,()=>{Py=void 0,s()});if(y.refused)return m.push(Hy(`status closed`,y.refused),b),m;let x=y.cost>=0?My(y.cost):`${My(-y.cost)} back`,S=[];y.builds&&S.push(`${Ny(y.builds,`new room`)} built while the rest stay open`),y.floors&&S.push(`${Ny(y.floors,`floor`)} refitted one at a time, each out of use for a few days once its guests have gone`),y.removes&&S.push(`${Ny(y.removes,`room`)} taken off once their guests have gone`);let C=y.lastOut>=0?` The last guests in the rooms worked on leave on ${zu(y.lastOut,!0)}.`:``;m.push(Hy(`inset`,`${x}: ${S.join(`; `)}. About ${Ny(y.days,`day`)} of work.${C}`));let w=e=>{o({type:`refit`,object:r.id,design:l,end:u,now:e}),Py=void 0};if(m.push(Uy(`Refit for ${x}`,`Paid now. The work waits for guests to leave, a floor at a time, so no stay is lost`,()=>w(!1),`text-button primary`)),y.vacate.parties||y.floors>1){let e=y.vacate.parties?`, moving ${Ny(y.vacate.guests,`guest`)}${y.vacate.cost?` (${My(y.vacate.cost)})`:``}`:``;m.push(Wy(`refit:${r.id}`,`All at once, now${e}`,`Tap again to start now`,`Every floor at once: about ${Ny(y.allAtOnce,`day`)}. ${Gy(y.vacate)}`,()=>w(!0),s))}return m.push(b),m}var $y=e=>`$${Math.round(e).toLocaleString(`en-US`)}`,eb={now:`Now`,books:`Books`,change:`Change`,about:`About`};function tb(e,t=``){let n=document.createElement(`div`);return n.className=e,n.textContent=t,n}function nb(e,t,n){let r=tb(`row`),i=document.createElement(`span`);i.className=`key`,i.textContent=e;let a=document.createElement(`span`);return a.textContent=t,r.append(i,a),n&&(r.dataset.tip=n),r}function rb(e,t,n,r){let i=tb(`row stepper`);i.dataset.tip=n;let a=document.createElement(`span`);a.className=`key`,a.textContent=e;let o=document.createElement(`span`);o.className=`step`;let s=(t,n)=>{let i=document.createElement(`button`);return i.className=`text-button small`,i.textContent=t,i.setAttribute(`aria-label`,`${n>0?`Raise`:`Lower`} ${e.toLowerCase()}`),i.addEventListener(`click`,()=>r(n)),i},c=document.createElement(`span`);return c.className=`value`,c.textContent=t,o.append(s(`-`,-1),c,s(`+`,1)),i.append(a,o),i}function ib(e,t){let n=tb(`need`),r=document.createElement(`span`);r.textContent=e;let i=document.createElement(`span`);i.className=`bar`;let a=document.createElement(`span`);return a.className=t<30?`fill low`:t<60?`fill mid`:`fill`,a.style.width=`${Math.round(Math.max(0,Math.min(100,t)))}%`,i.append(a),n.append(r,i),n}function ab(e,t,n,r=`text-button`){let i=document.createElement(`button`);return i.className=r,i.textContent=e,i.dataset.tip=t,i.addEventListener(`click`,n),i}var ob=class{window;send;resort;content;watching=-1;tab=`now`;armedAt=-1/0;pressing=!1;last;draft;onStaff;constructor(e,t,n,r,i){this.send=t,this.resort=n,this.window=new O_(e,`Place`,`construction`,r,i),this.window.element.classList.add(`place-window`),this.content=tb(`place`),this.window.body.append(this.content),this.window.hide(),this.window.onHide=()=>this.watch(-1),this.content.addEventListener(`pointerdown`,()=>this.pressing=!0),window.addEventListener(`pointerup`,()=>{this.pressing&&(this.pressing=!1,setTimeout(()=>this.redraw(),0))})}open(e,t){(e!==this.watching||t)&&(this.tab=t??`now`),this.armedAt=-1/0,this.draft=void 0,this.watch(e),this.window.show()}watch(e){e!==this.watching&&(this.watching=e,this.send({type:`watchPlace`,id:e}))}command(e){this.send({type:`command`,command:e})}redraw(){this.last&&this.show(this.last)}show(e){if(!e||e.id!==this.watching){!e&&this.watching>=0&&(this.content.replaceChildren(tb(`inset`,`It isn’t there any more.`)),this.watching=-1);return}if(this.last=e,this.pressing)return;this.window.setTitle(e.name);let t=tb(`status-strip ${e.open?`open`:`closed`}`,e.status),n=this.tabsFor(e);if(!n.length){this.content.replaceChildren(t,...this.aboutRows(e),...this.changeTab(e));return}n.includes(this.tab)||(this.tab=`now`);let r=tb(`tabs place-tabs`);r.append(...n.map(e=>{let t=ab(eb[e],``,()=>{this.tab=e,this.redraw()},`tab`);return delete t.dataset.tip,t.setAttribute(`aria-pressed`,String(e===this.tab)),t}));let i=this.tab===`now`?this.nowRows(e):this.tab===`books`?this.booksTab(e):this.tab===`change`?this.changeTab(e):this.aboutRows(e);this.content.replaceChildren(t,r,...i)}tabsFor(e){return e.using!==void 0||e.rooms||e.price!==void 0||e.books||e.design||e.staff.length?[`now`,...e.books?[`books`]:[],`change`,`about`]:[]}nowRows(e){let t=[];if(e.open||t.push(...U_(e.type,this.resort,{planning:!1,needsOnly:!0,wayIn:e.wayIn,onStaff:this.onStaff})),e.using!==void 0&&t.push(nb(`In use`,`${e.using} of ${e.capacity}`,`Guests using it now, of how many it holds at once`)),e.today){let n=e=>`${e.visits} visit${e.visits===1?``:`s`}${e.takings?`, ${$y(e.takings)}`:``}`;t.push(nb(`Today`,n(e.today)),nb(`Yesterday`,n(e.yesterday)))}if(e.price!==void 0){let n=Math.max(1,Math.round(e.price*.1));t.push(rb(`Price`,$y(e.price),`What every ${ou[e.type].name.toLowerCase()} charges. Too high and guests stay away`,t=>{this.command({type:`setPrice`,building:e.type,amount:e.price+t*n})}))}let n=e.rooms;if(n){t.push(nb(`Rooms taken`,`${n.taken} of ${n.count}${n.dirty?`, ${n.dirty} to clean`:``}`)),t.push(nb(`Staying`,`${n.guests} guest${n.guests===1?``:`s`}`));let r=n.rateLow===n.rateHigh?$y(n.rateLow):`${$y(n.rateLow)} to ${$y(n.rateHigh)}`,i=n.setsRate===`wing`?`This wing’s nightly rate: rooms with better views charge more`:`The nightly rate for every ${ou[e.type].name.toLowerCase()}`;t.push(rb(`A night`,r,i,t=>{n.setsRate===`wing`?this.command({type:`setWingRate`,object:e.id,amount:n.base+t*10}):this.command({type:`setRate`,building:e.type,amount:n.rateLow+t*10})})),t.push(nb(`View`,`${Math.round(n.view)} of 100`,`How much sea the rooms see, on average`)),t.push(nb(`At night`,`${Math.round(n.nightDb)} dB`,`How loud the rooms are at 11 pm: above about 44 dB, light sleepers lie awake`))}let r=e.condition;if(r&&t.push(r.broken?tb(`status closed`,`Broken: ${r.what}. ${r.seenTo?`Maintenance is on the way.`:`Waiting for maintenance.`}`):ib(`Condition`,r.value)),e.staff.length&&t.push(nb(`Staff here`,e.staff.join(`, `))),e.said.length){t.push(tb(`section-title`,`Guests say`));for(let n of e.said.slice(0,2))t.push(tb(`thought`,`“${n}”`))}return t}booksTab(e){let t=ny(e.books,e.rooms?`rooms`:e.price?`takings`:e.today?`free`:`support`);return e.upkeep&&t.push(nb(`Running costs`,`${$y(e.upkeep)} a day`,`Upkeep and running costs, before staff and stock`)),t}changeTab(e){let t=e.bookings?.held||e.bookings?.comingDown;return[...e.design?this.designRows(e):[],...Jy(e,this.send,()=>this.redraw()),...t?[]:[this.demolishButton(e)]]}aboutRows(e){return[tb(`blurb`,e.blurb),...U_(e.type,this.resort,{planning:!1,wayIn:e.wayIn,onStaff:this.onStaff})]}demolishButton(e){let t=performance.now()-this.armedAt<3e3;return ab(t?`Tap again to demolish`:`Demolish`,`Knock it down for part of its cost back (Ctrl+Z puts it back)`,()=>{performance.now()-this.armedAt<3e3?(this.command({type:`demolish`,x:e.x,y:e.y}),this.window.hide()):(this.armedAt=performance.now(),this.redraw())},t?`text-button refused`:`text-button`)}designRows(e){let t=e.type,n={...e.design},r={...n,...this.draft},i=n=>({type:t,orient:e.orient??0,design:n}),a=e=>{this.draft={...this.draft,...e},this.redraw()},o=[tb(`inset`,Ey(i(r)))];e.refitUntil!==void 0&&o.push(tb(`status closed`,`Being refitted until ${zu(e.refitUntil,!0)}.`));let{min:s,max:c}=td[t],[l,u]=r.size??n.size;if(o.push(rb(`Across the front`,`${l} tiles`,`Wider or narrower: it grows from its corner, onto free land you own`,e=>a({size:[Math.max(s[0],Math.min(c[0],l+e)),u]}))),o.push(rb(`Front to back`,`${u} tiles`,`Deeper or shallower`,e=>a({size:[l,Math.max(s[1],Math.min(c[1],u+e))]}))),o.push(gy(t,r,a)),this.draft){let t=Ld(i(n),i(r)),a=ab(t.days?`Refit: ${$y(t.cost)}, shut ${t.days} days`:t.cost?`Change it: ${$y(t.cost)}`:`Make the change`,`Pay for the new design now. Guests already inside finish first`,()=>{this.command({type:`refit`,object:e.id,design:this.draft}),this.draft=void 0},`text-button primary`),s=ab(`Keep it as it is`,`Forget these changes`,()=>{this.draft=void 0,this.redraw()}),c=tb(`refit-actions`);c.append(a,s),o.push(c)}return o}showGround(e,t){this.watch(-1),this.window.setTitle(`The ground here`);let n=e=>e===-1?``:`, mostly the ${Jg(e)}`,r=[e,`Noise ${Math.round(t.dbDay)} dB by day${n(t.loudestDay)}; ${Math.round(t.dbNight)} dB at night${n(t.loudestNight)}.`,`Ocean view ${Math.round(t.view)}, scenery ${Math.round(t.scenery)}${t.backOfHouse>=1?`, back of house in sight ${Math.round(t.backOfHouse)}`:``}.`,...t.wildlife];if(t.rooms){let e=a.map((e,n)=>t.rooms.categories[n]?`${e.name.toLowerCase()} ${t.rooms.categories[n]}`:``).filter(Boolean).join(`, `);r.splice(1,0,`${t.rooms.name}: ${t.rooms.count} rooms, ${t.rooms.taken} taken; ${e}.`)}this.content.replaceChildren(tb(`inset tile-info`,r.join(`
`))),this.window.show()}},sb=e=>`${e<0?`-`:``}$${Math.abs(Math.round(e)).toLocaleString(`en-US`)}`,cb={honeymoon:`honeymooners`,family:`families`,wellness:`wellness`,young:`young groups`},lb={rooms:`Rooms`,food:`Food`,drink:`Drinks`,spa:`Spa`,activities:`Activities`},ub={wages:`Wages`,upkeep:`Upkeep`,utilities:`Utilities`,goods:`Food and drink stock`,repairs:`Repairs and parts`,construction:`Construction`,land:`Land`,interest:`Loan interest`},db={full:[`Full`,`No room free for the nights they wanted, or none big enough for the party.`],unready:[`Rooms not ready`,`Rooms were free but still waiting to be cleaned after the last guests. Housekeepers work from a housekeeping and laundry building.`],price:[`Priced out`,`The rate was more than they would pay for that room. Price-sensitive families and young groups go first.`],storm:[`Storms`,`Called off for a storm.`]},fb=[[`occupancy`,`Occupancy`,`Share of the resort’s rooms sold each night, counted at midnight.`,e=>`${Math.round(e*100)}%`],[`adr`,`Average daily rate`,`ADR: what an occupied room earned per night, on average.`,sb],[`revpar`,`RevPAR`,`Revenue per available room: room revenue per night across every room, full or empty. Occupancy times ADR.`,sb],[`spendPerGuest`,`Spend per guest`,`What each guest spent per night on food, drink, the spa and activities.`,sb]],pb=class{window;send;tabs;content;tab=`books`;report;pressing=!1;constructor(e,t,n,r){this.send=t,this.window=new O_(e,`Finances`,`finances`,n,r),this.window.element.classList.add(`finances-window`),this.tabs=document.createElement(`div`),this.tabs.className=`tabs`,this.content=document.createElement(`div`),this.content.className=`finances`,this.window.body.append(this.tabs,this.content),this.window.hide(),this.content.addEventListener(`pointerdown`,()=>this.pressing=!0),window.addEventListener(`pointerup`,()=>{this.pressing&&(this.pressing=!1,setTimeout(()=>this.render(),0))}),this.renderTabs()}toggle(){this.window.toggle(),this.render()}renderTabs(){this.tabs.replaceChildren(...[[`books`,`Books`],[`places`,`What pays`],[`prices`,`Prices`]].map(([e,t])=>{let n=document.createElement(`button`);return n.className=`tab`,n.textContent=t,n.setAttribute(`aria-pressed`,String(e===this.tab)),n.addEventListener(`click`,()=>{this.tab=e,this.renderTabs(),this.render()}),n}))}show(e){this.report=e,this.window.visible&&!this.pressing&&this.render()}render(){let e=this.report;e&&this.content.replaceChildren(...this.tab===`books`?this.books(e):this.tab===`places`?this.places(e):this.prices(e))}places(e){let t=document.createElement(`table`);t.className=`ledger places`;let n=t.insertRow();for(let e of[`Last 7 days`,`Took`,`Cost`,`Net`,`Use`]){let t=document.createElement(`th`);t.textContent=e,n.append(t)}let r=e.places.filter(e=>e.books.days>0).sort((e,t)=>t.books.week.revenue-t.books.week.costs-(e.books.week.revenue-e.books.week.costs));for(let e of r){let n=e.books.week,r=t.insertRow(),i=r.insertCell();i.textContent=e.name,i.dataset.tip=e.kind===`free`?`Free to guests: part of why they book and what they write`:e.kind===`support`?`Behind the scenes: it costs so the rest can run`:e.kind===`rooms`?`Room nights at the agreed rates`:`What guests paid here`,r.insertCell().textContent=e.kind===`free`||e.kind===`support`?``:sb(n.revenue),r.insertCell().textContent=sb(n.costs);let a=r.insertCell();a.textContent=sb(n.revenue-n.costs),a.className=n.revenue-n.costs>=0?`gain`:`loss`,r.insertCell().textContent=e.kind===`rooms`?n.rooms?`${Math.round(n.nights/n.rooms*100)}% full`:``:n.visits?`${n.visits} visits`:``}let i=document.createElement(`div`);return i.className=`inset note`,i.textContent=r.length?`Each place’s takings, less its upkeep, utilities, stock, repairs and the time staff spent working there. Tap a building for its own books.`:`Nothing has a day on its books yet. They start at midnight.`,[t,i]}books(e){let t=document.createElement(`table`);t.className=`ledger`;let n=t.insertRow();for(let e of[``,`This month`,`Last month`]){let t=document.createElement(`th`);t.textContent=e,n.append(t)}let r=(e,n,r,i=``,a=``)=>{let o=t.insertRow();o.className=i;let s=o.insertCell();s.textContent=e,a&&(s.dataset.tip=a),o.insertCell().textContent=sb(n),o.insertCell().textContent=sb(r)},i=e.thisMonth,a=e.lastMonth;for(let e of r_)r(lb[e],i.revenue[e],a.revenue[e]);r(`Revenue`,o_(i),o_(a),`total`);for(let e of i_)r(ub[e],-i.costs[e],-a.costs[e]);r(`Costs`,-s_(i),-s_(a),`total`);let o=c_(i),s=c_(a);r(`Profit`,o.profit,s.profit,`profit`,`Revenue less costs, construction included.`);let c=document.createElement(`table`);c.className=`ledger`;for(let[e,t,n,r]of fb){let l=c.insertRow(),u=l.insertCell();u.textContent=t,u.dataset.tip=n,l.insertCell().textContent=i.roomsAvailable?r(o[e]):`–`,l.insertCell().textContent=a.roomsAvailable?r(s[e]):`–`}let l=c.insertRow(),u=l.insertCell();u.textContent=`Bookings turned away`,u.dataset.tip=`Booking requests the resort couldn’t take, of all those asked for. Rooms priced below what guests would happily pay draw more requests.`,l.insertCell().textContent=`${i.turnedAway} of ${i.requests}`,l.insertCell().textContent=`${a.turnedAway} of ${a.requests}`;for(let e of a_){if(!i.turnedAwayFor[e]&&!a.turnedAwayFor[e])continue;let t=c.insertRow();t.className=`sub`;let n=t.insertCell();n.textContent=db[e][0],n.dataset.tip=db[e][1],t.insertCell().textContent=String(i.turnedAwayFor[e]),t.insertCell().textContent=String(a.turnedAwayFor[e])}let d=document.createElement(`div`);d.className=`loan-row`;let f=document.createElement(`span`);return f.textContent=`Cash ${e.sandbox?`unlimited`:sb(e.cash)}, loan ${sb(e.loan)}`,f.dataset.tip=`Borrow up to ${sb(xu.max)} at ${Math.round(xu.interest*100)}% a year, charged monthly. Repay whenever you like.`,d.append(f,this.button(`Borrow`,`Borrow ${sb(xu.step)} more`,e.loan>=xu.max,()=>this.send({type:`command`,command:{type:`loan`,amount:xu.step}})),this.button(`Repay`,`Repay ${sb(xu.step)}`,e.loan<=0,()=>this.send({type:`command`,command:{type:`loan`,amount:-xu.step}}))),[t,c,d]}prices(e){let t=document.createElement(`table`);t.className=`ledger prices`;let n=t.insertRow();for(let e of[`Rooms, a night`,``,``]){let t=document.createElement(`th`);t.textContent=e,n.append(t)}let r=(e,n,r,i,a)=>{let o=t.insertRow(),s=o.insertCell();s.textContent=ou[e].name,s.dataset.tip=a,o.insertCell().textContent=sb(n);let c=o.insertCell();c.className=`steppers`,c.append(this.button(`-`,`${r===1?`$1`:`$${r}`} less`,n<=r,()=>this.send({type:`command`,command:{type:i,building:e,amount:n-r}})),this.button(`+`,`${r===1?`$1`:`$${r}`} more`,!1,()=>this.send({type:`command`,command:{type:i,building:e,amount:n+r}})))};for(let[t,n]of Object.entries(e.rates)){let i=e.roomsByType[t]??0;if(ou[t].legacy&&!i)continue;let a=1+Rg.payPerStar*(e.rating-3),o=Object.entries(vu).map(([e,n])=>`${cb[e]} ${sb(Math.round(Mu(n[t]??0)*a))}`).join(`, `);r(t,n,10,`setRate`,`${i} room${i===1?``:`s`} built. At ${e.rating} stars, with a fair view, guests will happily pay: ${o}. A full view adds up to a fifth; no view takes a tenth off.`)}for(let n of e.wings){let r=t.insertRow(),i=r.insertCell();i.textContent=`${n.name}, ${n.taken} of ${n.rooms} taken`;let o=Hg.map((e,t)=>`${cb[e]} ${sb(n.happy[t])}`).join(`, `);i.dataset.tip=a.map((e,t)=>`${e.name}: ${n.categories[t].count}${n.categories[t].count?` at ${sb(n.categories[t].rate)}`:``}`).join(`. `)+`. The base rate is a partial-view room\u2019s. At ${e.rating} stars, guests will happily pay, on average for its rooms: ${o}.`,r.insertCell().textContent=sb(n.rate);let s=r.insertCell();s.className=`steppers`,s.append(this.button(`-`,`$10 less`,n.rate<=10,()=>this.send({type:`command`,command:{type:`setWingRate`,object:n.object,amount:n.rate-10}})),this.button(`+`,`$10 more`,!1,()=>this.send({type:`command`,command:{type:`setWingRate`,object:n.object,amount:n.rate+10}})))}let i=t.insertRow(),o=i.insertCell();o.textContent=`Weekend nights`,o.dataset.tip=`Friday and Saturday nights cost this much more than the rest of the week. Weekend getaways fill them; families and retreats stay through the week.`;let s=Math.round(e.weekendPremium*100);i.insertCell().textContent=`+${s}%`;let c=i.insertCell();c.className=`steppers`;let l=_u.step;if(c.append(this.button(`-`,`${Math.round(l*100)}% less`,e.weekendPremium<=0,()=>this.send({type:`command`,command:{type:`setWeekendRate`,premium:e.weekendPremium-l}})),this.button(`+`,`${Math.round(l*100)}% more`,e.weekendPremium>=_u.most,()=>this.send({type:`command`,command:{type:`setWeekendRate`,premium:e.weekendPremium+l}}))),e.week.length){let n=t.insertRow(),r=n.insertCell();r.textContent=`Last 7 nights`,r.dataset.tip=`Rooms sold each night this past week.`;let i=n.insertCell();i.colSpan=2,i.className=`week-nights`,i.textContent=e.week.map(e=>`${Tu[e.weekday]} ${Math.round(e.occupancy*100)}%`).join(`  `)}let u=t.insertRow(),d=document.createElement(`th`);d.textContent=`Venues, each`,u.append(d);for(let[t,n]of Object.entries(e.prices))r(t,n,1,`setPrice`,t===`restaurant`?`Dinner, per guest. Breakfast is ${Math.round(yu.breakfast*100)}% of it and lunch ${Math.round(yu.lunch*100)}%. Price-sensitive guests go elsewhere, or grumble.`:`Price per guest per visit. Price-sensitive guests go elsewhere, or grumble.`);return[t]}button(e,t,n,r){let i=document.createElement(`button`);return i.className=`text-button`,i.textContent=e,i.dataset.tip=t,i.disabled=n,i.addEventListener(`click`,r),i}},mb=e=>e.length<2?e.join(``):`${e.slice(0,-1).join(`, `)} and ${e.at(-1)}`,hb=class{window;send;list;note;pressing=!1;report;resort;constructor(e,t,n,r,i){this.send=t,this.resort=n,this.window=new O_(e,`Staff`,`staff`,r,i),this.window.element.classList.add(`staff-window`),this.note=document.createElement(`div`),this.note.className=`inset`,this.list=document.createElement(`div`),this.list.className=`staff-list`,this.window.body.append(this.list,this.note),this.list.addEventListener(`pointerdown`,()=>this.pressing=!0),window.addEventListener(`pointerup`,()=>{this.pressing&&(this.pressing=!1,setTimeout(()=>this.render(),0))}),this.window.hide()}toggle(){this.window.toggle(),this.render()}open(){this.window.show(),this.render()}show(e){this.report=e,this.window.visible&&!this.pressing&&this.render()}render(){let e=this.report;if(!e)return;let t=0;this.list.replaceChildren(...e.staff.map(({type:e,hired:n,onDuty:r,wontJoin:i})=>{let a=bu[e],o=Math.round(Mu(a.wage));t+=o*n;let s=document.createElement(`div`);s.className=`staff-row`,s.dataset.tip=a.blurb;let c=document.createElement(`span`);c.className=`name`,c.textContent=a.name;let l=document.createElement(`span`);l.className=`detail`,l.textContent=`$${o} a day, ${n} hired, ${r} at work`;let u=this.button(`Hire`,`Hire a ${a.name.toLowerCase()}`,!!i,()=>this.send({type:`command`,command:{type:`hire`,staff:e}}));i&&s.classList.add(`locked`);let d=this.button(`Let go`,`Let a ${a.name.toLowerCase()} go`,n===0,()=>this.send({type:`command`,command:{type:`fire`,staff:e}}));s.append(c,l,u,d);let f=n?[]:P_(e).filter(e=>this.resort.built(e)).map(e=>`the ${ou[e].name.toLowerCase()}`),p=i??(f.length?`Needed: ${mb(f)} can’t open without one`:void 0);if(p){let e=document.createElement(`div`);e.className=i?`why muted`:`why refused`,e.textContent=p,s.append(e)}return s})),this.note.textContent=`Wages $${t.toLocaleString(`en-US`)} a day. Rooms waiting to be cleaned: ${e.dirtyRooms}.`}button(e,t,n,r){let i=document.createElement(`button`);return i.className=`text-button`,i.textContent=e,i.dataset.tip=t,i.disabled=n,i.addEventListener(`click`,r),i}},gb=[`noiseNight`,`noiseDay`,`view`,`scenery`,`backOfHouse`,`traffic`,`satisfaction`,`wildlife`],_b=e=>`${Math.round(e)} dB`,vb=e=>`${Math.round(e)}`,yb={noiseNight:{name:`Noise at night`,blurb:`What rooms hear after ten. Light sleepers wake above ${Ef.sleepless} dB.`,breaks:[35,40,Ef.sleepless,50,56],highIsGood:!1,blankBelow:30,blankLabel:`Uncoloured: under 30 dB, silent.`,unit:_b},noiseDay:{name:`Noise by day`,blurb:`Guests find it wearing above ${Ef.annoying} dB.`,breaks:[kf.quiet,50,56,Ef.annoying,68],highIsGood:!1,blankBelow:30,blankLabel:`Uncoloured: under 30 dB, silent.`,unit:_b},view:{name:`Ocean view`,blurb:`How much sea someone standing here can see, nearer water counting for more.`,breaks:[3,Of.poor,25,Of.lovely,65],highIsGood:!0,blankBelow:.5,blankLabel:`Uncoloured: no sea in sight.`,unit:vb},scenery:{name:`Scenery`,blurb:`Planting and water lift it; back of house and bare rock drag it down. Lovely above ${Af.lovely}.`,breaks:[Af.ugly,-5,5,20,Af.lovely],highIsGood:!0,unit:vb},backOfHouse:{name:`Back of house in sight`,blurb:`Kitchens, laundries, sheds and service paths guests can see. They notice above ${jf.noticeable}.`,breaks:[1,2.5,4,jf.noticeable,9],highIsGood:!1,blankBelow:.25,blankLabel:`Uncoloured: none in sight.`,unit:vb},traffic:{name:`Foot traffic`,blurb:`Where guests have walked over the last day or so, busiest in plum.`,breaks:[.05,.15,.3,.5,.75],highIsGood:!1,blankBelow:.01,blankLabel:`Uncoloured: nobody has been.`,relative:!0,unit:e=>`${Math.round(e*100)}%`},satisfaction:{name:`Guest happiness`,blurb:`How happy the staying guests seen here have been, over the last day or so.`,breaks:[35,45,55,65,75],highIsGood:!0,blankLabel:`Uncoloured: too few guests seen to say.`,unit:vb},wildlife:{name:`Wildlife`,blurb:`On land, how many birds settle: planting brings them, noise keeps them away. On the beach, where turtles can nest: dark, quiet sand with no lights in sight.`,breaks:[8,20,35,50,65],highIsGood:!0,blankBelow:1,blankLabel:`Uncoloured: nothing settles there (water, buildings, the loudest spots).`,unit:vb}};function bb(e,t){if(!Number.isFinite(t)||e.blankBelow!==void 0&&t<e.blankBelow)return 0;let n=0;for(;n<5&&t>=e.breaks[n];)n++;return e.highIsGood?6-n:n+1}var xb=2e3,Sb=class{window;send;show;buttons=new Map;blurb;legend;active;lastAsked=0;onVisible=()=>{};constructor(e,t,n,r,i){this.send=t,this.show=n,this.window=new O_(e,`Overlays`,`resort`,r,i),this.window.element.classList.add(`overlay-window`);let a=document.createElement(`div`);a.className=`overlay-list`;for(let e of gb){let t=document.createElement(`button`);t.className=`text-button`,t.textContent=yb[e].name,t.setAttribute(`aria-pressed`,`false`),t.addEventListener(`click`,()=>this.select(this.active===e?void 0:e)),this.buttons.set(e,t),a.append(t)}this.blurb=document.createElement(`div`),this.blurb.className=`inset overlay-blurb`,this.legend=document.createElement(`div`),this.legend.className=`overlay-legend`,this.window.body.append(a,this.blurb,this.legend),this.window.onHide=()=>{this.select(void 0),this.onVisible(!1)},this.window.hide(),this.renderLegend()}toggle(){this.window.visible?this.window.hide():(this.window.show(),this.onVisible(!0),this.active||this.select(`noiseNight`))}showOverlay(e){this.window.show(),this.onVisible(!0),this.select(e)}select(e){this.active=e;for(let[t,n]of this.buttons)n.setAttribute(`aria-pressed`,String(t===e));e?this.ask():this.show(void 0),this.renderLegend()}fieldsChanged(){this.active&&this.ask()}frame(e){(this.active===`traffic`||this.active===`satisfaction`)&&e-this.lastAsked>xb&&this.ask(e)}receive(e,t){if(e!==this.active)return;let n=yb[e],r=1;if(n.relative)for(let e of t)e>r&&(r=e);let i=new Uint8Array(t.length);for(let e=0;e<t.length;e++)i[e]=bb(n,t[e]/r);this.show(i),this.renderLegend()}ask(e=performance.now()){this.active&&(this.lastAsked=e,this.send({type:`field`,id:this.active}))}renderLegend(){let e=this.active;if(!e){this.blurb.textContent=`Pick an overlay to colour the ground by it.`,this.legend.replaceChildren();return}let t=yb[e];this.blurb.textContent=t.blurb;let n=t.breaks,r=[`under ${t.unit(n[0])}`,...[0,1,2,3].map(e=>`${t.unit(n[e])} to ${t.unit(n[e+1])}`),`${t.unit(n[4])} and up`],i=t.highIsGood?r.slice().reverse():r,a=document.createElement(`div`);a.className=`legend-note`,a.textContent=t.blankLabel??``,this.legend.replaceChildren(...i.map((e,t)=>{let n=document.createElement(`div`);n.className=`legend-row`;let r=document.createElement(`span`);r.className=`swatch`;let[i,a,o]=jl(vl[t][0]);r.style.background=`rgb(${i}, ${a}, ${o})`;let s=document.createElement(`span`);return s.textContent=e,n.append(r,s),n}),...t.blankLabel?[a]:[])}},Cb=12,wb=class{root;world;current;labels=[];shownKey;scratch={x:0,y:0};constructor(e,t,n){this.root=e,this.world=t,this.current=n}show(e,t){if(e===this.current()){this.clear(),this.shownKey=e;for(let e of t.rooms)this.add(e.x,e.y,`View ${Math.round(e.before)} → ${Math.round(e.after)}`,`cut`);t.own&&this.add(t.own.x,t.own.y,`View ${Math.round(t.own.view)}`,`own`)}}frame(){this.shownKey!==void 0&&this.shownKey!==this.current()&&this.clear();for(let e of this.labels){let t=this.world.screenOf(e.x,e.y,Cb,this.scratch);e.element.style.transform=`translate(${Math.round(t.x)}px, ${Math.round(t.y)}px) translate(-50%, -100%)`}}add(e,t,n,r){let i=document.createElement(`div`);i.className=`view-label ${r}`,i.textContent=n,this.root.append(i),this.labels.push({element:i,x:e,y:t})}clear(){for(let e of this.labels)e.element.remove();this.labels=[],this.shownKey=void 0}},Tb=1400,Eb=28,Db=24,Ob=class{world;popups=[];scratch={x:0,y:0};constructor(e,t){this.world=t;for(let t=0;t<Db;t++){let t=document.createElement(`div`);t.className=`money-popup`,t.style.display=`none`,e.append(t),this.popups.push({element:t,x:0,y:0,born:0,live:!1})}}add(e,t,n,r){let i=this.popups.find(e=>!e.live)??this.popups.reduce((e,t)=>e.born<t.born?e:t);i.x=e,i.y=t,i.born=r,i.live=!0,i.element.textContent=`+$${Math.round(n).toLocaleString(`en-US`)}`,i.element.style.display=``}frame(e){for(let t of this.popups){if(!t.live)continue;let n=(e-t.born)/Tb;if(n>=1){t.live=!1,t.element.style.display=`none`;continue}let r=this.world.screenOf(t.x,t.y,6,this.scratch);t.element.style.transform=`translate(${Math.round(r.x)}px, ${Math.round(r.y-n*Eb)}px) translate(-50%, -100%)`,t.element.style.opacity=n<.7?`1`:String(1-(n-.7)/.3)}}};function kb(e,t){let n=document.createElement(`div`);return n.className=e,n.textContent=t,n}function Ab(e,t,n){let r=document.createElement(`div`);r.className=`star-line`,n&&(r.dataset.tip=n);let i=document.createElement(`span`);i.textContent=e;let a=document.createElement(`span`);return a.className=`score`,a.textContent=t.toFixed(1),r.append(i,Kv(Math.round(t*2)/2),a),r}var jb=class{window;tabs;content;tab=`rating`;report;drawn=``;constructor(e,t,n){this.window=new O_(e,`Reviews`,`guests`,t,n),this.window.element.classList.add(`reviews-window`),this.tabs=document.createElement(`div`),this.tabs.className=`tabs`,this.content=document.createElement(`div`),this.content.className=`reviews`,this.window.body.append(this.tabs,this.content),this.window.hide(),this.renderTabs()}toggle(){this.window.toggle(),this.render(!0)}open(e){e&&(this.tab=e),this.renderTabs(),this.window.show(),this.render(!0)}renderTabs(){this.tabs.replaceChildren(...[[`rating`,`Rating`],[`reviews`,`Latest reviews`]].map(([e,t])=>{let n=document.createElement(`button`);return n.className=`tab`,n.textContent=t,n.setAttribute(`aria-pressed`,String(e===this.tab)),n.addEventListener(`click`,()=>{this.tab=e,this.renderTabs(),this.render(!0)}),n}))}show(e){this.report=e,this.window.visible&&this.render(!1)}render(e){let t=this.report;if(!t)return;if(this.tab===`reviews`){let n=`${t.reviews}`;if(!e&&n===this.drawn)return;this.drawn=n,this.content.replaceChildren(...t.latest.length?t.latest.map(e=>{let t=document.createElement(`div`);t.className=`review inset`;let n=document.createElement(`div`);return n.className=`review-head`,n.append(Kv(e.stars),document.createTextNode(` ${e.headline}`)),t.append(n,kb(`review-body`,e.body),kb(`review-by`,e.by)),t}):[kb(`inset`,`No reviews yet. Guests write one when they check out.`)]);return}this.drawn=``;let n=document.createElement(`div`);n.className=`inset rating-summary`;let r=document.createElement(`div`);r.className=`rating-big`,r.append(Kv(t.rating,2));let i=t.reviews?`From ${t.reviews} review${t.reviews===1?``:`s`}, averaging ${t.average.toFixed(1)}.`:`No reviews yet: a new resort starts at 3 stars.`;n.append(r,kb(``,i)),t.average>=t.ceiling+.25&&n.append(kb(`warning`,`Reviews say more, but with these amenities the resort can’t be rated above ${t.ceiling} stars.`));let a=document.createElement(`div`);a.className=`amenities`,a.dataset.tip=`Amenity breadth caps the rating: each kind beyond the first allows half a star more, up to five`;for(let e of t.amenities){let t=kb(e.has?`amenity has`:`amenity`,e.has?e.name:`Add ${e.name.charAt(0).toLowerCase()}${e.name.slice(1)}`);t.dataset.tip=e.has?`${e.hint}: the resort has one`:`${e.hint}: the resort has none, which holds the rating back`,a.append(t)}let o=document.createElement(`div`);o.className=`needs`;for(let e of t.segments)o.append(Ab(e.name,e.reputation,`What ${e.name.toLowerCase()} think of the resort: it brings their bookings`));let s=(e,t,n)=>{let r=document.createElement(`div`);return r.append(kb(`section-title`,e)),r.append(...t.length?t.map(e=>kb(`topic`,e.topic)):[kb(`topic none`,n)]),r},c=document.createElement(`div`);c.className=`said`,c.append(s(`Guests praise`,t.praise,`Nothing yet`),s(`Guests complain about`,t.complaints,`Nothing yet`)),this.content.replaceChildren(n,kb(`section-title`,`Amenities: the ceiling is ${t.ceiling} stars`),a,kb(`section-title`,`By guest type`),o,c)}},Mb=class{root;world;markers=[];scratch={x:0,y:0};key=``;constructor(e,t){this.root=e,this.world=t}show(e){let t=e.map(e=>`${e.x},${e.y},${e.label}`).join(`|`);if(t!==this.key){this.key=t;for(let e of this.markers)e.element.remove();this.markers.length=0;for(let t of e){let e=document.createElement(`span`);e.className=`breakdown-marker bevel`,e.dataset.tip=t.label,e.setAttribute(`aria-label`,t.label);let n=document.createElement(`span`);n.textContent=t.word,e.append(Jv(`spanner`),n),this.root.append(e),this.markers.push({element:e,x:t.x,y:t.y,lift:t.lift})}}}frame(e){let t=Math.round(Math.sin(e/260)*2);for(let e of this.markers){let n=this.world.screenOf(e.x,e.y,e.lift,this.scratch);e.element.style.transform=`translate(${Math.round(n.x)}px, ${Math.round(n.y)+t}px) translate(-50%, -100%)`}}};function Nb(e,t=``){let n=document.createElement(`div`);return n.className=e,n.textContent=t,n}function Pb(e,t,n){let r=Nb(`row`),i=document.createElement(`span`);i.className=`key`,i.textContent=e;let a=typeof t==`string`?document.createElement(`span`):t;return typeof t==`string`&&(a.textContent=t),n!==void 0&&a.classList.add(n?`good`:`short`),r.append(i,a),r}var Fb=e=>`${Math.round(e*100)}%`;function Ib(e){let t=(e,t)=>`in ${e} ${t}${e===1?``:`s`}`;return e<14?t(e,`day`):e<60?t(Math.round(e/7),`week`):t(Math.round(e/30.4),`month`)}function Lb(e){return e<14?`${e}d`:e<60?`${Math.round(e/7)}w`:`${Math.round(e/30.4)}mo`}var Rb=class{window;onNewGame=()=>{};onTitle=()=>{};onEnd=()=>{};report;key=``;seenStatus;root;end;constructor(e,t,n){this.root=e,this.window=new O_(e,`Goal`,`resort`,t,n),this.window.element.classList.add(`goal-window`),this.window.hide()}open(){this.window.show(),this.render()}show(e){this.report=e,this.seenStatus===void 0?this.seenStatus=e.status:e.status!==this.seenStatus&&(this.seenStatus=e.status,this.showEnd(e)),this.window.visible&&this.render()}chip(e){return e.status===`won`?`Goal met`:e.status===`lost`?`Bankrupt`:e.status===`missed`?`Goal missed`:e.bankIn>=0?`Overdrawn: ${e.bankIn}d`:e.high?`${Su[e.month].slice(0,3)} ${Fb(e.occupancy)} full`:`${Su[Lu(e.nextHigh).month].slice(0,3)} in ${Lb(e.nextHigh-e.day)}`}render(){let e=this.report;if(!e)return;let t=JSON.stringify(e);if(t===this.key)return;this.key=t;let n=e.goal;this.window.setTitle(`Goal: ${e.name}`);let r=Nb(`goal-statement`,`Reach ${n.stars} stars and fill ${Fb(n.occupancy)} of your rooms across a high-season month (${dd.map(e=>Su[e].slice(0,3)).join(`, `)}), by the end of Year ${n.byYear}.`),i=document.createElement(`span`);i.className=`goal-stars`,i.append(Kv(e.rating),document.createTextNode(` ${e.rating} of ${n.stars}`));let a=[Pb(`Rating`,i,e.rating>=n.stars)],o=Bu(e.month,Lu(e.day).year);e.high?a.push(Pb(`High season`,`${o}: ${Fb(e.occupancy)} full so far`,e.occupancy>=n.occupancy)):(a.push(Pb(`This month`,`${o}: ${Fb(e.occupancy)} full`)),a.push(Pb(`Next high season`,`${Su[Lu(e.nextHigh).month]} ${Ib(e.nextHigh-e.day)}`)));let s=e.deadline-e.day;e.status===`playing`&&a.push(Pb(`Time left`,s>0?`Year ${n.byYear} ends ${Ib(s)}`:`The last day`)),e.bankIn>=0&&a.push(Pb(`Overdrawn`,`The bank takes over ${Ib(e.bankIn)}`,!1));let c=Nb(`scorecard inset`);c.append(Nb(`section-title`,`High seasons`)),e.seasons.length||c.append(Nb(`muted`,`None yet. Each high-season month is scored as it ends.`));for(let t of e.seasons){let e=Nb(`season ${t.met?`good`:`short`}`);e.textContent=`${Su[t.month].slice(0,3)} Y${t.year}  ${Fb(t.occupancy)}, ${t.rating} stars  ${t.met?`Met!`:`Short`}`,c.append(e)}let l=[r,...a,c];e.status!==`playing`&&l.unshift(Nb(`goal-status ${e.status===`won`?`good`:`short`}`,this.endTitle(e))),this.window.body.replaceChildren(...l)}endTitle(e){return e.status===`won`?`${e.name} met its goal`:e.status===`lost`?`The bank took over`:`Year ${e.goal.byYear} is over`}showEnd(e){this.end?.remove();let t=Nb(`end-screen bevel`);t.setAttribute(`role`,`dialog`);let n=[...e.seasons].sort((e,t)=>t.occupancy-e.occupancy)[0],r=e.status===`won`?`${e.name} is a ${Cd(e.rating)} resort, and full in high season. You did it, on ${zu(e.day)}. Keep playing as long as you like.`:e.status===`lost`?`${e.name} ran out of money and the bank has taken over. Try again: build what guests use, keep costs in hand, and borrow before you're overdrawn.`:`The goal wasn’t met in time.${n?` The best high season was ${Su[n.month]} of Year ${n.year}: ${Fb(n.occupancy)} full at ${n.rating} stars.`:``} You can keep playing, or try again.`;t.append(Nb(`end-title`,this.endTitle(e)),Nb(`end-text`,r)),this.onEnd(e.status);let i=Nb(`end-buttons`),a=(e,n,r)=>{let a=document.createElement(`button`);a.className=n?`text-button primary`:`text-button`,a.textContent=e,a.addEventListener(`click`,()=>{t.remove(),r()}),i.append(a)};e.status!==`lost`&&a(`Keep playing`,!0,()=>{}),a(`New game`,e.status===`lost`,()=>this.onNewGame()),a(`Title screen`,!1,()=>this.onTitle()),t.append(i),this.root.append(t),this.end=t}},zb=e=>`$${Math.round(e).toLocaleString(`en-US`)}`;function Bb(e,t=``){let n=document.createElement(`div`);return n.className=e,n.textContent=t,n}var Vb=class{window;onLook=()=>{};onTint=()=>{};mapSize=96;send;plots=[];cash=0;sandbox=!1;armed=-1;focus=-1;key=``;constructor(e,t,n,r){this.send=t,this.window=new O_(e,`Land`,`finances`,n,r),this.window.element.classList.add(`land-window`),this.window.hide(),this.window.onHide=()=>{this.armed=-1,this.focus=-1,this.onTint(void 0)}}open(e=-1){this.focus=e,this.armed=-1,this.key=``,this.window.show(),this.render()}show(e,t,n){this.plots=e,this.cash=t,this.sandbox=n,this.window.visible&&this.render()}render(){let e=`${JSON.stringify(this.plots)}|${this.cash>=0?Math.floor(this.cash/500):-1}|${this.armed}|${this.focus}`;if(e===this.key)return;this.key=e;let t=this.plots.map((e,t)=>t),n=e=>e===this.focus?-1:this.plots[e].owned?2:+!!this.plots[e].refusal;t.sort((e,t)=>n(e)-n(t)||e-t);let r=[Bb(`muted`,`You own ${this.plots.filter(e=>e.owned).reduce((e,t)=>e+t.land,0)} tiles. You can build only on your own land; guests walk anywhere there's a path.`),Bb(`land-key`,`On the map: green is yours, yellow for sale, red and purple for a better-rated resort.`)];this.onTint(this.tint());for(let e of t)r.push(this.plotCard(e));this.window.body.replaceChildren(...r)}tint(){let e=this.mapSize,t=new Uint8Array(e*e);for(let n of this.plots){let r=n.owned?2:n.refusal?n.stars>3?5:4:3,[i,a,o,s]=n.rect;for(let n=Math.max(0,a);n<=Math.min(e-1,s);n++)for(let a=Math.max(0,i);a<=Math.min(e-1,o);a++)t[n*e+a]||(t[n*e+a]=r)}return t}plotCard(e){let t=this.plots[e],n=Bb(`plot inset${e===this.focus?` focus`:``}`);n.dataset.plot=String(e);let r=Bb(`row`),i=document.createElement(`span`);i.className=`plot-name`,i.textContent=t.name;let a=document.createElement(`span`);a.className=t.owned?`good`:t.refusal?`short`:`price`,a.textContent=t.owned?`Yours`:zb(t.price),r.append(i,a);let o=[`${t.land} tiles`];t.sand&&o.push(`${t.sand} of beach`),t.high&&o.push(`${t.high} of high ground`),n.append(r,Bb(`plot-blurb`,t.blurb),Bb(`muted`,o.join(`, `)));let s=Bb(`plot-buttons`),c=document.createElement(`button`);if(c.className=`text-button small`,c.textContent=`Look`,c.dataset.tip=`Centre the view on it`,c.addEventListener(`click`,()=>this.onLook((t.rect[0]+t.rect[2]+1)/2,(t.rect[1]+t.rect[3]+1)/2)),s.append(c),!t.owned){let r=document.createElement(`button`),i=!this.sandbox&&this.cash<t.price;r.disabled=!!t.refusal||i,r.className=this.armed===e?`text-button primary`:`text-button`,r.textContent=this.armed===e?`Tap again to buy for ${zb(t.price)}`:`Buy for ${zb(t.price)}`,r.dataset.tip=t.refusal??(i?`Not enough cash`:`Land can’t be sold back`),r.addEventListener(`click`,()=>{this.armed===e?(this.armed=-1,this.send({type:`command`,command:{type:`buyLand`,plot:e}})):(this.armed=e,this.render())}),s.append(r),t.refusal&&n.append(Bb(`short`,t.refusal))}return n.append(s),n}},Hb=e=>`$${Math.round(e).toLocaleString(`en-US`)}`,Ub=class{onOpen=()=>{};root;world;signs=[];scratch={x:0,y:0};key=``;constructor(e,t){this.root=e,this.world=t}show(e){let t=e.map(e=>`${e.owned}${e.refusal??``}${e.price}`).join(`|`);if(t!==this.key){this.key=t;for(let e of this.signs)e.element.remove();this.signs.length=0,e.forEach((e,t)=>{if(e.owned)return;let n=document.createElement(`button`);n.className=`land-sign bevel${e.refusal?` closed`:``}`;let r=document.createElement(`span`);r.className=`land-sign-word`,r.textContent=`For sale`;let i=document.createElement(`span`);i.textContent=e.refusal&&e.stars?Cd(e.stars):Hb(e.price),n.append(r,i),n.dataset.tip=`${e.name}: ${e.refusal??`for sale, ${Hb(e.price)}`}. Tap to see it.`,n.setAttribute(`aria-label`,`${e.name} for sale`),n.addEventListener(`click`,()=>this.onOpen(t)),this.root.append(n),this.signs.push({element:n,x:e.sign[0]+.5,y:e.sign[1]+.5})})}}frame(){for(let e of this.signs){let t=this.world.screenOf(e.x,e.y,1.2,this.scratch);e.element.style.transform=`translate(${Math.round(t.x)}px, ${Math.round(t.y)}px) translate(-50%, -100%)`}}},Wb=class{window;onGo=()=>{};onNote=()=>{};queue=[];current;constructor(e,t,n){this.window=new O_(e,`Advisor`,`resort`,t,n),this.window.element.classList.add(`advisor-window`),this.window.hide(),this.window.onHide=()=>{this.current=void 0,this.queue.length&&setTimeout(()=>this.next(),600)}}add(e){e===this.current||this.queue.includes(e)||(this.queue.push(e),this.current||this.next())}next(){if(this.current)return;let e=this.queue.shift();if(!e)return;this.current=e;let t=d_[e];this.window.setTitle(t.title);let n=document.createElement(`div`);n.className=`advisor-text`,n.append(Jv(`advice`),document.createTextNode(` ${t.text}`));let r=document.createElement(`div`);if(r.className=`plot-buttons`,`button`in t){let e=document.createElement(`button`);e.className=`text-button primary`,e.textContent=t.button.label,e.addEventListener(`click`,()=>{this.onGo(t.button.to),this.window.hide()}),r.append(e)}let i=document.createElement(`button`);i.className=`text-button`,i.textContent=`Got it`,i.addEventListener(`click`,()=>this.window.hide()),r.append(i),this.window.body.replaceChildren(n,r),this.window.show(),this.onNote()}},Gb={0:`sunny`,1:`cloudy`,2:`showers`,3:`rain`,4:`heat`,5:`storm`},Kb=28,qb=[`Grass`,`Sand`,`Bare rock`],Jb=[`North-west`,`North-east`,`South-east`,`South-west`];function Yb(e,t,n){let r=document.createElement(`button`);r.className=`icon-button`,r.dataset.tip=t,r.setAttribute(`aria-label`,t);let i=document.createElement(`span`);return i.className=`icon`,i.style.backgroundPosition=`${-Wv.indexOf(e)*Kb}px 0`,i.style.backgroundSize=`${Wv.length*Kb}px ${Kb}px`,r.append(i),r.addEventListener(`click`,n),r}function Xb(e){let t=document.createElement(`div`);t.className=`row`;let n=document.createElement(`span`);n.className=`key`,n.textContent=e;let r=document.createElement(`span`);return t.append(n,r),{element:t,value:r}}function Zb(e){let t=Math.floor(e),n=Math.floor((e-t)*60);return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`}var Qb=e=>`$${Math.round(e).toLocaleString(`en-US`)}`,$b=`paradise-lot-ui-size`,ex=`paradise-lot-frame-rate`,tx=[[`auto`,`Auto`],[`60`,`60 a second`],[`30`,`30 a second`]];function nx(e){let t=document.createElement(`select`);t.className=`select`,t.setAttribute(`aria-label`,`Frame rate`),t.dataset.tip=`How often the world is drawn. Auto is smooth while you play and cooler while you watch; 30 saves the most power.`;for(let[e,n]of tx)t.append(new Option(n,e));let n=``;try{n=localStorage.getItem(ex)??``}catch{}return e.mode===`auto`&&tx.some(([e])=>e===n)&&(e.mode=n),t.value=e.mode,t.addEventListener(`change`,()=>{e.mode=t.value;try{localStorage.setItem(ex,t.value)}catch{}}),t}var rx=[[``,`Auto`],[`1`,`Small`],[`1.5`,`Medium`],[`2`,`Large`]];function ix(e){let t=document.documentElement.style;e?t.setProperty(`--ui-scale`,e):t.setProperty(`--ui-scale`,``)}function ax(){let e=document.createElement(`select`);e.className=`select`,e.dataset.tip=`How big the windows, buttons and text are`;for(let[t,n]of rx)e.append(new Option(n,t));let t=``;try{t=localStorage.getItem($b)??``}catch{}return e.value=rx.some(([e])=>e===t)?t:``,ix(e.value),e.addEventListener(`change`,()=>{ix(e.value);try{localStorage.setItem($b,e.value)}catch{}}),e}function ox(n,r,i){let{controls:a,send:o,construction:s}=r;n.style.setProperty(`--icons`,`url(${new URL(`./atlases/ui-icons.png`,document.baseURI).href})`),iv(n),Bv(n);let l=a.world,u=window.innerWidth<1024,d=document.createElement(`div`);d.className=`toolbar bevel`;let f=(...e)=>{let t=document.createElement(`div`);t.className=`group`,t.append(...e),d.append(t)},p=[Yb(`pause`,`Pause (Space)`,()=>a.togglePause()),Yb(`speed1`,`Normal speed (1)`,()=>a.setSpeed(1)),Yb(`speed2`,`Fast (2)`,()=>a.setSpeed(2)),Yb(`speed4`,`Fastest (3)`,()=>a.setSpeed(3))],m=Yb(`build`,`Build (B)`,()=>ge.window.toggle());f(m),f(Yb(`rotateLeft`,`Rotate view left (Q)`,()=>a.rotate(-1)),Yb(`rotateRight`,`Rotate view right (E)`,()=>a.rotate(1))),f(Yb(`zoomOut`,`Zoom out (Z)`,()=>a.zoom(-1)),Yb(`zoomIn`,`Zoom in (X)`,()=>a.zoom(1))),f(...p);let h=Yb(`resort`,`Resort window`,()=>M.toggle()),g=Yb(`goal`,`Goal (G)`,()=>De.window.visible?De.window.hide():De.open()),_=Yb(`land`,`Land (L)`,()=>Oe.window.visible?Oe.window.hide():Oe.open());g.hidden=!0,_.hidden=!0;let v=Yb(r.sound.muted?`mute`:`sound`,`Sound on or off (M)`,()=>r.sound.setMuted(!r.sound.muted));v.setAttribute(`aria-pressed`,String(r.sound.muted)),r.sound.onChange(()=>{let e=v.querySelector(`.icon`);e.style.backgroundPosition=`${-Wv.indexOf(r.sound.muted?`mute`:`sound`)*Kb}px 0`,v.setAttribute(`aria-pressed`,String(r.sound.muted))});let y=Yb(`reviews`,`Reviews and rating (V)`,()=>Te.toggle()),b=Yb(`overlays`,`Overlays (O)`,()=>we.toggle());f(g,_,b,Yb(`staff`,`Staff (H)`,()=>Ce.toggle()),Yb(`finances`,`Finances (F)`,()=>xe.toggle()),y,h,Yb(`save`,`Save and load`,()=>void _e.show()),v),n.append(d);let x=document.createElement(`div`);x.className=`status-bar bevel`;let S=e=>{let t=document.createElement(`span`);return t.className=`cell`,t.dataset.tip=e,x.append(t),t},C=S(`Cash`),w=S(`Date and time`),T=S(`Star rating: tap for the reviews`);T.classList.add(`rating-cell`);let E=document.createElement(`span`);E.className=`stars`,qv(E,3),T.append(E),T.addEventListener(`click`,()=>Te.open(`rating`));let D=S(`The goal: tap to see how it’s going`);D.classList.add(`goal-cell`),D.hidden=!0,D.addEventListener(`click`,()=>De.open());let O=S(`Guests in the resort`),k=S(`Weather`);k.classList.add(`weather-cell`);let A=Jv(`sunny`),j=document.createElement(`span`);k.append(A,j),n.append(x);let M=new O_(n,i.name,`resort`,u?0:16,u?window.innerHeight-380:72),ee=Xb(`Time`),te=Xb(`A day lasts`);te.element.dataset.tip=`At normal speed. The night goes faster once guests are in bed.`;let ne=Xb(`Guests`),N=Xb(`View`),re=Xb(`Time of day`),ie=document.createElement(`input`);ie.type=`range`,ie.min=`0`,ie.max=`24`,ie.step=`0.25`,ie.dataset.tip=`Drag to change the time of day`,ie.addEventListener(`input`,()=>o({type:`command`,command:{type:`setHour`,hour:Number(ie.value)}}));let ae=Xb(`Weather`),oe=document.createElement(`select`);oe.className=`select`,oe.dataset.tip=`Follow the climate, or fix the weather to see how the resort copes`,oe.setAttribute(`aria-label`,`Weather`),oe.append(new Option(`Follow the climate`,``));for(let[e,t]of Object.entries(c))oe.append(new Option(t,e));oe.addEventListener(`change`,()=>o({type:`command`,command:{type:`weather`,kind:oe.value===``?null:Number(oe.value)}})),ae.value.replaceChildren(oe);let se=document.createElement(`label`);se.className=`check`,se.dataset.tip=`Sandbox: build without spending money`;let ce=document.createElement(`input`);ce.type=`checkbox`,ce.addEventListener(`change`,()=>o({type:`command`,command:{type:`sandbox`,on:ce.checked}})),se.append(ce,document.createTextNode(` Unlimited money`));let le=Xb(`Sound`),P=document.createElement(`input`);P.type=`range`,P.min=`0`,P.max=`100`,P.step=`5`,P.value=String(Math.round(r.sound.volume*100)),P.setAttribute(`aria-label`,`Sound volume`),P.dataset.tip=`How loud the resort is`,P.addEventListener(`input`,()=>{r.sound.setVolume(Number(P.value)/100),r.sound.muted&&r.sound.setMuted(!1)}),le.value.replaceChildren(P);let ue=Xb(`UI size`);ue.value.replaceChildren(ax());let de=Xb(`Frame rate`);de.value.replaceChildren(nx(r.pacer));let fe=Xb(`Style`),pe=document.createElement(`select`);pe.className=`select`;for(let n of t){let t=new Option(e[n].name,n);t.title=`${e[n].climate}. ${e[n].blurb}`,pe.append(t)}pe.dataset.tip=`The resort’s architecture. Choose one to suit the place: every building is rebuilt in it.`,pe.addEventListener(`change`,()=>o({type:`command`,command:{type:`style`,style:pe.value}})),fe.value.replaceChildren(pe);let me=document.createElement(`button`);me.className=`text-button`,me.textContent=`Title screen`,me.dataset.tip=`Save this game, then go to the title screen to carry on later or start another`,me.addEventListener(`click`,()=>void _e.leave(r.title)),M.body.append(ee.element,ne.element,N.element,te.element,re.element,ie,ae.element,se,fe.element,le.element,ue.element,de.element,me);let he=new F_(r.mirror),ge=new Q_(n,s,he,u?0:window.innerWidth-330,u?64:72),_e=new Hv(n,o,u?0:Math.round(window.innerWidth/2-180),120),ve=new Qv(n,o,u?0:16,u?64:400),ye=new oy(n,o,u?0:320,u?64:120),be=new ob(n,o,he,u?0:320,u?64:110),xe=new pb(n,o,u?0:Math.round(window.innerWidth/2-200),u?64:90),Se=new Ob(n,l),Ce=new hb(n,o,he,u?0:Math.round(window.innerWidth/2-220),u?64:110);ge.onStaff=be.onStaff=()=>Ce.open();let we=new Sb(n,o,e=>l.setOverlay(e),u?0:16,u?64:400),Te=new jb(n,u?0:Math.round(window.innerWidth/2-210),u?64:80);Te.window.onHide=()=>y.setAttribute(`aria-pressed`,`false`);let Ee=new Mb(n,l),De=new Rb(n,u?0:16,u?64:72);De.window.onHide=()=>g.setAttribute(`aria-pressed`,`false`),_e.onTitle=r.title,De.onNewGame=()=>void _e.leave(r.newGame),De.onTitle=()=>void _e.leave(r.title),By(e=>{be.window.hide(),s.select(e)}),De.onEnd=e=>r.sound.play(e===`won`?`fanfare`:`refused`);let Oe=new Vb(n,o,u?0:Math.round(window.innerWidth/2-190),u?64:80);Oe.onLook=(e,t)=>a.lookAt(e,t),Oe.mapSize=l.terrain.size,Oe.onTint=e=>{l.setOverlay(e),e||we.fieldsChanged()};let ke=new Ub(n,l);ke.onOpen=e=>Oe.open(e);let Ae=new Wb(n,u?0:16,u?64:Math.max(72,window.innerHeight-330));Ae.onNote=()=>r.sound.play(`chime`),Ae.onGo=e=>{`overlay`in e?we.showOverlay(e.overlay):e.window===`goal`?De.open():e.window===`build`?ge.window.show():e.window===`staff`?Ce.toggle():e.window===`finances`?xe.toggle():e.window===`reviews`?Te.open():e.window===`land`&&Oe.open()};let je=!1;we.onVisible=e=>b.setAttribute(`aria-pressed`,String(e));let Me=new wb(n,l,()=>s.previewKey);s.onChange(()=>m.setAttribute(`aria-pressed`,String(s.active()||ge.window.visible))),window.addEventListener(`keydown`,e=>{e.target instanceof HTMLInputElement||(e.key.toLowerCase()===`b`&&ge.window.toggle(),e.key.toLowerCase()===`f`&&xe.toggle(),e.key.toLowerCase()===`h`&&Ce.toggle(),e.key.toLowerCase()===`o`&&we.toggle(),e.key.toLowerCase()===`v`&&Te.toggle(),e.key.toLowerCase()===`m`&&r.sound.setMuted(!r.sound.muted),je&&e.key.toLowerCase()===`g`&&g.click(),je&&e.key.toLowerCase()===`l`&&_.click())});let Ne=()=>{p.forEach((e,t)=>e.setAttribute(`aria-pressed`,String(t===a.speedIndex)));let e=l.camera,t=e.magnify>1?`${e.magnify}x`:el[e.zoom]===1?`1x`:`1/${el[e.zoom]}x`;N.value.textContent=`${Jb[e.rotation]} - ${t}`};a.onChange(Ne),Ne();let Pe=()=>{let e=r.mirror();C.textContent=e.sandbox?`Sandbox`:Qb(e.cash),C.classList.toggle(`refused`,!e.sandbox&&e.cash<0),ce.checked=e.sandbox,pe.value=e.style};Pe();let F=i.perf?new ov(n):void 0,Fe=-1,Ie=``,Le={x:0,y:0},I=0;return{saves:_e,guest:ve,pool:ye,place:be,finances:xe,staff:Ce,needs:he,overlays:we,reviews:Te,advisor:Ae,views:Me,money:Se,refresh:Pe,resort(e){if(he.setAmenities(e.amenities),e.scenario&&(je||(je=!0,g.hidden=!1,_.hidden=!1,D.hidden=!1,M.hide()),De.show(e.scenario),D.textContent=De.chip(e.scenario),D.classList.toggle(`refused`,e.scenario.bankIn>=0||e.scenario.status===`lost`),g.setAttribute(`aria-pressed`,String(De.window.visible))),e.plots){let t=r.mirror();Oe.show(e.plots,t.cash,t.sandbox),ke.show(e.plots),_.setAttribute(`aria-pressed`,String(Oe.window.visible))}Te.show(e),Ee.show(e.broken),y.setAttribute(`aria-pressed`,String(Te.window.visible)),qv(E,e.rating),T.dataset.tip=`Rated ${e.rating} stars${e.reviews?` from ${e.reviews} reviews`:` (no reviews yet)`}. Tap for the reviews.`;let t=e.today;Yv(A,Gb[t.kind]??`sunny`),j.textContent=` ${t.name} ${t.high}\u00b0`;let n=e.stormIn>0?` A storm is forecast in ${e.stormIn} day${e.stormIn===1?``:`s`}.`:``;k.dataset.tip=`${t.name}, ${t.high}\u00b0C. ${t.blurb} Tomorrow: ${e.tomorrow.name.toLowerCase()}, ${e.tomorrow.high}\u00b0C.${n}`,k.classList.toggle(`refused`,t.kind===5||e.stormIn>0)},tileFields(e){e.tile===Fe&&(e.pool===void 0?be.showGround(Ie,e):ye.open(e.pool))},inspect(e){let t=l.guestAt(e.deviceX,e.deviceY);if(t>=0){ve.open(t);return}let n=l.tileAt(e.deviceX,e.deviceY,Le);if(!n)return;let i=l.terrain,a=i.index(n.x,n.y),s=r.mirror().occupancy[a]-1;if(s>=0){be.open(s);return}let c=i.isWater(n.x,n.y);Ie=`${i.path[a]===q.bridge?`Bridge`:c?i.water[a]===i.seaLevel?`Ocean`:`Fresh water`:i.pool[a]?`Pool`:i.path[a]===q.deck?`Pool deck`:i.path[a]?`Path`:qb[i.surface[a]]} at ${n.x}, ${n.y} - level ${i.minCorner(n.x,n.y)}${e.long?` (long press)`:``}`,Fe=a,o({type:`inspectTile`,tile:a})},frame(e){if(F?.frame(e,l.lastHeader),Se.frame(e),Ee.frame(e),ke.frame(),we.frame(e),Me.frame(),s.frame(),e-I<250)return;I=e;let t=l.lastHeader,n=`${zu(t.day,!0)}, ${Zb(t.hour)}`;ee.value.textContent=n,w.textContent=n,te.value.textContent=`${ju(Ou)??`?`} minutes`,ne.value.textContent=String(t.guests),O.textContent=`${t.guests} guest${t.guests===1?``:`s`}`,document.activeElement!==ie&&(ie.value=String(t.hour))}}}var sx=class{terrain;occupancy;objects=[];coast;cash=0;sandbox=!1;land=null;style=`tropical`;listeners=[];constructor(e){this.terrain=e,this.occupancy=new Uint16Array(e.size*e.size),this.coast=Wd(e)}terrainChanged(){this.coast=Wd(this.terrain),this.changed()}setObjects(e){this.objects=e,this.occupancy.fill(0);for(let t of e){let[e,n]=Pd(t);for(let r=t.y;r<t.y+n;r++)for(let n=t.x;n<t.x+e;n++)this.occupancy[this.terrain.index(n,r)]=t.id+1}this.changed()}setPurse(e){this.cash=e.cash,this.sandbox=e.sandbox,this.changed()}setLand(e){this.land=e,this.changed()}setLook(e){e.style!==this.style&&(this.style=e.style,this.changed())}onChange(e){this.listeners.push(e)}changed(){for(let e of this.listeners)e()}},cx=`paradise-lot-day`;function lx(){try{let e=Number(localStorage.getItem(cx));return e in Du?e:3}catch{return 3}}function ux(e){try{localStorage.setItem(cx,String(e))}catch{}}function dx(e,t){if(!e.summary)return`Saved ${Pv(e.savedAt)}.`;let[n,r]=Lv(e.summary);return`${t?`${Nv(e.summary.scene)}, `:``}${n}. ${r}. Saved ${Pv(e.savedAt)}.`}async function fx(e,t,n){let r=document.createElement(`div`);r.className=`title-screen`;let i=document.createElement(`div`);i.className=`title-panel bevel`;let a=document.createElement(`h1`);a.className=`title-name`,a.textContent=`Paradise Lot`;let o=document.createElement(`div`);o.className=`title-subtitle`,o.textContent=`A Resort Builder`,i.append(a,o);let s=(e,t,n,r)=>{let a=document.createElement(`button`);a.className=n?`title-choice text-button primary`:`title-choice text-button`;let o=document.createElement(`span`);o.className=`title-choice-label`,o.textContent=e;let s=document.createElement(`span`);return s.className=`title-choice-blurb`,s.textContent=t,a.append(o,s),a.addEventListener(`click`,()=>r(a)),i.append(a),a},c=[];try{c=await Ev()}catch{}let l=e=>n(`?continue=${encodeURIComponent(e.slot)}`),[u,...d]=c;if(u&&s(u.summary?`Continue ${Mv(u.summary.scene)}`:`Continue \u201c${u.slot}\u201d`,gv(u.slot)||!u.summary?dx(u,!1):`\u201c${u.slot}\u201d: ${dx(u,!1)}`,!0,()=>l(u)),d.length){let e=document.createElement(`div`);e.className=`title-saves`,e.setAttribute(`role`,`group`),e.setAttribute(`aria-label`,`Other saved games`);let t=document.createElement(`div`);t.className=`title-saves-heading`,t.textContent=`Or carry on from`,e.append(t,...d.map(e=>{let t=document.createElement(`button`);t.className=`title-save text-button`;let n=document.createElement(`span`);n.className=`title-choice-label`;let r=e.summary&&gv(e.slot)?Nv(e.summary.scene):void 0;n.textContent=r?`${r}, autosaved`:e.slot;let i=document.createElement(`span`);return i.className=`title-choice-blurb`,i.textContent=dx(e,!r),t.append(n,i),t.addEventListener(`click`,()=>l(e)),t})),i.append(e)}let f=fd.kaleo,p=c.some(e=>e.slot===pv),m=!1,h=lx(),g=e=>n(`?scene=${e}&new&day=${h}`);s(`New game: ${f.name}`,f.blurb,!u,e=>{if(!p||m)return g(`kaleo`);m=!0,e.querySelector(`.title-choice-label`).textContent=`Tap again to start afresh`,e.querySelector(`.title-choice-blurb`).textContent=`This replaces your saved Kaleo Point game. Saves you made yourself are kept.`}),s(`The demo resort`,`Kaleo Point finished and full of guests, to wander round and tinker with.`,!1,()=>g(`play`)),s(`Sandbox`,`An empty coast and unlimited money: build whatever you like.`,!1,()=>g(`sandbox`));let _=document.createElement(`div`);_.className=`title-days`,_.setAttribute(`role`,`radiogroup`),_.setAttribute(`aria-label`,`Day length`);let v=document.createElement(`span`);v.textContent=`A day lasts`,_.append(v);let y=Object.keys(Du).map(Number).map(e=>{let t=document.createElement(`button`);return t.className=`text-button small`,t.setAttribute(`role`,`radio`),t.textContent=`${e} min`,t.addEventListener(`click`,()=>{h=e,ux(e);for(let e of y)e.setAttribute(`aria-checked`,String(e===t))}),t.setAttribute(`aria-checked`,String(e===h)),t});_.append(...y);let b=document.createElement(`span`);b.className=`muted`,b.textContent=`at normal speed, in a new game.`,_.append(b),i.append(_);let x=document.createElement(`div`);x.className=`title-footer`;let S=document.createElement(`button`);S.className=`text-button small`;let C=()=>{S.replaceChildren(Jv(t.muted?`mute`:`sound`),document.createTextNode(t.muted?` Sound off`:` Sound on`))};C(),S.addEventListener(`click`,()=>{t.setMuted(!t.muted),C()});let w=document.createElement(`span`);w.className=`muted`,w.textContent=`Saves stay in this browser, on this device. Export them from Save and load to move them or keep them safe.`,x.append(S,w),i.append(x),r.append(i),e.append(r)}var px=`paradise-lot-sound`;function mx(){try{let e=JSON.parse(localStorage.getItem(px)??`{}`);return{muted:e.muted??!1,volume:typeof e.volume==`number`?Math.max(0,Math.min(1,e.volume)):.6}}catch{return{muted:!1,volume:.6}}}var hx=class{ctx;master;noise;layers;settings=mx();lastCash=0;listeners=[];constructor(){let e=()=>this.unlock();window.addEventListener(`pointerdown`,e,{passive:!0}),window.addEventListener(`keydown`,e,{passive:!0}),document.addEventListener(`visibilitychange`,()=>this.wakeOrSleep())}get muted(){return this.settings.muted}get volume(){return this.settings.volume}onChange(e){this.listeners.push(e)}setMuted(e){this.settings.muted=e,this.saveSettings(),e||this.unlock(),this.wakeOrSleep()}setVolume(e){this.settings.volume=Math.max(0,Math.min(1,e)),this.saveSettings(),this.master&&this.ctx&&this.master.gain.setTargetAtTime(this.settings.volume,this.ctx.currentTime,.05)}play(e){let t=this.live();if(!t)return;let n=t.currentTime+.005;switch(e){case`click`:this.tone(1250,`square`,n,.025,.05);break;case`place`:this.tone(150,`sine`,n,.16,.5,55),this.burst(`lowpass`,900,.7,n,.08,.25);break;case`demolish`:this.burst(`bandpass`,700,.9,n,.28,.45),this.burst(`bandpass`,1900,1.2,n+.03,.18,.2),this.tone(90,`sine`,n,.2,.4,45);break;case`cash`:if(n-this.lastCash<.9)return;this.lastCash=n,this.burst(`highpass`,3e3,.8,n,.03,.08),this.tone(1568,`triangle`,n+.03,.35,.07),this.tone(2093,`triangle`,n+.09,.45,.06);break;case`refused`:this.tone(140,`square`,n,.09,.06),this.tone(110,`square`,n+.1,.12,.06);break;case`chime`:this.tone(1047,`sine`,n,.5,.12),this.tone(1319,`sine`,n+.12,.6,.12);break;case`buy`:this.tone(784,`triangle`,n,.3,.12),this.tone(1047,`triangle`,n+.1,.3,.12),this.tone(1568,`triangle`,n+.2,.6,.12);break;case`fanfare`:[523,659,784,1047,784,1047].forEach((e,t)=>this.tone(e,`triangle`,n+t*.13+(t>3?.1:0),t===5?.9:.22,.13))}}listen(e){let t=this.live();if(!t||!this.layers)return;let n=t.currentTime,r=e.paused?.35:1,i=.45+.55*e.near;this.layers.waves.gain.setTargetAtTime((.05+.3*e.shore)*r,n,.8);let a=Math.min(1,Math.sqrt(e.crowd)/9)*i*(e.paused?.2:1);if(this.layers.crowd.gain.setTargetAtTime(a*(.06+.06*Math.random()),n,.4),this.layers.rain.gain.setTargetAtTime(e.rain*.22,n,.6),e.paused)return;let o=1-e.rain;Math.random()<.22*e.daylight*o&&this.bird(n+Math.random()*.3,i),Math.random()<.45*(1-e.daylight)*o&&this.crickets(n+Math.random()*.3),Math.random()<Math.min(.7,e.swimmers*.05)&&this.splash(n+Math.random()*.25,i),Math.random()<Math.min(.12,(e.swimmers+e.crowd*.1)*.006)*e.daylight&&this.laugh(n+Math.random()*.3,i)}thunder(){let e=this.live();if(!e)return;let t=e.currentTime+.4+Math.random()*1.2;this.burst(`lowpass`,160,.7,t,2.6,.9,.04),this.burst(`lowpass`,420,.8,t,.5,.35)}saveSettings(){try{localStorage.setItem(px,JSON.stringify(this.settings))}catch{}for(let e of this.listeners)e()}live(){if(this.ctx&&!this.settings.muted&&this.ctx.state===`running`)return this.ctx}unlock(){if(!this.settings.muted){if(!this.ctx){try{this.ctx=new AudioContext}catch{return}this.build(this.ctx)}this.ctx.state!==`running`&&document.visibilityState===`visible`&&this.ctx.resume().catch(()=>{})}}wakeOrSleep(){let e=this.ctx;e&&(this.settings.muted||document.visibilityState!==`visible`?e.suspend().catch(()=>{}):e.resume().catch(()=>{}))}build(e){this.master=e.createGain(),this.master.gain.value=this.settings.volume,this.master.connect(e.destination);let t=e.sampleRate*3;this.noise=e.createBuffer(1,t,e.sampleRate);let n=this.noise.getChannelData(0),r=0;for(let e=0;e<t;e++)r=r*.6+(Math.random()*2-1)*.4,n[e]=r;let i=e.createBufferSource();i.buffer=this.noise,i.loop=!0;let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=480;let o=e.createGain();o.gain.value=.55;let s=e.createOscillator();s.frequency.value=.09;let c=e.createGain();c.gain.value=.45,s.connect(c).connect(o.gain);let l=e.createGain();l.gain.value=0,i.connect(a).connect(o).connect(l).connect(this.master);let u=e.createBiquadFilter();u.type=`bandpass`,u.frequency.value=520,u.Q.value=.9;let d=e.createGain();d.gain.value=0,i.connect(u).connect(d).connect(this.master);let f=e.createBiquadFilter();f.type=`highpass`,f.frequency.value=1600;let p=e.createGain();p.gain.value=0,i.connect(f).connect(p).connect(this.master),i.start(),s.start(),this.layers={waves:l,crowd:d,rain:p}}tone(e,t,n,r,i,a){let o=this.ctx,s=o.createOscillator();s.type=t,s.frequency.setValueAtTime(e,n),a&&s.frequency.exponentialRampToValueAtTime(a,n+r);let c=o.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(i,n+.006),c.gain.exponentialRampToValueAtTime(1e-4,n+r),s.connect(c).connect(this.master),s.start(n),s.stop(n+r+.02)}burst(e,t,n,r,i,a,o=.004){let s=this.ctx,c=s.createBufferSource();c.buffer=this.noise;let l=s.createBiquadFilter();l.type=e,l.frequency.value=t,l.Q.value=n;let u=s.createGain();u.gain.setValueAtTime(1e-4,r),u.gain.exponentialRampToValueAtTime(a,r+o),u.gain.exponentialRampToValueAtTime(1e-4,r+i),c.connect(l).connect(u).connect(this.master),c.start(r,Math.random()*2),c.stop(r+i+.02)}bird(e,t){let n=2400+Math.random()*1600,r=2+Math.floor(Math.random()*3);for(let i=0;i<r;i++)this.tone(n,`sine`,e+i*.11,.07,.035*t,n*1.35)}crickets(e){let t=4200+Math.random()*500;for(let n=0;n<3;n++)this.tone(t,`sine`,e+n*.045,.025,.012)}splash(e,t){this.burst(`bandpass`,900+Math.random()*900,.8,e,.22+Math.random()*.2,.11*t,.01)}laugh(e,t){let n=this.ctx,r=Math.random()<.5?210+Math.random()*60:330+Math.random()*90,i=n.createBiquadFilter();i.type=`bandpass`,i.frequency.value=850,i.Q.value=3,i.connect(this.master);let a=3+Math.floor(Math.random()*2);for(let o=0;o<a;o++){let a=e+o*.15,s=n.createOscillator();s.type=`sawtooth`,s.frequency.setValueAtTime(r*(1-o*.04),a),s.frequency.linearRampToValueAtTime(r*(.9-o*.04),a+.09);let c=n.createGain();c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(.05*t,a+.015),c.gain.exponentialRampToValueAtTime(1e-4,a+.1),s.connect(c).connect(i),s.start(a),s.stop(a+.12)}}},gx=6,_x=500,vx=300,yx=1.35,bx=40,xx=100*Math.log(yx),Sx=300,Cx=4.000244140625,wx=50,Tx=48,Ex=250,Dx=600,Ox=150,kx=new Map([[`arrowleft`,[1,0]],[`a`,[1,0]],[`arrowright`,[-1,0]],[`d`,[-1,0]],[`arrowup`,[0,1]],[`w`,[0,1]],[`arrowdown`,[0,-1]],[`s`,[0,-1]]]);function Ax(e){if(e.deltaMode!==WheelEvent.DOM_DELTA_PIXEL)return!1;if(e.deltaX!==0)return!0;let t=Math.abs(e.deltaY);return t%Cx!==0&&(!Number.isInteger(t)||t<wx)}function jx(e,t,n,r){let i=new Map,a=!1,o=!1,s=!1,c={x:0,y:0},l=0,u=0,d=0,f,p=!1,m,h=!1,g=!1,_=()=>window.devicePixelRatio||1,v=t=>{let n=e.getBoundingClientRect();return{x:(t.clientX-n.left)*_(),y:(t.clientY-n.top)*_()}},y=()=>{f&&clearTimeout(f),f=void 0},b=()=>{let[e,t]=[...i.values()];return e&&t?Math.hypot(e.x-t.x,e.y-t.y):0},x=()=>{let[e,t]=[...i.values()];return e&&t?{x:(e.x+t.x)/2,y:(e.y+t.y)/2}:{x:0,y:0}},S=()=>{let[e,t]=[...i.values()];return e&&t?Math.atan2(t.y-e.y,t.x-e.x)*180/Math.PI:0},C=new Map,w=0,T=!1,E=0,D=e=>{let n=Math.max(0,Math.min(e-E,50))/1e3;E=e;let i=0,o=0;for(let[t,n]of C)e-n<Ex||(i+=kx.get(t)[0],o+=kx.get(t)[1]);(i||o)&&t.pan(i*Dx*n*_(),o*Dx*n*_()),m&&r.active()&&r.aim(m.x,m.y,a),T=C.size>0||t.world.camera.swinging||e<w,T&&requestAnimationFrame(D)};t.onChange(()=>{w=performance.now()+Ox,T||(T=!0,E=performance.now(),requestAnimationFrame(D))}),e.addEventListener(`pointerdown`,t=>{T_(e,t.pointerId);let _=v(t);i.set(t.pointerId,_),t.pointerType===`mouse`&&(m=_),i.size===2?(o&&r.abort(),o=!1,y(),s=!0,u=b(),d=S()):i.size===1&&(s=!1,p=!1,c=_,l=t.timeStamp,h&&t.pointerType===`mouse`?(g=!0,s=!0):r.active()&&(t.pointerType!==`mouse`||t.button===0)?(t.pointerType===`mouse`?a=!0:o=!0,r.press(_.x,_.y)):t.pointerType!==`mouse`&&(f=setTimeout(()=>{p=!0,n({deviceX:_.x,deviceY:_.y,long:!0})},_x)))}),e.addEventListener(`pointermove`,e=>{let n=i.get(e.pointerId),l=v(e);if(e.pointerType===`mouse`&&(m=l),!n){e.pointerType===`mouse`&&r.active()&&r.aim(l.x,l.y,!1);return}if(a||o){i.set(e.pointerId,l),r.aim(l.x,l.y,!0);return}if(i.size===1){!s&&Math.hypot(l.x-c.x,l.y-c.y)>gx*_()&&(s=!0,y()),s&&t.pan(l.x-n.x,l.y-n.y),i.set(e.pointerId,l);return}let f=x();i.set(e.pointerId,l);let p=x();t.pan(p.x-f.x,p.y-f.y);let h=b();u>0&&h/u>yx?(t.zoom(1,p.x,p.y),u=h):u>0&&u/h>yx&&(t.zoom(-1,p.x,p.y),u=h);let g=(S()-d+540)%360-180;Math.abs(g)>=bx&&(t.rotate(g>0?-1:1),d=S())});let O=e=>{if(!i.has(e.pointerId))return;if(a||o){i.delete(e.pointerId),r.release(a&&e.type===`pointerup`),a=!1,o=!1;return}if(r.active()&&e.pointerType===`mouse`&&e.button===2){i.delete(e.pointerId),!s&&e.timeStamp-l<vx&&r.cancel();return}y();let t=i.size===1&&!s&&!p&&e.type===`pointerup`;if(i.delete(e.pointerId),t){let t=v(e);n({deviceX:t.x,deviceY:t.y,long:e.button===2})}i.size<2&&(u=0),i.size===1&&(s=!0)};e.addEventListener(`pointerup`,O),e.addEventListener(`pointercancel`,O),e.addEventListener(`pointerleave`,e=>{e.pointerType===`mouse`&&(m=void 0)}),e.addEventListener(`contextmenu`,e=>e.preventDefault());let k=!1,A=-1/0,j=0,M=-1/0,ee=!1;e.addEventListener(`wheel`,e=>{if(e.preventDefault(),!e.deltaX&&!e.deltaY)return;let n=v(e);if(e.ctrlKey){if(ee||(e.timeStamp-M>Sx&&(j=0),M=e.timeStamp,j-=e.deltaY,Math.abs(j)<xx))return;t.zoom(j>0?1:-1,n.x,n.y),j=0}else e.timeStamp-A>Sx&&(k=Ax(e)),A=e.timeStamp,k?t.pan(-e.deltaX*_(),-e.deltaY*_()):e.deltaY&&t.zoom(e.deltaY<0?1:-1,n.x,n.y)},{passive:!1});let te=1,ne=0;document.addEventListener(`gesturestart`,e=>{e.preventDefault(),ee=!0,te=1,ne=0}),document.addEventListener(`gesturechange`,n=>{n.preventDefault();let r=n;if(r.target!==e||i.size>0)return;let a=v(r);(r.scale/te>yx||te/r.scale>yx)&&(t.zoom(r.scale>te?1:-1,a.x,a.y),te=r.scale),Math.abs(r.rotation-ne)>=bx&&(t.rotate(r.rotation>ne?-1:1),ne=r.rotation)}),document.addEventListener(`gestureend`,e=>{e.preventDefault(),ee=!1}),window.addEventListener(`keydown`,n=>{if(n.target instanceof HTMLInputElement)return;let i=n.key.toLowerCase();if((n.ctrlKey||n.metaKey)&&i===`z`){r.undo(),n.preventDefault();return}let a=n.ctrlKey||n.metaKey||n.altKey,o=kx.get(i);if(o&&!a)n.repeat||(C.set(i,performance.now()),t.pan(o[0]*Tx*_(),o[1]*Tx*_())),n.preventDefault();else if(i===` `&&!a)n.repeat||(h=!0,g=!1,e.style.cursor=`grab`),n.preventDefault();else{switch(i){case`q`:t.rotate(-1);break;case`e`:t.rotate(1);break;case`z`:case`-`:t.zoom(-1);break;case`x`:case`=`:case`+`:t.zoom(1);break;case`1`:t.setSpeed(1);break;case`2`:t.setSpeed(2);break;case`3`:t.setSpeed(3);break;case`r`:r.rotate();break;case`escape`:r.cancel();break;default:return}n.preventDefault()}}),window.addEventListener(`keyup`,n=>{let r=n.key.toLowerCase();C.delete(r),r===`meta`&&C.clear(),r===` `&&h&&(h=!1,e.style.cursor=``,g||t.togglePause(),n.preventDefault())}),window.addEventListener(`blur`,()=>{C.clear(),h=!1,e.style.cursor=``})}var Mx=class{world;send;listeners=[];a={x:0,y:0};b={x:0,y:0};speedIndex=1;speedBeforePause=1;constructor(e,t){this.world=e,this.send=t}onChange(e){this.listeners.push(e)}changed(){for(let e of this.listeners)e()}rotate(e){let t=this.world.camera;t.rotation=t.rotation+e+4&3,this.changed()}zoom(e,t,n){let r=this.world.camera,i=r.zoom,a=r.magnify;if(e>0?i>0?--i:a<3&&(a+=1):a>1?--a:i<2&&(i+=1),i===r.zoom&&a===r.magnify)return;let o=e=>{let i=this.world.scale,a=t===void 0?0:t/i-this.world.viewWidth/2,o=n===void 0?0:n/i-this.world.viewHeight/2;return r.worldAt(a,o,r.level,e)};o(this.a),r.zoom=i,r.magnify=a,this.world.refit(),o(this.b),r.centerX+=this.a.x-this.b.x,r.centerY+=this.a.y-this.b.y,this.changed()}lookAt(e,t){let n=this.world.camera;n.centerX=e,n.centerY=t,this.changed()}pan(e,t){let n=this.world.scale;this.world.camera.pan(-e/n,-t/n),this.changed()}setSpeed(e){this.speedIndex=e,e>0&&(this.speedBeforePause=e),this.send({type:`speed`,speed:Jc.speeds[e]}),this.changed()}togglePause(){this.setSpeed(this.speedIndex===0?this.speedBeforePause:0)}},Nx=1500,Px=1e3/30,Fx=100,Ix=4,Lx=class{mode=`auto`;lastDraw=-1/0;activeUntil=-1/0;poke(e){this.activeUntil=e+Nx}shouldDraw(e,t){let n=e<this.activeUntil,r=t&&!n?Fx:this.mode===`60`||this.mode===`auto`&&n?0:Px;return e-this.lastDraw<r-Ix?!1:(this.lastDraw=e,!0)}},Rx=new URLSearchParams(location.search),zx=Rx.get(`continue`),Bx=!Rx.has(`scene`)&&zx===null,Vx=Bx?`sunset`:Rx.get(`scene`)??(zx===null?`play`:`kaleo`),Hx=Rx.has(`freeze`)||Bx,Ux=Rx.has(`noui`)||Bx,Wx=Rx.get(`time`),Gx=Wx?Number(Wx.split(`:`)[0])+Number(Wx.split(`:`)[1]??0)/60:void 0,Kx=Number(Rx.get(`day`))||lx(),qx=document.getElementById(`world`),Jx=document.getElementById(`ui`),Yx=new Worker(new URL(new URL(`sim.worker-B_nO8cRX.js`,import.meta.url).href,``+import.meta.url),{type:`module`});function Xx(e,t=[]){Yx.postMessage(e,t)}function Zx(){let e=Number(Rx.get(`scale`));return e>=1?Math.round(e):Math.max(1,Math.round(window.devicePixelRatio||1))}var Qx,$x,eS=new Lx;Rx.has(`perf`)&&(eS.mode=`60`);for(let e of[`pointerdown`,`pointermove`,`wheel`,`keydown`])window.addEventListener(e,()=>eS.poke(performance.now()),{passive:!0});var tS,nS=new hx;Jx.addEventListener(`click`,e=>{e.target instanceof Element&&e.target.closest(`button`)&&nS.play(`click`)});var rS=()=>location.assign(location.pathname),iS,aS,oS=[],sS,cS,lS=[],uS;Yx.onmessage=async e=>{let t=e.data;if(t.type===`world`&&Au(t.clock),t.type===`world`&&Qx)Qx.setStyle(t.look.style),Qx.setWorld(t.terrain,t.objects),iS=new sx(Qx.terrain),iS.setObjects(t.objects),iS.setPurse(t.purse),iS.setLook(t.look),iS.setLand(t.land),Qx.setLand(t.land),aS?.useMirror(iS),tS&&(tS.saves.autosave=hv(t.scene)),tS?.refresh(),Vv(`Game loaded`);else if(t.type===`changes`){if(!Qx||!iS){uS=t.purse;return}eS.poke(performance.now()),t.objects&&t.objects.length!==iS.objects.length?nS.play(t.objects.length>iS.objects.length?`place`:`demolish`):t.terrain&&nS.play(`place`),t.refused.length&&nS.play(`refused`),t.land!==void 0&&(iS.setLand(t.land),Qx.setLand(t.land),nS.play(`buy`)),t.terrain&&(Qx.updateTerrain(t.terrain,t.tiles),iS.terrainChanged()),t.objects&&(Qx.setStyle(t.look.style),Qx.setObjects(t.objects),iS.setObjects(t.objects)),iS.setPurse(t.purse),iS.setLook(t.look),tS?.refresh(),t.refused.length&&Vv(t.refused[0],!0),t.open!==void 0&&(qy(t.open),tS?.place.open(t.open,`change`))}else if(t.type===`saved`)tS?.saves.handle(t);else if(t.type===`playReport`)tS?.saves.report(t.report);else if(t.type===`guestInfo`)tS?.guest.show(t.info);else if(t.type===`poolInfo`)tS?.pool.show(t.info);else if(t.type===`placeInfo`)tS?.place.show(t.info);else if(t.type===`poolPreview`)aS?.poolPreview(t.key,t.preview);else if(t.type===`workPreview`)Vy(t.key,t.preview);else if(t.type===`loadFailed`)Vv(`Couldn\u2019t load that save: ${t.reason}`,!0);else if(t.type===`world`){let e=u[t.scene]??u.play,n=Number(Rx.get(`rot`)??e.camera.rotation),r=Number(Rx.get(`zoom`)??e.camera.zoom),[i,a]=(Rx.get(`at`)??`${e.camera.x},${e.camera.y}`).split(`,`).map(Number),o=xd.from(t.terrain).heightAt(i,a),s=new cl(t.terrain.size,i,a,o,n,r),c=Number(Rx.get(`mag`));r===0&&(c===2||c===3)&&(s.magnify=c);let l=await w_.create({canvas:qx,scale:Zx(),frozen:Hx},t.terrain,t.capacity,s);l.setStyle(t.look.style),l.setWorld(t.terrain,t.objects),l.onBufferFree=e=>Xx({type:`return`,buffer:e},[e]),l.setLand(t.land),l.composite.onFlash=()=>nS.thunder(),Qx=l,iS=new sx(l.terrain),iS.setObjects(t.objects),iS.setPurse(uS??t.purse),iS.setLook(t.look),iS.setLand(t.land),window.__camera=s,window.__guests=()=>l.guestPoints(),window.__screenOf=(e,t,n)=>l.screenOf(e,t,n,{x:0,y:0}),pS();for(let e of oS.splice(0))l.pushSnapshot(e,performance.now());$x=new Mx(l,Xx),aS=new jy(Jx,l,iS,Xx);let d=e.map===`lab`?`Terrain lab`:`Kaleo Point`;if(Ux||(tS=ox(Jx,{controls:$x,send:Xx,construction:aS,mirror:()=>iS,pacer:eS,sound:nS,newGame:()=>location.assign(`${location.pathname}?scene=kaleo&new`),title:rS},{perf:Rx.has(`perf`),name:d})),tS){tS.saves.autosave=hv(t.scene);for(let e of lS.splice(0))tS.advisor.add(e)}Bx&&fx(Jx,nS,e=>location.assign(`${location.pathname}${e}`)),(Rx.has(`new`)||zx!==null)&&history.replaceState(null,``,location.pathname),Rx.has(`new`)&&Xx({type:`save`,id:-1}),sS&&(l.showLights(sS.lights),l.showWildlife(sS.wildlife),tS?.resort(sS)),cS&&tS?.needs.setStaff(cS.staff),jx(qx,$x,e=>tS?.inspect(e),aS),yv(),requestAnimationFrame(xS)}else if(t.type===`snapshot`){Qx?Qx.pushSnapshot(t.buffer,performance.now()):oS.push(t.buffer);for(let e of t.events)e.kind===`money`?(tS?.money.add(e.x,e.y,e.amount,performance.now()),Qx&&gS(e.x,e.y)&&nS.play(`cash`)):e.kind===`alert`?Vv(e.text,!1,7e3):e.kind===`hint`&&(tS?tS.advisor.add(e.id):lS.push(e.id))}else t.type===`field`?tS?.overlays.receive(t.id,t.values):t.type===`fieldsChanged`?(tS?.overlays.fieldsChanged(),aS?.viewsChanged()):t.type===`tileFields`?tS?.tileFields(t.fields):t.type===`viewPreview`?tS?.views.show(t.key,t.preview):t.type===`resort`?(sS=t.report,Qx?.showLights(t.report.lights),Qx?.showWildlife(t.report.wildlife),tS?.resort(t.report)):t.type===`finances`&&(cS=t.report,tS?.finances.show(t.report),tS?.staff.show(t.report),tS?.needs.setStaff(t.report.staff))};async function dS(){let e;if(zx!==null&&(e=await Cv(zx).catch(()=>void 0),!e))return rS();Xx({type:`init`,options:{scene:Vx,freeze:Hx,hour:Gx,save:e,day:Kx}},e?[e.buffer]:[])}dS(),`serviceWorker`in navigator&&(!navigator.webdriver||Rx.has(`sw`))&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});var fS=Rx.get(`style`);fS&&fS in e&&Xx({type:`command`,command:{type:`style`,style:fS}});function pS(){if(!Qx)return;let e=window.devicePixelRatio||1,t=Math.round(window.innerWidth*e),n=Math.round(window.innerHeight*e);qx.style.width=`${t/e}px`,qx.style.height=`${n/e}px`,Qx.resize(t,n)}window.addEventListener(`resize`,pS);var mS=0,hS={x:0,y:0};function gS(e,t){let n=Qx.screenOf(e,t,1,hS);return n.x>=0&&n.y>=0&&n.x<=window.innerWidth&&n.y<=window.innerHeight}var _S={crowd:0,swimmers:0},vS=0,yS=e=>Math.max(0,Math.min(1,e));function bS(e){if(!Qx||!iS||e-vS<250)return;vS=e;let t=Qx.camera,n=iS.terrain.size,r=Math.max(0,Math.min(n-1,Math.floor(t.centerX))),i=Math.max(0,Math.min(n-1,Math.floor(t.centerY))),a=Qx.lastHeader.hour;Qx.crowdInView(_S),nS.listen({shore:yS(1-((iS.coast[i*n+r]??255)-2)/16),crowd:_S.crowd,swimmers:_S.swimmers,daylight:yS((a-5.5)/1.5)*yS((19.5-a)/1.5),rain:Qx.composite.rain,near:t.zoom===0?1:t.zoom===1?.55:.25,paused:Hx||$x?.speedIndex===0})}function xS(e){requestAnimationFrame(xS),bS(e);let t=Hx||$x?.speedIndex===0;eS.shouldDraw(e,t)&&(Qx?.frame(e),tS?.frame(e),Qx?.hasSnapshot&&mS++,mS===3&&(document.documentElement.dataset.ready=`1`))}