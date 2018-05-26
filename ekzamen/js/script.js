function object_all_in_one (obj){
	var keys = [];
	var valuers = [];
	var flag = 0;
	var x = {};
	for (var obj_in in obj){
		for (var key in obj[obj_in]){
			if (flag==0){
				keys[0] = key;
				flag = 1;
			}
			for (var i = 0; i < keys.length; i++){
				if (keys[i] == key) {
					break;
				}
				if (i == keys.length-1){
					keys[keys.length] = key;
				}
			}
		}
	}

	or (var obj_in in obj){
		for (var key in obj[obj_in]){
			
		}
	}
	console.log(keys);
}









var x = {a1: {
			name: "karamba1",
			value: 17,
			descr: "chtoto1"
		},
		a2: {
			name: "karamba2",
			descr: "chtoto2"
		},
		a3: {
			name: "karamba3",
			value: 25
		},
		a4: {
			value: 56,
			descr: "chtoto3"
		}
	}
object_all_in_one(x);