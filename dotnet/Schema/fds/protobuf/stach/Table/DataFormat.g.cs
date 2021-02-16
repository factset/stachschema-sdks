// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: fds/protobuf/stach/v2/table/DataFormat.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace FactSet.Protobuf.Stach.V2.Table {

  /// <summary>Holder for reflection information generated from fds/protobuf/stach/v2/table/DataFormat.proto</summary>
  public static partial class DataFormatReflection {

    #region Descriptor
    /// <summary>File descriptor for fds/protobuf/stach/v2/table/DataFormat.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static DataFormatReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CixmZHMvcHJvdG9idWYvc3RhY2gvdjIvdGFibGUvRGF0YUZvcm1hdC5wcm90",
            "bxIfZmFjdHNldC5wcm90b2J1Zi5zdGFjaC52Mi50YWJsZRo1ZmRzL3Byb3Rv",
            "YnVmL3N0YWNoL3YyL3RhYmxlL0hvcml6b250YWxBbGlnbm1lbnQucHJvdG8a",
            "M2Zkcy9wcm90b2J1Zi9zdGFjaC92Mi90YWJsZS9WZXJ0aWNhbEFsaWdubWVu",
            "dC5wcm90byK7AQoKRGF0YUZvcm1hdBIOCgZmb3JtYXQYASABKAkSEwoLbnVs",
            "bF9mb3JtYXQYAiABKAkSRAoGaGFsaWduGAMgASgOMjQuZmFjdHNldC5wcm90",
            "b2J1Zi5zdGFjaC52Mi50YWJsZS5Ib3Jpem9udGFsQWxpZ25tZW50EkIKBnZh",
            "bGlnbhgEIAEoDjIyLmZhY3RzZXQucHJvdG9idWYuc3RhY2gudjIudGFibGUu",
            "VmVydGljYWxBbGlnbm1lbnRCnAEKI2NvbS5mYWN0c2V0LnByb3RvYnVmLnN0",
            "YWNoLnYyLnRhYmxlQg9EYXRhRm9ybWF0UHJvdG9aQmdpdGh1Yi5jb20vZmFj",
            "dHNldC9zdGFjaHNjaGVtYS1zZGtzL2dvL2Zkcy9wcm90b2J1Zi9zdGFjaC92",
            "Mi90YWJsZaoCH0ZhY3RTZXQuUHJvdG9idWYuU3RhY2guVjIuVGFibGViBnBy",
            "b3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::FactSet.Protobuf.Stach.V2.Table.HorizontalAlignmentReflection.Descriptor, global::FactSet.Protobuf.Stach.V2.Table.VerticalAlignmentReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::FactSet.Protobuf.Stach.V2.Table.DataFormat), global::FactSet.Protobuf.Stach.V2.Table.DataFormat.Parser, new[]{ "Format", "NullFormat", "Halign", "Valign" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// A data format
  /// </summary>
  public sealed partial class DataFormat : pb::IMessage<DataFormat> {
    private static readonly pb::MessageParser<DataFormat> _parser = new pb::MessageParser<DataFormat>(() => new DataFormat());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<DataFormat> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::FactSet.Protobuf.Stach.V2.Table.DataFormatReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DataFormat() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DataFormat(DataFormat other) : this() {
      format_ = other.format_;
      nullFormat_ = other.nullFormat_;
      halign_ = other.halign_;
      valign_ = other.valign_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DataFormat Clone() {
      return new DataFormat(this);
    }

    /// <summary>Field number for the "format" field.</summary>
    public const int FormatFieldNumber = 1;
    private string format_ = "";
    /// <summary>
    /// The format
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Format {
      get { return format_; }
      set {
        format_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "null_format" field.</summary>
    public const int NullFormatFieldNumber = 2;
    private string nullFormat_ = "";
    /// <summary>
    /// The null format
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string NullFormat {
      get { return nullFormat_; }
      set {
        nullFormat_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "halign" field.</summary>
    public const int HalignFieldNumber = 3;
    private global::FactSet.Protobuf.Stach.V2.Table.HorizontalAlignment halign_ = global::FactSet.Protobuf.Stach.V2.Table.HorizontalAlignment.UnknownHalign;
    /// <summary>
    /// The horizontal alignment
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::FactSet.Protobuf.Stach.V2.Table.HorizontalAlignment Halign {
      get { return halign_; }
      set {
        halign_ = value;
      }
    }

    /// <summary>Field number for the "valign" field.</summary>
    public const int ValignFieldNumber = 4;
    private global::FactSet.Protobuf.Stach.V2.Table.VerticalAlignment valign_ = global::FactSet.Protobuf.Stach.V2.Table.VerticalAlignment.UnknownValign;
    /// <summary>
    /// The vertical alignment
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::FactSet.Protobuf.Stach.V2.Table.VerticalAlignment Valign {
      get { return valign_; }
      set {
        valign_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as DataFormat);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(DataFormat other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Format != other.Format) return false;
      if (NullFormat != other.NullFormat) return false;
      if (Halign != other.Halign) return false;
      if (Valign != other.Valign) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Format.Length != 0) hash ^= Format.GetHashCode();
      if (NullFormat.Length != 0) hash ^= NullFormat.GetHashCode();
      if (Halign != global::FactSet.Protobuf.Stach.V2.Table.HorizontalAlignment.UnknownHalign) hash ^= Halign.GetHashCode();
      if (Valign != global::FactSet.Protobuf.Stach.V2.Table.VerticalAlignment.UnknownValign) hash ^= Valign.GetHashCode();
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
      if (Format.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Format);
      }
      if (NullFormat.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(NullFormat);
      }
      if (Halign != global::FactSet.Protobuf.Stach.V2.Table.HorizontalAlignment.UnknownHalign) {
        output.WriteRawTag(24);
        output.WriteEnum((int) Halign);
      }
      if (Valign != global::FactSet.Protobuf.Stach.V2.Table.VerticalAlignment.UnknownValign) {
        output.WriteRawTag(32);
        output.WriteEnum((int) Valign);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Format.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Format);
      }
      if (NullFormat.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(NullFormat);
      }
      if (Halign != global::FactSet.Protobuf.Stach.V2.Table.HorizontalAlignment.UnknownHalign) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) Halign);
      }
      if (Valign != global::FactSet.Protobuf.Stach.V2.Table.VerticalAlignment.UnknownValign) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) Valign);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(DataFormat other) {
      if (other == null) {
        return;
      }
      if (other.Format.Length != 0) {
        Format = other.Format;
      }
      if (other.NullFormat.Length != 0) {
        NullFormat = other.NullFormat;
      }
      if (other.Halign != global::FactSet.Protobuf.Stach.V2.Table.HorizontalAlignment.UnknownHalign) {
        Halign = other.Halign;
      }
      if (other.Valign != global::FactSet.Protobuf.Stach.V2.Table.VerticalAlignment.UnknownValign) {
        Valign = other.Valign;
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
            Format = input.ReadString();
            break;
          }
          case 18: {
            NullFormat = input.ReadString();
            break;
          }
          case 24: {
            Halign = (global::FactSet.Protobuf.Stach.V2.Table.HorizontalAlignment) input.ReadEnum();
            break;
          }
          case 32: {
            Valign = (global::FactSet.Protobuf.Stach.V2.Table.VerticalAlignment) input.ReadEnum();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
