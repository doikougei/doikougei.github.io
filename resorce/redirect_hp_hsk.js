const targetUrl = GetScriptParams().url
setTimeout(link(targetUrl), 0);
function link(url){
    if(url) location.href=url;
}

function GetScriptParams()
{
    var scripts = document.getElementsByTagName( 'script' );
    var src = scripts[ scripts.length - 1 ].src;

    var query = src.substring( src.indexOf( '?' ) + 1 );
    var parameters = query.split( '&' );

    // URLクエリを分解して取得する
    var result = new Object();
    for( var i = 0; i < parameters.length; i++ )
    {
        var element = parameters[ i ].split( '=' );

        var paramName = decodeURIComponent( element[ 0 ] );
        var paramValue = decodeURIComponent( element[ 1 ] );

        result[ paramName ] = paramValue;
    }

    return result;
}