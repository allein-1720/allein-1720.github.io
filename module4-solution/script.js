var names=new Array();
names[0]="Yash";
names[1]="Jay";
names[2]="Jenny";
names[3]="David";
names[4]="Patak";
names[5]="Jack";
names[6]="Lucky";
names[7]="Pretty";
names[8]="Peter";
names[9]="jeep";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}