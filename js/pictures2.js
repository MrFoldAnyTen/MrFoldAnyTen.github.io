var scene2, camera2, renderer2;
var geometry2, material2, mesh2;

init2();
animate2();

function init2() {

    scene2 = new THREE.Scene();

    camera2 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera2.position.z = 1000;

    geometry2 = new THREE.BoxGeometry( 200, 200, 200 );
    material2 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    mesh2 = new THREE.Mesh( geometry2, material2 );
    scene2.add( mesh2 );

    renderer2 = new THREE.WebGLRenderer();
    renderer2.setSize( window.innerWidth/2.5, window.innerHeight/2.5 );

    document.body.appendChild( renderer2.domElement );

}

function animate2() {

    requestAnimationFrame( animate2 );

    mesh2.rotation.x += 0.01;
    mesh2.rotation.y += 0.02;

    renderer2.render( scene2, camera2 );

}
