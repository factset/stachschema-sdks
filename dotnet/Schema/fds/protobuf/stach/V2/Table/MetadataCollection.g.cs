// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: fds/protobuf/stach/v2/table/MetadataCollection.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace FactSet.Protobuf.Stach.V2.Table {

  /// <summary>Holder for reflection information generated from fds/protobuf/stach/v2/table/MetadataCollection.proto</summary>
  public static partial class MetadataCollectionReflection {

    #region Descriptor
    /// <summary>File descriptor for fds/protobuf/stach/v2/table/MetadataCollection.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static MetadataCollectionReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CjRmZHMvcHJvdG9idWYvc3RhY2gvdjIvdGFibGUvTWV0YWRhdGFDb2xsZWN0",
            "aW9uLnByb3RvEh9mYWN0c2V0LnByb3RvYnVmLnN0YWNoLnYyLnRhYmxlGi5m",
            "ZHMvcHJvdG9idWYvc3RhY2gvdjIvdGFibGUvTWV0YWRhdGFJdGVtLnByb3Rv",
            "GjNmZHMvcHJvdG9idWYvc3RhY2gvdjIvdGFibGUvTWV0YWRhdGFMb2NhdGlv",
            "bnMucHJvdG8ihwIKEk1ldGFkYXRhQ29sbGVjdGlvbhJNCgVpdGVtcxgBIAMo",
            "CzI+LmZhY3RzZXQucHJvdG9idWYuc3RhY2gudjIudGFibGUuTWV0YWRhdGFD",
            "b2xsZWN0aW9uLkl0ZW1zRW50cnkSRQoJbG9jYXRpb25zGAIgASgLMjIuZmFj",
            "dHNldC5wcm90b2J1Zi5zdGFjaC52Mi50YWJsZS5NZXRhZGF0YUxvY2F0aW9u",
            "cxpbCgpJdGVtc0VudHJ5EgsKA2tleRgBIAEoCRI8CgV2YWx1ZRgCIAEoCzIt",
            "LmZhY3RzZXQucHJvdG9idWYuc3RhY2gudjIudGFibGUuTWV0YWRhdGFJdGVt",
            "OgI4AUKfAQojY29tLmZhY3RzZXQucHJvdG9idWYuc3RhY2gudjIudGFibGVC",
            "F01ldGFkYXRhQ29sbGVjdGlvblByb3RvWj1naXRodWIuY29tL2ZhY3RzZXQv",
            "c3RhY2hzY2hlbWEvZ28vZmRzL3Byb3RvYnVmL3N0YWNoL3YyL3RhYmxlqgIf",
            "RmFjdFNldC5Qcm90b2J1Zi5TdGFjaC5WMi5UYWJsZWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::FactSet.Protobuf.Stach.V2.Table.MetadataItemReflection.Descriptor, global::FactSet.Protobuf.Stach.V2.Table.MetadataLocationsReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::FactSet.Protobuf.Stach.V2.Table.MetadataCollection), global::FactSet.Protobuf.Stach.V2.Table.MetadataCollection.Parser, new[]{ "Items", "Locations" }, null, null, null, new pbr::GeneratedClrTypeInfo[] { null, })
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// A collection of metadata for a table
  /// </summary>
  public sealed partial class MetadataCollection : pb::IMessage<MetadataCollection> {
    private static readonly pb::MessageParser<MetadataCollection> _parser = new pb::MessageParser<MetadataCollection>(() => new MetadataCollection());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<MetadataCollection> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::FactSet.Protobuf.Stach.V2.Table.MetadataCollectionReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public MetadataCollection() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public MetadataCollection(MetadataCollection other) : this() {
      items_ = other.items_.Clone();
      locations_ = other.locations_ != null ? other.locations_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public MetadataCollection Clone() {
      return new MetadataCollection(this);
    }

    /// <summary>Field number for the "items" field.</summary>
    public const int ItemsFieldNumber = 1;
    private static readonly pbc::MapField<string, global::FactSet.Protobuf.Stach.V2.Table.MetadataItem>.Codec _map_items_codec
        = new pbc::MapField<string, global::FactSet.Protobuf.Stach.V2.Table.MetadataItem>.Codec(pb::FieldCodec.ForString(10, ""), pb::FieldCodec.ForMessage(18, global::FactSet.Protobuf.Stach.V2.Table.MetadataItem.Parser), 10);
    private readonly pbc::MapField<string, global::FactSet.Protobuf.Stach.V2.Table.MetadataItem> items_ = new pbc::MapField<string, global::FactSet.Protobuf.Stach.V2.Table.MetadataItem>();
    /// <summary>
    /// The metadata items associated with a table
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::MapField<string, global::FactSet.Protobuf.Stach.V2.Table.MetadataItem> Items {
      get { return items_; }
    }

    /// <summary>Field number for the "locations" field.</summary>
    public const int LocationsFieldNumber = 2;
    private global::FactSet.Protobuf.Stach.V2.Table.MetadataLocations locations_;
    /// <summary>
    /// The locations where metadata items are associated
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::FactSet.Protobuf.Stach.V2.Table.MetadataLocations Locations {
      get { return locations_; }
      set {
        locations_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as MetadataCollection);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(MetadataCollection other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!Items.Equals(other.Items)) return false;
      if (!object.Equals(Locations, other.Locations)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= Items.GetHashCode();
      if (locations_ != null) hash ^= Locations.GetHashCode();
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
      items_.WriteTo(output, _map_items_codec);
      if (locations_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Locations);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += items_.CalculateSize(_map_items_codec);
      if (locations_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Locations);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(MetadataCollection other) {
      if (other == null) {
        return;
      }
      items_.Add(other.items_);
      if (other.locations_ != null) {
        if (locations_ == null) {
          Locations = new global::FactSet.Protobuf.Stach.V2.Table.MetadataLocations();
        }
        Locations.MergeFrom(other.Locations);
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
            items_.AddEntriesFrom(input, _map_items_codec);
            break;
          }
          case 18: {
            if (locations_ == null) {
              Locations = new global::FactSet.Protobuf.Stach.V2.Table.MetadataLocations();
            }
            input.ReadMessage(Locations);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code