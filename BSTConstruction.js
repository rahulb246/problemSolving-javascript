class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

	// average : O(long(n)) TC, O(log(n)) SC
	// worst : O(n) TC, O(n) SC
  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
		if (value < this.value) {
			if (this.left === null) this.left = new BST(value);
			else this.left.insert(value);
		} else {
			if (this.right === null) this.right = new BST(value);
			else this.right.insert(value);
		}
  }

	// average : O(long(n)) TC, O(log(n)) SC
	// worst : O(n) TC, O(n) SC
  contains(value) {
    // Write your code here.
		if (value < this.value) {
			if (this.left === null) return false;
			else return this.left.contains(value);
		} else if (value > this.value) {
			if (this.right === null) return false;
			else return this.right.contains(value);
		} 
		return true;
  }

	// average : O(long(n)) TC, O(log(n)) SC
	// worst : O(n) TC, O(n) SC
  remove(value, parent=null) {
		if (value < this.value) {
			if (this.left !== null) this.left.remove(value, this);
		} else if (value > this.value) {
			if (this.right !== null) this.right.remove(value, this);
		} else {
			if (this.left !== null && this.right !== null) {
				this.value = this.right.getMinValue();
				this.right.remove(this.value, this);
			} else if (parent === null) {
				// case where we remove root & have only 1 child
				if (this.left !== null) {
					this.value = this.left.value;
					this.right = this.left.right;
					this.left = this.left.left;
				} else if (this.right !== null) {
					this.value = this.right.value;
					this.left = this.right.left;
					this.right = this.right.right;
				} else {
					// => this is a single node tree, do nothing
				}
			} else if (parent.left === this) {
				parent.left = this.left !== null ? this.left : this.right;
			} else if (parent.right === this) {
				parent.right = this.left !== null ? this.left : this.right;
			}
		}
  }
	
	getMinValue() {
		if (this.left === null) return this.value;
		return this.left.getMinValue();
	}
}

/*
const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

root.insert(12);

root.remove(10);
*/
