\name{factset.protobuf.stach.v2}
\alias{factset.protobuf.stach.v2}

\title{factset.protobuf.stach.v2}

\description{
The purpose of this library is to help in the serialization and de-serialization of the FactSet STACH v2 format represented using Google Protocol buffers. This library has the required FactSet STACH v2 Protobuf files and the helper serialization related methods are provided by RProtobuf library which is an internal dependency.
}

\section{Usage}{
   stachFormatdata <- read( factset.protobuf.stach.v2.Package, input='path of your stach file' )
}
\section{Arguments}{
\if{html}{\out{<div class="arguments">}}
\describe{
\item{\code{package}}{Stach Data which is represented as a Package object}
\item{\code{input}}{Input file which is in binary format}
}
}

\examples{
\dontrun{
# an example to Read column organized file data from a connection
read( factset.protobuf.stach.v2.Package, input = 'path of your stach file' )

# an example to Read row organized file data from a connection
read( factset.protobuf.stach.v2.RowOrganizedPackage, input = 'path of your stach file' )

# an example to Read the raw stach data as a character 
read( factset.protobuf.stach.v2.Package, input = as.character(stachdata) )

}
}