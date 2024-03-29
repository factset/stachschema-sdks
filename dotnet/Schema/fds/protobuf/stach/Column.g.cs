// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: fds/protobuf/stach/v3/Column.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace FactSet.Protobuf.Stach.V3 {

  /// <summary>Holder for reflection information generated from fds/protobuf/stach/v3/Column.proto</summary>
  public static partial class ColumnReflection {

    #region Descriptor
    /// <summary>File descriptor for fds/protobuf/stach/v3/Column.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ColumnReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiJmZHMvcHJvdG9idWYvc3RhY2gvdjMvQ29sdW1uLnByb3RvEhlmYWN0c2V0",
            "LnByb3RvYnVmLnN0YWNoLnYzGihmZHMvcHJvdG9idWYvc3RhY2gvdjMvTWV0",
            "YWRhdGFJdGVtLnByb3RvItEBCgZDb2x1bW4SFwoPY29udGV4dHVhbF90eXBl",
            "GAEgASgJEk4KD2N1c3RvbV9tZXRhZGF0YRhkIAMoCzI1LmZhY3RzZXQucHJv",
            "dG9idWYuc3RhY2gudjMuQ29sdW1uLkN1c3RvbU1ldGFkYXRhRW50cnkaXgoT",
            "Q3VzdG9tTWV0YWRhdGFFbnRyeRILCgNrZXkYASABKAkSNgoFdmFsdWUYAiAB",
            "KAsyJy5mYWN0c2V0LnByb3RvYnVmLnN0YWNoLnYzLk1ldGFkYXRhSXRlbToC",
            "OAFChgEKHWNvbS5mYWN0c2V0LnByb3RvYnVmLnN0YWNoLnYzQgtDb2x1bW5Q",
            "cm90b1o8Z2l0aHViLmNvbS9mYWN0c2V0L3N0YWNoc2NoZW1hLXNka3MvZ28v",
            "ZmRzL3Byb3RvYnVmL3N0YWNoL3YzqgIZRmFjdFNldC5Qcm90b2J1Zi5TdGFj",
            "aC5WM2IGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::FactSet.Protobuf.Stach.V3.MetadataItemReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::FactSet.Protobuf.Stach.V3.Column), global::FactSet.Protobuf.Stach.V3.Column.Parser, new[]{ "ContextualType", "CustomMetadata" }, null, null, null, new pbr::GeneratedClrTypeInfo[] { null, })
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  ///
  ///A set of metadata for a table column.
  /// </summary>
  public sealed partial class Column : pb::IMessage<Column>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Column> _parser = new pb::MessageParser<Column>(() => new Column());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Column> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::FactSet.Protobuf.Stach.V3.ColumnReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Column() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Column(Column other) : this() {
      contextualType_ = other.contextualType_;
      customMetadata_ = other.customMetadata_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Column Clone() {
      return new Column(this);
    }

    /// <summary>Field number for the "contextual_type" field.</summary>
    public const int ContextualTypeFieldNumber = 1;
    private string contextualType_ = "";
    /// <summary>
    ///
    ///The type that defines a higher level contextual type.
    ///E.g. 'email', or 'id32'. Maps to a [logical type](https://arrow.apache.org/docs/format/Columnar.html#logical-types) which needs to be specified as the [Arrow Field `type` property](https://arrow.apache.org/docs/format/Columnar.html#schema-message).
    ///Required.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string ContextualType {
      get { return contextualType_; }
      set {
        contextualType_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "custom_metadata" field.</summary>
    public const int CustomMetadataFieldNumber = 100;
    private static readonly pbc::MapField<string, global::FactSet.Protobuf.Stach.V3.MetadataItem>.Codec _map_customMetadata_codec
        = new pbc::MapField<string, global::FactSet.Protobuf.Stach.V3.MetadataItem>.Codec(pb::FieldCodec.ForString(10, ""), pb::FieldCodec.ForMessage(18, global::FactSet.Protobuf.Stach.V3.MetadataItem.Parser), 802);
    private readonly pbc::MapField<string, global::FactSet.Protobuf.Stach.V3.MetadataItem> customMetadata_ = new pbc::MapField<string, global::FactSet.Protobuf.Stach.V3.MetadataItem>();
    /// <summary>
    ///
    ///The custom metadata.
    ///Optional.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::MapField<string, global::FactSet.Protobuf.Stach.V3.MetadataItem> CustomMetadata {
      get { return customMetadata_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Column);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Column other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ContextualType != other.ContextualType) return false;
      if (!CustomMetadata.Equals(other.CustomMetadata)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (ContextualType.Length != 0) hash ^= ContextualType.GetHashCode();
      hash ^= CustomMetadata.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (ContextualType.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ContextualType);
      }
      customMetadata_.WriteTo(output, _map_customMetadata_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (ContextualType.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ContextualType);
      }
      customMetadata_.WriteTo(ref output, _map_customMetadata_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (ContextualType.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ContextualType);
      }
      size += customMetadata_.CalculateSize(_map_customMetadata_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Column other) {
      if (other == null) {
        return;
      }
      if (other.ContextualType.Length != 0) {
        ContextualType = other.ContextualType;
      }
      customMetadata_.Add(other.customMetadata_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            ContextualType = input.ReadString();
            break;
          }
          case 802: {
            customMetadata_.AddEntriesFrom(input, _map_customMetadata_codec);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            ContextualType = input.ReadString();
            break;
          }
          case 802: {
            customMetadata_.AddEntriesFrom(ref input, _map_customMetadata_codec);
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code
