.onAttach <- function(libname, pkgname) {	
  proto_path = system.file("schema", package = "factset.protobuf.stach.v3")	
  readProtoFiles2(protoPath = proto_path,pattern = "\\.proto$", recursive = TRUE )	
} 
