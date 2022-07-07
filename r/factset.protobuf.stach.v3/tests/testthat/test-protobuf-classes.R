context("Check for classes")	

test_that("Existence check for all classes corresponding to each protobuf model", {	
    expect_true(isClass(factset.protobuf.stach.v3.MetadataItem))
    expect_true(isClass(factset.protobuf.stach.v3.Column))
    expect_true(isClass(factset.protobuf.stach.v3.RowOrganizedTable))
    expect_true(isClass(factset.protobuf.stach.v3.Table))
    expect_true(isClass(factset.protobuf.stach.v3.TableView))
    expect_true(isClass(factset.protobuf.stach.v3.Views))
}) 
