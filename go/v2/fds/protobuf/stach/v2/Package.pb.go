// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.12.3
// source: fds/protobuf/stach/v2/Package.proto

package v2

import (
	table "github.com/factset/stachschema/go/fds/protobuf/stach/v2/table"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// A column organized package of tables
type Package struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The version of the STACH schema. Formatted {major}.{minor}
	Version string `protobuf:"bytes,1,opt,name=version,proto3" json:"version,omitempty"`
	// The array of primary table ids
	PrimaryTableIds []string `protobuf:"bytes,2,rep,name=primary_table_ids,json=primaryTableIds,proto3" json:"primary_table_ids,omitempty"`
	// The map (key: table id) of all tables
	Tables map[string]*table.Table `protobuf:"bytes,3,rep,name=tables,proto3" json:"tables,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Package) Reset() {
	*x = Package{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v2_Package_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Package) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Package) ProtoMessage() {}

func (x *Package) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v2_Package_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Package.ProtoReflect.Descriptor instead.
func (*Package) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v2_Package_proto_rawDescGZIP(), []int{0}
}

func (x *Package) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

func (x *Package) GetPrimaryTableIds() []string {
	if x != nil {
		return x.PrimaryTableIds
	}
	return nil
}

func (x *Package) GetTables() map[string]*table.Table {
	if x != nil {
		return x.Tables
	}
	return nil
}

var File_fds_protobuf_stach_v2_Package_proto protoreflect.FileDescriptor

var file_fds_protobuf_stach_v2_Package_proto_rawDesc = []byte{
	0x0a, 0x23, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73,
	0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x32, 0x2f, 0x50, 0x61, 0x63, 0x6b, 0x61, 0x67, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x19, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32,
	0x1a, 0x27, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73,
	0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x32, 0x2f, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2f, 0x54, 0x61,
	0x62, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xfa, 0x01, 0x0a, 0x07, 0x50, 0x61,
	0x63, 0x6b, 0x61, 0x67, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12,
	0x2a, 0x0a, 0x11, 0x70, 0x72, 0x69, 0x6d, 0x61, 0x72, 0x79, 0x5f, 0x74, 0x61, 0x62, 0x6c, 0x65,
	0x5f, 0x69, 0x64, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0f, 0x70, 0x72, 0x69, 0x6d,
	0x61, 0x72, 0x79, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x49, 0x64, 0x73, 0x12, 0x46, 0x0a, 0x06, 0x74,
	0x61, 0x62, 0x6c, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2e, 0x2e, 0x66, 0x61,
	0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73,
	0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x50, 0x61, 0x63, 0x6b, 0x61, 0x67, 0x65, 0x2e,
	0x54, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x74, 0x61, 0x62,
	0x6c, 0x65, 0x73, 0x1a, 0x61, 0x0a, 0x0b, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x73, 0x45, 0x6e, 0x74,
	0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x03, 0x6b, 0x65, 0x79, 0x12, 0x3c, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e,
	0x74, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x52, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x82, 0x01, 0x0a, 0x1d, 0x63, 0x6f, 0x6d, 0x2e, 0x66,
	0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x42, 0x0c, 0x50, 0x61, 0x63, 0x6b, 0x61, 0x67,
	0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x5a, 0x37, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68,
	0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f, 0x67, 0x6f, 0x2f, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x32, 0xaa,
	0x02, 0x19, 0x46, 0x61, 0x63, 0x74, 0x53, 0x65, 0x74, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x53, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x56, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_fds_protobuf_stach_v2_Package_proto_rawDescOnce sync.Once
	file_fds_protobuf_stach_v2_Package_proto_rawDescData = file_fds_protobuf_stach_v2_Package_proto_rawDesc
)

func file_fds_protobuf_stach_v2_Package_proto_rawDescGZIP() []byte {
	file_fds_protobuf_stach_v2_Package_proto_rawDescOnce.Do(func() {
		file_fds_protobuf_stach_v2_Package_proto_rawDescData = protoimpl.X.CompressGZIP(file_fds_protobuf_stach_v2_Package_proto_rawDescData)
	})
	return file_fds_protobuf_stach_v2_Package_proto_rawDescData
}

var file_fds_protobuf_stach_v2_Package_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_fds_protobuf_stach_v2_Package_proto_goTypes = []interface{}{
	(*Package)(nil),     // 0: factset.protobuf.stach.v2.Package
	nil,                 // 1: factset.protobuf.stach.v2.Package.TablesEntry
	(*table.Table)(nil), // 2: factset.protobuf.stach.v2.table.Table
}
var file_fds_protobuf_stach_v2_Package_proto_depIdxs = []int32{
	1, // 0: factset.protobuf.stach.v2.Package.tables:type_name -> factset.protobuf.stach.v2.Package.TablesEntry
	2, // 1: factset.protobuf.stach.v2.Package.TablesEntry.value:type_name -> factset.protobuf.stach.v2.table.Table
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_fds_protobuf_stach_v2_Package_proto_init() }
func file_fds_protobuf_stach_v2_Package_proto_init() {
	if File_fds_protobuf_stach_v2_Package_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_fds_protobuf_stach_v2_Package_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Package); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_fds_protobuf_stach_v2_Package_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_fds_protobuf_stach_v2_Package_proto_goTypes,
		DependencyIndexes: file_fds_protobuf_stach_v2_Package_proto_depIdxs,
		MessageInfos:      file_fds_protobuf_stach_v2_Package_proto_msgTypes,
	}.Build()
	File_fds_protobuf_stach_v2_Package_proto = out.File
	file_fds_protobuf_stach_v2_Package_proto_rawDesc = nil
	file_fds_protobuf_stach_v2_Package_proto_goTypes = nil
	file_fds_protobuf_stach_v2_Package_proto_depIdxs = nil
}
