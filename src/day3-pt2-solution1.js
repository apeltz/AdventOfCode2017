


function firstLargerValue(n) {

	const data = new SpiralDataCounterClockWise('e');

	while (!data.head || data.head.value <= n){
		data.add();
	}
	return data.head.value;
}


function SpiralDataCounterClockWise(beginningDirection) {
	var data = new SpiralData(beginningDirection);
	data.spiralNextDirection = {
		e: 'n',
		n: 'w',
		w: 's',
		s: 'e'
	};
	return data;
}


function SpiralData(beginningDirection) {
	this.length = 0;
	this.head = null;
	this.currentDirection = beginningDirection;

	this.add = function() {

		if (!this.head) {
			this.head = new Node(1);
		}

		else {
			let node = new Node(0);

			if (this.currentDirection === 'e') {
				node.w = this.head;
				node.nw = this.head.n;
				node.n = node.nw && node.nw.e;
				node.ne = node.n && node.n.e;
			}
			if (this.currentDirection === 'n') {
				node.s = this.head;
				node.sw = this.head.w;
				node.w = node.sw && node.sw.n;
				node.nw = node.w && node.w.n;
			}
			if (this.currentDirection === 'w') {
				node.e = this.head;
				node.se = this.head.s;
				node.s = node.se && node.se.w;
				node.sw = node.s && node.s.w;
			}
			if (this.currentDirection === 's') {
				node.n = this.head;
				node.ne = this.head.e;
				node.e = node.ne && node.ne.s;
				node.se = node.e && node.e.s;
			}

			let neighborsCount = 0;
			for (let d in node) {
				if(!node.hasOwnProperty(d)) continue;
				if (node[d] && node[d].value) {
					neighborsCount++
					node.value += node[d].value;
				}
			}

			this.head[this.currentDirection] = node;
			this.head = node;

			if (neighborsCount < 3) {
				this.currentDirection = this.spiralNextDirection[this.currentDirection];
			}
		}
		this.length++
	}

}


function Node(value) {
	this.value = value;
}



module.exports = {
	firstLargerValue: firstLargerValue
}
