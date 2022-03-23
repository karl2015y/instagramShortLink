import bigint from "big-integer"

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = lower.toUpperCase();
var numbers = '0123456789'
var ig_alphabet =  upper + lower + numbers + '-_'
var bigint_alphabet = numbers + lower

export function toShortcode( longid )
{
	var o = bigint( longid ).toString( 64 )
	return o.replace(/<(\d+)>|(\w)/g, (m,m1,m2) =>
	{
		return ig_alphabet.charAt( ( m1 )
		  ? parseInt( m1 ) 
		  : bigint_alphabet.indexOf( m2 ) )
	});
}

export function fromShortcode( shortcode )
{
	var o = shortcode.replace( /\S/g, m =>
	{
		var c = ig_alphabet.indexOf( m )
		var b = bigint_alphabet.charAt( c ) 
		return ( b != "" ) ? b : `<${c}>`
	} )	
	return bigint( o, 64 ).toString( 10 )
}

// toShortcode(  '908540701891980503' ) // s.b. 'ybyPRoQWzX'
// fromShortcode( 'ybyPRoQWzX' ) // s.b. '908540701891980503'