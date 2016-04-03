function BufferStream(e,t){return this instanceof BufferStream?(e?Array.isArray(e)||(e=[e]):e=[],this._charset=t,this._chunks=e,this._close=Q.defer(),this.closed=this._close.promise,void 0):new BufferStream(e,t)}var Q=require("q"),Reader=require("./reader");module.exports=BufferStream,BufferStream.prototype.forEach=function(e,t){var n=this,r=n._chunks;return Q.fcall(function(){r.splice(0,r.length).forEach(e,t)})},BufferStream.prototype.read=function(){var e;return e=Reader.join(this._chunks),this._charset&&(e=e.toString(this._charset)),Q.resolve(e)},BufferStream.prototype.write=function(e){if(this._charset)e=new Buffer(e+"",this._charset);else if(!(e instanceof Buffer))throw Error("Can't write strings to buffer stream without a charset: "+e);return this._chunks.push(e),Q.resolve()},BufferStream.prototype.close=function(){return this._close.resolve(),Q.resolve()},BufferStream.prototype.destroy=function(){return this._close.resolve(),Q.resolve()};