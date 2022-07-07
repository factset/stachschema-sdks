// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: fds/protobuf/stach/v3/MetadataItem.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace FactSet.Protobuf.Stach.V3 {

  /// <summary>Holder for reflection information generated from fds/protobuf/stach/v3/MetadataItem.proto</summary>
  public static partial class MetadataItemReflection {

    #region Descriptor
    /// <summary>File descriptor for fds/protobuf/stach/v3/MetadataItem.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static MetadataItemReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CihmZHMvcHJvdG9idWYvc3RhY2gvdjMvTWV0YWRhdGFJdGVtLnByb3RvEhlm",
            "YWN0c2V0LnByb3RvYnVmLnN0YWNoLnYzGhxnb29nbGUvcHJvdG9idWYvc3Ry",
            "dWN0LnByb3RvIk4KDE1ldGFkYXRhSXRlbRIXCg9jb250ZXh0dWFsX3R5cGUY",
            "ASABKAkSJQoFdmFsdWUYAiABKAsyFi5nb29nbGUucHJvdG9idWYuVmFsdWVC",
            "jAEKHWNvbS5mYWN0c2V0LnByb3RvYnVmLnN0YWNoLnYzQhFNZXRhZGF0YUl0",
            "ZW1Qcm90b1o8Z2l0aHViLmNvbS9mYWN0c2V0L3N0YWNoc2NoZW1hLXNka3Mv",
            "Z28vZmRzL3Byb3RvYnVmL3N0YWNoL3YzqgIZRmFjdFNldC5Qcm90b2J1Zi5T",
            "dGFjaC5WM2IGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.StructReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::FactSet.Protobuf.Stach.V3.MetadataItem), global::FactSet.Protobuf.Stach.V3.MetadataItem.Parser, new[]{ "ContextualType", "Value" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  ///
  ///A custom metadata item.
  /// </summary>
  public sealed partial class MetadataItem : pb::IMessage<MetadataItem>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<MetadataItem> _parser = new pb::MessageParser<MetadataItem>(() => new MetadataItem());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<MetadataItem> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::FactSet.Protobuf.Stach.V3.MetadataItemReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public MetadataItem() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public MetadataItem(MetadataItem other) : this() {
      contextualType_ = other.contextualType_;
      value_ = other.value_ != null ? other.value_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public MetadataItem Clone() {
      return new MetadataItem(this);
    }

    /// <summary>Field number for the "contextual_type" field.</summary>
    public const int ContextualTypeFieldNumber = 1;
    private string contextualType_ = "";
    /// <summary>
    ///
    ///The higher level contextual type.
    ///E.g. 'email', or 'id32'.
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

    /// <summary>Field number for the "value" field.</summary>
    public const int ValueFieldNumber = 2;
    private global::Google.Protobuf.WellKnownTypes.Value value_;
    /// <summary>
    ///
    ///The value.
    ///Required.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Google.Protobuf.WellKnownTypes.Value Value {
      get { return value_; }
      set {
        value_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as MetadataItem);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(MetadataItem other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ContextualType != other.ContextualType) return false;
      if (!object.Equals(Value, other.Value)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (ContextualType.Length != 0) hash ^= ContextualType.GetHashCode();
      if (value_ != null) hash ^= Value.GetHashCode();
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
      if (value_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Value);
      }
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
      if (value_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Value);
      }
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
      if (value_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Value);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(MetadataItem other) {
      if (other == null) {
        return;
      }
      if (other.ContextualType.Length != 0) {
        ContextualType = other.ContextualType;
      }
      if (other.value_ != null) {
        if (value_ == null) {
          Value = new global::Google.Protobuf.WellKnownTypes.Value();
        }
        Value.MergeFrom(other.Value);
      }
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
          case 18: {
            if (value_ == null) {
              Value = new global::Google.Protobuf.WellKnownTypes.Value();
            }
            input.ReadMessage(Value);
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
          case 18: {
            if (value_ == null) {
              Value = new global::Google.Protobuf.WellKnownTypes.Value();
            }
            input.ReadMessage(Value);
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