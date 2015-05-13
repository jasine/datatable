 console.log('\'Allo \'Allo!');

// // $(document).ready(function() {
// //     $('#example').dataTable( {
// //         "ajax": "http://datatables.net/examples/ajax/data/arrays.txt"
// //     } );
// // } );

// // $(document).ready(function() {
// //     $('#example').dataTable( {
// //         "processing": true,
// //         "serverSide": true,
// //         "ajax": "http://datatables.net/examples/server_side/scripts/server_processing.php"
// //     } );
// // } );
// // 
// // 
// // 
// // $.fn.dataTable.ext.search.push(
// //     function( settings, data, dataIndex ) {
// //         var min = parseInt( $('#min').val(), 10 );
// //         var max = parseInt( $('#max').val(), 10 );
// //         var age = parseFloat( data[4] ) || 0; // use data for the age column
// //  		//console.log(age);
// //         if ( ( isNaN( min ) && isNaN( max ) ) ||
// //              ( isNaN( min ) && age <= max ) ||
// //              ( min <= age   && isNaN( max ) ) ||
// //              ( min <= age   && age <= max ) )
// //         {
// //             return true;
// //         }
// //         //console.log(data[4])
// //         return true;
// //     }
// // );
// jQuery.fn.dataTableExt.afnFiltering.push(
//     function( oSettings, aData, iDataIndex ) {
//         // var iColumn = 3;
//         // var iMin = document.getElementById('min').value * 1;
//         // var iMax = document.getElementById('max').value * 1;
 
//         // var iVersion = aData[iColumn] == "-" ? 0 : aData[iColumn]*1;
//         // if ( iMin === "" && iMax === "" )
//         // {
//         //     return true;
//         // }
//         // else if ( iMin === "" && iVersion < iMax )
//         // {
//         //     return true;
//         // }
//         // else if ( iMin < iVersion && "" === iMax )
//         // {
//         //     return true;
//         // }
//         // else if ( iMin < iVersion && iVersion < iMax )
//         // {
//         //     return true;
//         // }
//         return false;
//     }
// );

//  Custom filtering function which will search data in column four between two values 
// $.fn.dataTable.ext.search.push(
//     function( settings, data, dataIndex ) {
//         // var min = parseInt( $('#min').val(), 10 );
//         // var max = parseInt( $('#max').val(), 10 );
//         // var age = parseFloat( data[3] ) || 0; // use data for the age column
 
//         // if ( ( isNaN( min ) && isNaN( max ) ) ||
//         //      ( isNaN( min ) && age <= max ) ||
//         //      ( min <= age   && isNaN( max ) ) ||
//         //      ( min <= age   && age <= max ) )
//         // {
//         //     return true;
//         // }
//         return false;
//     }
// );




// /* Custom filtering function which will search data in column four between two values */
// // $.fn.dataTable.ext.search.push(
// // 	function( settings, data, dataIndex ) {
// // 		var min = parseInt( $('#min').val(), 10 );
// // 		var max = parseInt( $('#max').val(), 10 );
// // 		var age = parseFloat( data[3] ) || 0; // use data for the age column

// // 		if ( ( isNaN( min ) && isNaN( max ) ) ||
// // 			 ( isNaN( min ) && age <= max ) ||
// // 			 ( min <= age   && isNaN( max ) ) ||
// // 			 ( min <= age   && age <= max ) )
// // 		{
// // 			return true;
// // 		}
// // 		return false;
// // 	}
// // );






// $(document).ready(function() {
//     $('#example').dataTable( {
//     	"pageLength": 25,
//     "lengthChange": false,
//         "processing": true,
//         "serverSide": true,
//         "ajax": {
//             "url": "http://datatables.net/examples/server_side/scripts/jsonp.php",
//             //"url": "http://localhost:3000/data",
//             "dataType": "jsonp"
//         }
//     } );
//          //table.fnDraw();
//     //var table=$('#example').dataTable();
//     var table = $('#example').DataTable();
//     $('#min, #max').keyup( function() {
//         //table.draw();
//         table.search( "Bruno" ).draw();
//         //
//     //     var filteredData = table
//     // .column( 0 )
//     // .data()
//     // .filter( function ( value, index ) {
//     //     return false;
//     // } );
//     } );

// } );


//     $.fn.dataTable.ext.search.push(
//   function( settings, data, dataIndex ) {
//     var min = parseInt( $('#min').val(), 10 );
//     var max = parseInt( $('#max').val(), 10 );
//     var age = parseFloat( data[3] ) || 0; // use data for the age column

//     if ( ( isNaN( min ) && isNaN( max ) ) ||
//        ( isNaN( min ) && age <= max ) ||
//        ( min <= age   && isNaN( max ) ) ||
//        ( min <= age   && age <= max ) )
//     {
//       return true;
//     }
//     return false;
//   }
// );

// $.fn.dataTableExt.afnFiltering.push(
//         function(oSettings, aData, iDataIndex){
//             return false;

//         });
// $.fn.dataTable.ext.type.order['salary-grade-pre'] = function ( d ) {
//     switch ( d ) {
//         case '$86,000':    return 1;
//         case '$162,700': return 2;
//         case '$206,850':   return 3;
//     }
//     return 0;
// };
  $(document).ready(function() {
    var oTable=$('#example').dataTable( {
    "lengthChange": true,
    "language": {
	        "infoFiltered": " - filtered from _MAX_ records"
	    },
    // "columnDefs": [ {
    //         "type": "salary-grade",
    //         "targets": -1
    //     } ],
        "processing": true,
        "serverSide": true,
        "paginate": false,
        "ajax":// "data/arrays.txt"
        {
            "url": "http://datatables.net/examples/server_side/scripts/jsonp.php",
            //"url": "http://localhost:3000/data",
            "dataType": "jsonp",
            "type": "POST"
        }
    } ).yadcf([  
    {
			column_number: 0
		},   
        {
          column_number: 4,
          filter_type: "range_date",
			date_format: "yyyy/mm/dd",
			filter_delay: 500
        }
        ]);
    //var table=$('#example').DataTable();
    //yadcf.exFilterColumn(oTable, [[0, "Trident"]]);
    //var table = $('#example').DataTable();
    // $('#min, #max').keyup( function() {

    //     table.draw(true);
    // } );

} );

