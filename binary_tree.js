function RightTriangle(base, height){
  this.getBase = function(){
    return base;
  };
  this.getHeight = function(){
    return height;
  };
};

RightTriangle.prototype.area = function(){
  return (this.getBase() * this.getHeight())/2;
};

RightTriangle.prototype.hypotenuese = function(){
  base2 = Math.pow(this.getBase(),2);
  height2 = Math.pow(this.getHeight(),2);
  var hyp =  Math.sqrt( base2 + height2 );
  return hyp;
}

// Rock Paper Scissors

function Player(name, res){
  this.getName = function(){
    return name;
  };
  this.res = res;
};

Player.prototype.promptForResponse = function(){
  var res = prompt("enter your response");
  this.res = res;
};

Player.prototype.checkResponse = function(){
  var res = this.res;
  this.res = "";
  return res;
};


function RPSGame(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
};

RPSGame.prototype.checkWinner = function(){
  var p1 = player1.checkResponse().toLowerCase();
  var p2 = player2.checkResponse().toLowerCase();


};

function play(){
  this.player1 = player1.promptForResponse();
  this.player2 = player2.promptForResponse();
}



// A binary tree is a prototype with 2 children
function BinaryTree(value) {
    this.value = value || null;
    this.leftChild = null;
    this.rightChild = null;
}

BinaryTree.prototype.insert = function(newValue) {
  if (this.value === null) {
    this.value = newValue;
  } else {
    if (this.value > newValue) {
      if (this.leftChild === null) {
        this.leftChild = new BinaryTree(newValue);
      } else {
      this.leftChild.insert(newValue);
      }
    }
    else {
      if (this.rightChild === null) {
        this.rightChild = new BinaryTree(newValue);
      } else {
      this.rightChild.insert(newValue);
      }
    }
  }
};


// tree node is 5. leftChild is 4. rightChild is 6.

//in-order traversal prints 4,5,6
BinaryTree.prototype.print = function(){
  if(this.leftChild !== null){
    this.leftChild.print();
  } console.log(this.value);
  if(this.rightChild !== null){
    this.rightChild.print();
  }
};

//pre-order traversal print 5,4,6
BinaryTree.prototype.print = function(){
  console.log(this.value);
  if(this.leftChild !== null){
    this.leftChild.print();
  } 
  if(this.rightChild !== null){
    this.rightChild.print();
  }
};

//post-order traversal prints 4,6,5
BinaryTree.prototype.print = function(){
  if(this.leftChild !== null){
    this.leftChild.print();
  } 
  if(this.rightChild !== null){
    this.rightChild.print();
  }
  console.log(this.value);
};

BinaryTree.prototype.count = function(size){
  size = size || 0
  if(this.leftChild !== null){
    size = this.leftChild.count(size);
  }
  size += 1;
  if(this.rightChild !== null){
    size = this.rightChild.count(size);
  }
  return size;
};







var root = { left: null, right: null };

function countLeaves(node) {
  if (node === null) {
    return 0;
  }

  if (node.left === null && node.right === null) {
    return 1;
  }

  return countLeaves(node.left) + countLeaves(node.right);
}

// only the root
countLeaves(root);

// give the root a left node
root.left = { left: null, right: null };

// count with the root having a left child
countLeaves(root);

// give the root a right node
root.right = { left: null, right: null };

// count with the root having a left and a right
countLeaves(root);
