var canv=document.getElementById("mainCanvas");
var contx = canv.getContext("2d");
class Mask {
    constructor(ship, background, width, height) {
        this.ship = ship;
        this.background = background;
        this.width = width;
        this.height = height;
    }
    draw() {
        contx.drawImage(this.background, this.ship.x - (this.width - this.ship.width) / 2, this.ship.y - (this.height - this.ship.height) / 2, this.width, this.height);
    }
}

class Praska {
    constructor(start_pos, textures, width, height) {
        this.x = start_pos;
        this.y = 536;
        this.texture = textures;
        this.width = width;
        this.height = height;
    }
    move(key) {
        
        if (key.keyCode == 65) {
            this.x--;
        }
        if (key.keyCode == 68) {
            this.x++;

        }
    }
    draw() {
        contx.drawImage(this.texture, this.x, this.y, this.width, this.height);
    }
}

var bg1 = new Image();
bg1.src = "iceBG.png";
var bg2 = new Image();
bg2.src = "iceBG.png";
var pyla = new Image();
pyla.src = "pulyas.png";
var stn = new Image();
stn.src = "stone.png";
var pulya;
var puli = [];
for (var i = 0; i < 9;i++)
{
    pulya = new Image();
    pulya.src = "pulya" + i + ".png";
    puli.push(pulya);
}


function prask_move(key) {
    prask.move(key);
}

var prask = new Praska(1024,pyla,188,256);
addEventListener("keydown",prask_move);

window.onload=function()
{
	var b=document.getElementById("canvInside");
	if(b.offsetWidth<b.offsetHeight)
		{
		canv.style.width=(b.offsetWidth-(b.offsetWidth%16))+"px";
		canv.style.height=canv.offsetWidth/2;
		}
	if(b.offsetWidth>b.offsetHeight)
		{
			canv.style.height=(b.offsetHeight-(b.offsetHeight%16))+"px";
			canv.style.width = canv.offsetHeight*2;
				
		}
	canv.style.left = (b.offsetWidth-canv.offsetWidth)/2+"px";
	
	/////	
	//////////drawImage
	const checkImage = params => {
		const id = params.id;
		const path = params.path;
		return new Promise(resolve => {
			const img = new Image();
			img.onload = () => resolve({id: id, image: img});
			img.onerror = () => resolve({path, status: 'error'});

			img.src = path;
		});
	}
	const loadImg = (...paths) => Promise.all(paths.map(checkImage));
	// and call with
	loadImg({id: 'prs', path: 'praska.png'}, {id: 'bg1', path: 'iceBG.png'}, {id: 'bg2', path: 'iceBG.png'},
			{id: 'fg1',path: 'iceFor.png'},{id: 'fg2',path: 'iceFor.png'},{id: 'stn',path: 'stone.png'},
			{id: 'pyla',  path: 'pulyas.png'}).then(function (imgs) {
		var images = {};
		//all corect
		imgs.forEach(item => {images[item.id] = item.image});//mb s
		var goDown = 1;
		var fy = 512;
		var sy = 2560;
		var bgtougle = 1
		var stones = [
						[Math.floor(Math.random() * 1980),Math.floor(Math.random() * 1024)+1030+goDown],
					    [Math.floor(Math.random() * 1980),Math.floor(Math.random() * 1024)+1030+goDown],
					    [Math.floor(Math.random() * 1980),Math.floor(Math.random() * 1024)+1030+goDown],
						[Math.floor(Math.random() * 1980),Math.floor(Math.random() * 1024)+1030+goDown],
						[Math.floor(Math.random() * 1980),Math.floor(Math.random() * 1024)+1030+goDown],
						[Math.floor(Math.random() * 1980),Math.floor(Math.random() * 1024)+1030+goDown],
						[Math.floor(Math.random() * 1980),Math.floor(Math.random() * 1024)+1030+goDown],
						[Math.floor(Math.random() * 1980),Math.floor(Math.random() * 1024)+1030+goDown],
						[Math.floor(Math.random() * 1980),Math.floor(Math.random() * 1024)+1030+goDown],
						[Math.floor(Math.random() * 1980),Math.floor(Math.random() * 1024)+1030+goDown],
					]
							
		
		var msk = new Mask(prask,bg1,1,1)
		function mainDraw() // main cycle
		{
						//console.log(goDown);
						console.log(stones.length)
						canv.height = canv.height;
						contx.drawImage(images.prs,0,0-goDown,2048,512);
						contx.drawImage(images.bg1,0,fy-goDown,2048,2048);
						contx.drawImage(images.bg2,0,sy-goDown,2048,2048);
						for(i=0;i<stones.length;i+=1)
						{
							console.log(i);
							if(stones[i][1]-goDown<-129)
							{
									stones[i][0]=Math.floor(Math.random() * 1025);
									stones[i][1]=Math.floor(Math.random() * 512)+1030+goDown;
							}
							else
							{
							contx.drawImage(images.stn,stones[i][0],stones[i][1]-goDown,128,128);
							}
						}
					//	contx.drawImage(images.stn,1024,1152-goDown,128,128)
						//contx.drawImage(images.stn,1536,1536-goDown,128,128)
						//contx.drawImage(images.stn,512,1256-goDown,128,128)
						contx.font = "bold 72px arial";
						contx.fillText((goDown-(goDown%64)+128)/64+"m", 5, 72);
						prask.draw();
						msk.draw();
						contx.stroke();
						goDown +=1;
						if(goDown%3072==0)
						{
							if(bgtougle==1)
							{
								fy+=4090;
								bgtougle=2;
								console.log(6661)
							}
							else
							{
								sy += 4090;
								bgtougle=1;
								console.log(6662)
							}
						}
						if(goDown>10000000){console.log('Stop');clearInterval(tid)}
					}
					mainDraw();
					var tid = setInterval(mainDraw,30);
	});
	

}