yc.inner.ProteinPool = function ()
{
    this.mapProteins = {}
    this.total = 0 ;
	
	this.increase = function(name,num){
		
		// 触发事件
		$(window).trigger('yc.inner.ProteinPool::onBeforeChange',[this,name,this.mapProteins[name],num]) ;
		
		if(typeof(this.mapProteins[name])=='undefined')
		{
		    this.mapProteins[name] = 0 ;
		}
		this.mapProteins[name]+= num ;
		this.total+= num ;
		
		// 触发事件
		$(window).trigger('yc.inner.ProteinPool::onAfterChange',[this,name,this.mapProteins[name],num]) ;
	}
	this.increase('red',10) ;
	this.increase('yellow',10) ;
	this.increase('blue',10) ;
	
	this.num = function(name){
        if(typeof(this.mapProteins[name])=='undefined')
        {
            this.mapProteins[name] = 0 ;
        }
        return this.mapProteins[name] ;
	}
	
}

yc.inner.ProteinPool._ins = null ;
yc.inner.ProteinPool.ins = function(){
    if(!yc.inner.ProteinPool._ins){
        yc.inner.ProteinPool._ins = new yc.inner.ProteinPool() ;
    }
    return yc.inner.ProteinPool._ins ;
}