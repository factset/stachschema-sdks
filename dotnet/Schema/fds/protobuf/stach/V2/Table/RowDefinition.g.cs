// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: fds/protobuf/stach/v2/table/RowDefinition.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace FactSet.Protobuf.Stach.V2.Table {

  /// <summary>Holder for reflection information generated from fds/protobuf/stach/v2/table/RowDefinition.proto</summary>
  public static partial class RowDefinitionReflection {

    #region Descriptor
    /// <summary>File descriptor for fds/protobuf/stach/v2/table/RowDefinition.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static RowDefinitionReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ci9mZHMvcHJvdG9idWYvc3RhY2gvdjIvdGFibGUvUm93RGVmaW5pdGlvbi5w",
            "cm90bxIfZmFjdHNldC5wcm90b2J1Zi5zdGFjaC52Mi50YWJsZRosZmRzL3By",
            "b3RvYnVmL3N0YWNoL3YyL3RhYmxlL0RhdGFGb3JtYXQucHJvdG8iWAoNUm93",
            "RGVmaW5pdGlvbhIKCgJpZBgBIAEoCRI7CgZmb3JtYXQYAiABKAsyKy5mYWN0",
            "c2V0LnByb3RvYnVmLnN0YWNoLnYyLnRhYmxlLkRhdGFGb3JtYXRCmgEKI2Nv",
            "bS5mYWN0c2V0LnByb3RvYnVmLnN0YWNoLnYyLnRhYmxlQhJSb3dEZWZpbml0",
            "aW9uUHJvdG9aPWdpdGh1Yi5jb20vZmFjdHNldC9zdGFjaHNjaGVtYS9nby9m",
            "ZHMvcHJvdG9idWYvc3RhY2gvdjIvdGFibGWqAh9GYWN0U2V0LlByb3RvYnVm",
            "LlN0YWNoLlYyLlRhYmxlYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::FactSet.Protobuf.Stach.V2.Table.DataFormatReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::FactSet.Protobuf.Stach.V2.Table.RowDefinition), global::FactSet.Protobuf.Stach.V2.Table.RowDefinition.Parser, new[]{ "Id", "Format" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// A definition of a row
  ///
  /// Overrides the column definition
  /// </summary>
  public sealed partial class RowDefinition : pb::IMessage<RowDefinition> {
    private static readonly pb::MessageParser<RowDefinition> _parser = new pb::MessageParser<RowDefinition>(() => new RowDefinition());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<RowDefinition> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::FactSet.Protobuf.Stach.V2.Table.RowDefinitionReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RowDefinition() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RowDefinition(RowDefinition other) : this() {
      id_ = other.id_;
      format_ = other.format_ != null ? other.format_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RowDefinition Clone() {
      return new RowDefinition(this);
    }

    /// <summary>Field number for the "id" field.</summary>
    public const int IdFieldNumber = 1;
    private string id_ = "";
    /// <summary>
    /// The id; used for referring to a row internal to a package
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Id {
      get { return id_; }
      set {
        id_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "format" field.</summary>
    public const int FormatFieldNumber = 2;
    private global::FactSet.Protobuf.Stach.V2.Table.DataFormat format_;
    /// <summary>
    /// The data format; overrides the `ColumnDefinition.format`
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::FactSet.Protobuf.Stach.V2.Table.DataFormat Format {
      get { return format_; }
      set {
        format_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as RowDefinition);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(RowDefinition other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if (!object.Equals(Format, other.Format)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Id.Length != 0) hash ^= Id.GetHashCode();
      if (format_ != null) hash ^= Format.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (Id.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Id);
      }
      if (format_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Format);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Id.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Id);
      }
      if (format_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Format);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(RowDefinition other) {
      if (other == null) {
        return;
      }
      if (other.Id.Length != 0) {
        Id = other.Id;
      }
      if (other.format_ != null) {
        if (format_ == null) {
          Format = new global::FactSet.Protobuf.Stach.V2.Table.DataFormat();
        }
        Format.MergeFrom(other.Format);
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            Id = input.ReadString();
            break;
          }
          case 18: {
            if (format_ == null) {
              Format = new global::FactSet.Protobuf.Stach.V2.Table.DataFormat();
            }
            input.ReadMessage(Format);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code