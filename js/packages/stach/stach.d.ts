import * as $protobuf from "protobufjs";
export = stach;

declare namespace stach {


    /** Namespace factset. */
    namespace factset {

        /** Namespace protobuf. */
        namespace protobuf {

            /** Namespace stach. */
            namespace stach {

                /** Namespace v3. */
                namespace v3 {

                    /** Properties of a Column. */
                    interface IColumn {

                        /** Column contextualType */
                        contextualType?: (string|null);

                        /** Column customMetadata */
                        customMetadata?: ({ [k: string]: factset.protobuf.stach.v3.IMetadataItem }|null);
                    }

                    /** Represents a Column. */
                    class Column implements IColumn {

                        /**
                         * Constructs a new Column.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.v3.IColumn);

                        /** Column contextualType. */
                        public contextualType: string;

                        /** Column customMetadata. */
                        public customMetadata: { [k: string]: factset.protobuf.stach.v3.IMetadataItem };

                        /**
                         * Creates a new Column instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Column instance
                         */
                        public static create(properties?: factset.protobuf.stach.v3.IColumn): factset.protobuf.stach.v3.Column;

                        /**
                         * Encodes the specified Column message. Does not implicitly {@link factset.protobuf.stach.v3.Column.verify|verify} messages.
                         * @param message Column message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.v3.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Column message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Column.verify|verify} messages.
                         * @param message Column message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.v3.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Column message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.Column;

                        /**
                         * Decodes a Column message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.Column;

                        /**
                         * Verifies a Column message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Column message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Column
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.Column;

                        /**
                         * Creates a plain object from a Column message. Also converts values to other types if specified.
                         * @param message Column
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.v3.Column, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Column to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MetadataItem. */
                    interface IMetadataItem {

                        /** MetadataItem contextualType */
                        contextualType?: (string|null);

                        /** MetadataItem value */
                        value?: (google.protobuf.IValue|null);
                    }

                    /** Represents a MetadataItem. */
                    class MetadataItem implements IMetadataItem {

                        /**
                         * Constructs a new MetadataItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.v3.IMetadataItem);

                        /** MetadataItem contextualType. */
                        public contextualType: string;

                        /** MetadataItem value. */
                        public value?: (google.protobuf.IValue|null);

                        /**
                         * Creates a new MetadataItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MetadataItem instance
                         */
                        public static create(properties?: factset.protobuf.stach.v3.IMetadataItem): factset.protobuf.stach.v3.MetadataItem;

                        /**
                         * Encodes the specified MetadataItem message. Does not implicitly {@link factset.protobuf.stach.v3.MetadataItem.verify|verify} messages.
                         * @param message MetadataItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.v3.IMetadataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MetadataItem message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.MetadataItem.verify|verify} messages.
                         * @param message MetadataItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.v3.IMetadataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MetadataItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MetadataItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.MetadataItem;

                        /**
                         * Decodes a MetadataItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MetadataItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.MetadataItem;

                        /**
                         * Verifies a MetadataItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MetadataItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MetadataItem
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.MetadataItem;

                        /**
                         * Creates a plain object from a MetadataItem message. Also converts values to other types if specified.
                         * @param message MetadataItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.v3.MetadataItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MetadataItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RowOrganizedTable. */
                    interface IRowOrganizedTable {

                        /** RowOrganizedTable version */
                        version?: (string|null);

                        /** RowOrganizedTable name */
                        name?: (string|null);

                        /** RowOrganizedTable columns */
                        columns?: (factset.protobuf.stach.v3.RowOrganizedTable.IColumn[]|null);

                        /** RowOrganizedTable table */
                        table?: (factset.protobuf.stach.v3.ITable|null);

                        /** RowOrganizedTable multiLevelHeadersTable */
                        multiLevelHeadersTable?: (factset.protobuf.stach.v3.IRowOrganizedTable|null);

                        /** RowOrganizedTable views */
                        views?: (factset.protobuf.stach.v3.Views.IView[]|null);

                        /** RowOrganizedTable headerRows */
                        headerRows?: (factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow[]|null);

                        /** RowOrganizedTable rows */
                        rows?: (google.protobuf.IStruct[]|null);
                    }

                    /** Represents a RowOrganizedTable. */
                    class RowOrganizedTable implements IRowOrganizedTable {

                        /**
                         * Constructs a new RowOrganizedTable.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.v3.IRowOrganizedTable);

                        /** RowOrganizedTable version. */
                        public version: string;

                        /** RowOrganizedTable name. */
                        public name: string;

                        /** RowOrganizedTable columns. */
                        public columns: factset.protobuf.stach.v3.RowOrganizedTable.IColumn[];

                        /** RowOrganizedTable table. */
                        public table?: (factset.protobuf.stach.v3.ITable|null);

                        /** RowOrganizedTable multiLevelHeadersTable. */
                        public multiLevelHeadersTable?: (factset.protobuf.stach.v3.IRowOrganizedTable|null);

                        /** RowOrganizedTable views. */
                        public views: factset.protobuf.stach.v3.Views.IView[];

                        /** RowOrganizedTable headerRows. */
                        public headerRows: factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow[];

                        /** RowOrganizedTable rows. */
                        public rows: google.protobuf.IStruct[];

                        /**
                         * Creates a new RowOrganizedTable instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RowOrganizedTable instance
                         */
                        public static create(properties?: factset.protobuf.stach.v3.IRowOrganizedTable): factset.protobuf.stach.v3.RowOrganizedTable;

                        /**
                         * Encodes the specified RowOrganizedTable message. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.verify|verify} messages.
                         * @param message RowOrganizedTable message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.v3.IRowOrganizedTable, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RowOrganizedTable message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.verify|verify} messages.
                         * @param message RowOrganizedTable message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.v3.IRowOrganizedTable, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RowOrganizedTable message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RowOrganizedTable
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.RowOrganizedTable;

                        /**
                         * Decodes a RowOrganizedTable message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RowOrganizedTable
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.RowOrganizedTable;

                        /**
                         * Verifies a RowOrganizedTable message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RowOrganizedTable message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RowOrganizedTable
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.RowOrganizedTable;

                        /**
                         * Creates a plain object from a RowOrganizedTable message. Also converts values to other types if specified.
                         * @param message RowOrganizedTable
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.v3.RowOrganizedTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RowOrganizedTable to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace RowOrganizedTable {

                        /** Properties of a Column. */
                        interface IColumn {

                            /** Column name */
                            name?: (string|null);

                            /** Column forbidNulls */
                            forbidNulls?: (boolean|null);

                            /** Column contextualType */
                            contextualType?: (string|null);

                            /** Column customMetadata */
                            customMetadata?: ({ [k: string]: factset.protobuf.stach.v3.IMetadataItem }|null);
                        }

                        /** Represents a Column. */
                        class Column implements IColumn {

                            /**
                             * Constructs a new Column.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v3.RowOrganizedTable.IColumn);

                            /** Column name. */
                            public name: string;

                            /** Column forbidNulls. */
                            public forbidNulls: boolean;

                            /** Column contextualType. */
                            public contextualType: string;

                            /** Column customMetadata. */
                            public customMetadata: { [k: string]: factset.protobuf.stach.v3.IMetadataItem };

                            /**
                             * Creates a new Column instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Column instance
                             */
                            public static create(properties?: factset.protobuf.stach.v3.RowOrganizedTable.IColumn): factset.protobuf.stach.v3.RowOrganizedTable.Column;

                            /**
                             * Encodes the specified Column message. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.Column.verify|verify} messages.
                             * @param message Column message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v3.RowOrganizedTable.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Column message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.Column.verify|verify} messages.
                             * @param message Column message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v3.RowOrganizedTable.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Column message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Column
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.RowOrganizedTable.Column;

                            /**
                             * Decodes a Column message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Column
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.RowOrganizedTable.Column;

                            /**
                             * Verifies a Column message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Column message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Column
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.RowOrganizedTable.Column;

                            /**
                             * Creates a plain object from a Column message. Also converts values to other types if specified.
                             * @param message Column
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v3.RowOrganizedTable.Column, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Column to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a HeaderRow. */
                        interface IHeaderRow {

                            /** HeaderRow cells */
                            cells?: (factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell[]|null);
                        }

                        /** Represents a HeaderRow. */
                        class HeaderRow implements IHeaderRow {

                            /**
                             * Constructs a new HeaderRow.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow);

                            /** HeaderRow cells. */
                            public cells: factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell[];

                            /**
                             * Creates a new HeaderRow instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns HeaderRow instance
                             */
                            public static create(properties?: factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow): factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow;

                            /**
                             * Encodes the specified HeaderRow message. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.verify|verify} messages.
                             * @param message HeaderRow message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified HeaderRow message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.verify|verify} messages.
                             * @param message HeaderRow message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a HeaderRow message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns HeaderRow
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow;

                            /**
                             * Decodes a HeaderRow message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns HeaderRow
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow;

                            /**
                             * Verifies a HeaderRow message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a HeaderRow message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns HeaderRow
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow;

                            /**
                             * Creates a plain object from a HeaderRow message. Also converts values to other types if specified.
                             * @param message HeaderRow
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this HeaderRow to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a HeaderCell. */
                        interface IHeaderCell {

                            /** HeaderCell colspan */
                            colspan?: (number|null);

                            /** HeaderCell rowspan */
                            rowspan?: (number|null);

                            /** HeaderCell value */
                            value?: (google.protobuf.IValue|null);
                        }

                        /** Represents a HeaderCell. */
                        class HeaderCell implements IHeaderCell {

                            /**
                             * Constructs a new HeaderCell.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell);

                            /** HeaderCell colspan. */
                            public colspan: number;

                            /** HeaderCell rowspan. */
                            public rowspan: number;

                            /** HeaderCell value. */
                            public value?: (google.protobuf.IValue|null);

                            /**
                             * Creates a new HeaderCell instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns HeaderCell instance
                             */
                            public static create(properties?: factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell): factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell;

                            /**
                             * Encodes the specified HeaderCell message. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.verify|verify} messages.
                             * @param message HeaderCell message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified HeaderCell message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.verify|verify} messages.
                             * @param message HeaderCell message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a HeaderCell message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns HeaderCell
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell;

                            /**
                             * Decodes a HeaderCell message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns HeaderCell
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell;

                            /**
                             * Verifies a HeaderCell message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a HeaderCell message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns HeaderCell
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell;

                            /**
                             * Creates a plain object from a HeaderCell message. Also converts values to other types if specified.
                             * @param message HeaderCell
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this HeaderCell to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a Table. */
                    interface ITable {

                        /** Table primaryKeys */
                        primaryKeys?: (string[]|null);

                        /** Table totalNumRows */
                        totalNumRows?: (number|null);

                        /** Table groupResult */
                        groupResult?: (factset.protobuf.stach.v3.Table.IGroupResult|null);

                        /** Table splitResult */
                        splitResult?: (factset.protobuf.stach.v3.Table.ISplitResult|null);

                        /** Table customMetadata */
                        customMetadata?: ({ [k: string]: factset.protobuf.stach.v3.IMetadataItem }|null);
                    }

                    /** Represents a Table. */
                    class Table implements ITable {

                        /**
                         * Constructs a new Table.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.v3.ITable);

                        /** Table primaryKeys. */
                        public primaryKeys: string[];

                        /** Table totalNumRows. */
                        public totalNumRows: number;

                        /** Table groupResult. */
                        public groupResult?: (factset.protobuf.stach.v3.Table.IGroupResult|null);

                        /** Table splitResult. */
                        public splitResult?: (factset.protobuf.stach.v3.Table.ISplitResult|null);

                        /** Table customMetadata. */
                        public customMetadata: { [k: string]: factset.protobuf.stach.v3.IMetadataItem };

                        /**
                         * Creates a new Table instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Table instance
                         */
                        public static create(properties?: factset.protobuf.stach.v3.ITable): factset.protobuf.stach.v3.Table;

                        /**
                         * Encodes the specified Table message. Does not implicitly {@link factset.protobuf.stach.v3.Table.verify|verify} messages.
                         * @param message Table message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.v3.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Table message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Table.verify|verify} messages.
                         * @param message Table message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.v3.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Table message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Table
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.Table;

                        /**
                         * Decodes a Table message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Table
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.Table;

                        /**
                         * Verifies a Table message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Table message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Table
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.Table;

                        /**
                         * Creates a plain object from a Table message. Also converts values to other types if specified.
                         * @param message Table
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.v3.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Table to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Table {

                        /** Properties of a GroupResult. */
                        interface IGroupResult {

                            /** GroupResult by */
                            by?: (string[]|null);

                            /** GroupResult collapsedColumnResult */
                            collapsedColumnResult?: (factset.protobuf.stach.v3.Table.ICollapsedColumnResult|null);

                            /** GroupResult rowPath */
                            rowPath?: (string|null);

                            /** GroupResult aggregateRows */
                            aggregateRows?: (string|null);

                            /** GroupResult level */
                            level?: (string|null);
                        }

                        /** Represents a GroupResult. */
                        class GroupResult implements IGroupResult {

                            /**
                             * Constructs a new GroupResult.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v3.Table.IGroupResult);

                            /** GroupResult by. */
                            public by: string[];

                            /** GroupResult collapsedColumnResult. */
                            public collapsedColumnResult?: (factset.protobuf.stach.v3.Table.ICollapsedColumnResult|null);

                            /** GroupResult rowPath. */
                            public rowPath: string;

                            /** GroupResult aggregateRows. */
                            public aggregateRows: string;

                            /** GroupResult level. */
                            public level: string;

                            /**
                             * Creates a new GroupResult instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GroupResult instance
                             */
                            public static create(properties?: factset.protobuf.stach.v3.Table.IGroupResult): factset.protobuf.stach.v3.Table.GroupResult;

                            /**
                             * Encodes the specified GroupResult message. Does not implicitly {@link factset.protobuf.stach.v3.Table.GroupResult.verify|verify} messages.
                             * @param message GroupResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v3.Table.IGroupResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GroupResult message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Table.GroupResult.verify|verify} messages.
                             * @param message GroupResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v3.Table.IGroupResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GroupResult message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GroupResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.Table.GroupResult;

                            /**
                             * Decodes a GroupResult message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GroupResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.Table.GroupResult;

                            /**
                             * Verifies a GroupResult message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GroupResult message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GroupResult
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.Table.GroupResult;

                            /**
                             * Creates a plain object from a GroupResult message. Also converts values to other types if specified.
                             * @param message GroupResult
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v3.Table.GroupResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GroupResult to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a CollapsedColumnResult. */
                        interface ICollapsedColumnResult {

                            /** CollapsedColumnResult name */
                            name?: (string|null);
                        }

                        /** Represents a CollapsedColumnResult. */
                        class CollapsedColumnResult implements ICollapsedColumnResult {

                            /**
                             * Constructs a new CollapsedColumnResult.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v3.Table.ICollapsedColumnResult);

                            /** CollapsedColumnResult name. */
                            public name: string;

                            /**
                             * Creates a new CollapsedColumnResult instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CollapsedColumnResult instance
                             */
                            public static create(properties?: factset.protobuf.stach.v3.Table.ICollapsedColumnResult): factset.protobuf.stach.v3.Table.CollapsedColumnResult;

                            /**
                             * Encodes the specified CollapsedColumnResult message. Does not implicitly {@link factset.protobuf.stach.v3.Table.CollapsedColumnResult.verify|verify} messages.
                             * @param message CollapsedColumnResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v3.Table.ICollapsedColumnResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CollapsedColumnResult message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Table.CollapsedColumnResult.verify|verify} messages.
                             * @param message CollapsedColumnResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v3.Table.ICollapsedColumnResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CollapsedColumnResult message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CollapsedColumnResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.Table.CollapsedColumnResult;

                            /**
                             * Decodes a CollapsedColumnResult message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CollapsedColumnResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.Table.CollapsedColumnResult;

                            /**
                             * Verifies a CollapsedColumnResult message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CollapsedColumnResult message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CollapsedColumnResult
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.Table.CollapsedColumnResult;

                            /**
                             * Creates a plain object from a CollapsedColumnResult message. Also converts values to other types if specified.
                             * @param message CollapsedColumnResult
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v3.Table.CollapsedColumnResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CollapsedColumnResult to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SplitResult. */
                        interface ISplitResult {

                            /** SplitResult multiLevelHeadersTableReference */
                            multiLevelHeadersTableReference?: (string|null);
                        }

                        /** Represents a SplitResult. */
                        class SplitResult implements ISplitResult {

                            /**
                             * Constructs a new SplitResult.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v3.Table.ISplitResult);

                            /** SplitResult multiLevelHeadersTableReference. */
                            public multiLevelHeadersTableReference: string;

                            /**
                             * Creates a new SplitResult instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SplitResult instance
                             */
                            public static create(properties?: factset.protobuf.stach.v3.Table.ISplitResult): factset.protobuf.stach.v3.Table.SplitResult;

                            /**
                             * Encodes the specified SplitResult message. Does not implicitly {@link factset.protobuf.stach.v3.Table.SplitResult.verify|verify} messages.
                             * @param message SplitResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v3.Table.ISplitResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SplitResult message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Table.SplitResult.verify|verify} messages.
                             * @param message SplitResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v3.Table.ISplitResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SplitResult message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SplitResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.Table.SplitResult;

                            /**
                             * Decodes a SplitResult message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SplitResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.Table.SplitResult;

                            /**
                             * Verifies a SplitResult message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SplitResult message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SplitResult
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.Table.SplitResult;

                            /**
                             * Creates a plain object from a SplitResult message. Also converts values to other types if specified.
                             * @param message SplitResult
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v3.Table.SplitResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SplitResult to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a TableView. */
                    interface ITableView {

                        /** TableView displayName */
                        displayName?: (string|null);

                        /** TableView columns */
                        columns?: (string[]|null);

                        /** TableView headers */
                        headers?: ({ [k: string]: string }|null);

                        /** TableView group */
                        group?: (factset.protobuf.stach.v3.TableView.IGroup|null);

                        /** TableView split */
                        split?: (factset.protobuf.stach.v3.TableView.ISplit|null);

                        /** TableView customMetadata */
                        customMetadata?: ({ [k: string]: factset.protobuf.stach.v3.IMetadataItem }|null);
                    }

                    /** Represents a TableView. */
                    class TableView implements ITableView {

                        /**
                         * Constructs a new TableView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.v3.ITableView);

                        /** TableView displayName. */
                        public displayName: string;

                        /** TableView columns. */
                        public columns: string[];

                        /** TableView headers. */
                        public headers: { [k: string]: string };

                        /** TableView group. */
                        public group?: (factset.protobuf.stach.v3.TableView.IGroup|null);

                        /** TableView split. */
                        public split?: (factset.protobuf.stach.v3.TableView.ISplit|null);

                        /** TableView customMetadata. */
                        public customMetadata: { [k: string]: factset.protobuf.stach.v3.IMetadataItem };

                        /**
                         * Creates a new TableView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableView instance
                         */
                        public static create(properties?: factset.protobuf.stach.v3.ITableView): factset.protobuf.stach.v3.TableView;

                        /**
                         * Encodes the specified TableView message. Does not implicitly {@link factset.protobuf.stach.v3.TableView.verify|verify} messages.
                         * @param message TableView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.v3.ITableView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableView message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.TableView.verify|verify} messages.
                         * @param message TableView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.v3.ITableView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TableView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.TableView;

                        /**
                         * Decodes a TableView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TableView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.TableView;

                        /**
                         * Verifies a TableView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableView
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.TableView;

                        /**
                         * Creates a plain object from a TableView message. Also converts values to other types if specified.
                         * @param message TableView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.v3.TableView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace TableView {

                        /** Properties of a Group. */
                        interface IGroup {

                            /** Group by */
                            by?: (string[]|null);

                            /** Group collapsedColumn */
                            collapsedColumn?: (factset.protobuf.stach.v3.TableView.ICollapsedColumn|null);
                        }

                        /** Represents a Group. */
                        class Group implements IGroup {

                            /**
                             * Constructs a new Group.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v3.TableView.IGroup);

                            /** Group by. */
                            public by: string[];

                            /** Group collapsedColumn. */
                            public collapsedColumn?: (factset.protobuf.stach.v3.TableView.ICollapsedColumn|null);

                            /**
                             * Creates a new Group instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Group instance
                             */
                            public static create(properties?: factset.protobuf.stach.v3.TableView.IGroup): factset.protobuf.stach.v3.TableView.Group;

                            /**
                             * Encodes the specified Group message. Does not implicitly {@link factset.protobuf.stach.v3.TableView.Group.verify|verify} messages.
                             * @param message Group message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v3.TableView.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Group message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.TableView.Group.verify|verify} messages.
                             * @param message Group message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v3.TableView.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Group message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Group
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.TableView.Group;

                            /**
                             * Decodes a Group message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Group
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.TableView.Group;

                            /**
                             * Verifies a Group message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Group message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Group
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.TableView.Group;

                            /**
                             * Creates a plain object from a Group message. Also converts values to other types if specified.
                             * @param message Group
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v3.TableView.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Group to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a CollapsedColumn. */
                        interface ICollapsedColumn {

                            /** CollapsedColumn alias */
                            alias?: (string|null);
                        }

                        /** Represents a CollapsedColumn. */
                        class CollapsedColumn implements ICollapsedColumn {

                            /**
                             * Constructs a new CollapsedColumn.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v3.TableView.ICollapsedColumn);

                            /** CollapsedColumn alias. */
                            public alias: string;

                            /**
                             * Creates a new CollapsedColumn instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CollapsedColumn instance
                             */
                            public static create(properties?: factset.protobuf.stach.v3.TableView.ICollapsedColumn): factset.protobuf.stach.v3.TableView.CollapsedColumn;

                            /**
                             * Encodes the specified CollapsedColumn message. Does not implicitly {@link factset.protobuf.stach.v3.TableView.CollapsedColumn.verify|verify} messages.
                             * @param message CollapsedColumn message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v3.TableView.ICollapsedColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CollapsedColumn message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.TableView.CollapsedColumn.verify|verify} messages.
                             * @param message CollapsedColumn message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v3.TableView.ICollapsedColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CollapsedColumn message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CollapsedColumn
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.TableView.CollapsedColumn;

                            /**
                             * Decodes a CollapsedColumn message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CollapsedColumn
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.TableView.CollapsedColumn;

                            /**
                             * Verifies a CollapsedColumn message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CollapsedColumn message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CollapsedColumn
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.TableView.CollapsedColumn;

                            /**
                             * Creates a plain object from a CollapsedColumn message. Also converts values to other types if specified.
                             * @param message CollapsedColumn
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v3.TableView.CollapsedColumn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CollapsedColumn to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Split. */
                        interface ISplit {

                            /** Split alias */
                            alias?: (string|null);

                            /** Split by */
                            by?: (string[]|null);

                            /** Split include */
                            include?: (string[]|null);

                            /** Split over */
                            over?: (string[]|null);

                            /** Split headers */
                            headers?: ({ [k: string]: string }|null);

                            /** Split removeEmptySplitColumns */
                            removeEmptySplitColumns?: (boolean|null);
                        }

                        /** Represents a Split. */
                        class Split implements ISplit {

                            /**
                             * Constructs a new Split.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v3.TableView.ISplit);

                            /** Split alias. */
                            public alias: string;

                            /** Split by. */
                            public by: string[];

                            /** Split include. */
                            public include: string[];

                            /** Split over. */
                            public over: string[];

                            /** Split headers. */
                            public headers: { [k: string]: string };

                            /** Split removeEmptySplitColumns. */
                            public removeEmptySplitColumns: boolean;

                            /**
                             * Creates a new Split instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Split instance
                             */
                            public static create(properties?: factset.protobuf.stach.v3.TableView.ISplit): factset.protobuf.stach.v3.TableView.Split;

                            /**
                             * Encodes the specified Split message. Does not implicitly {@link factset.protobuf.stach.v3.TableView.Split.verify|verify} messages.
                             * @param message Split message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v3.TableView.ISplit, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Split message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.TableView.Split.verify|verify} messages.
                             * @param message Split message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v3.TableView.ISplit, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Split message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Split
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.TableView.Split;

                            /**
                             * Decodes a Split message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Split
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.TableView.Split;

                            /**
                             * Verifies a Split message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Split message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Split
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.TableView.Split;

                            /**
                             * Creates a plain object from a Split message. Also converts values to other types if specified.
                             * @param message Split
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v3.TableView.Split, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Split to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a Views. */
                    interface IViews {

                        /** Views views */
                        views?: (factset.protobuf.stach.v3.Views.IView[]|null);
                    }

                    /** Represents a Views. */
                    class Views implements IViews {

                        /**
                         * Constructs a new Views.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.v3.IViews);

                        /** Views views. */
                        public views: factset.protobuf.stach.v3.Views.IView[];

                        /**
                         * Creates a new Views instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Views instance
                         */
                        public static create(properties?: factset.protobuf.stach.v3.IViews): factset.protobuf.stach.v3.Views;

                        /**
                         * Encodes the specified Views message. Does not implicitly {@link factset.protobuf.stach.v3.Views.verify|verify} messages.
                         * @param message Views message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.v3.IViews, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Views message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Views.verify|verify} messages.
                         * @param message Views message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.v3.IViews, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Views message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Views
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.Views;

                        /**
                         * Decodes a Views message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Views
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.Views;

                        /**
                         * Verifies a Views message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Views message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Views
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.Views;

                        /**
                         * Creates a plain object from a Views message. Also converts values to other types if specified.
                         * @param message Views
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.v3.Views, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Views to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Views {

                        /** Properties of a View. */
                        interface IView {

                            /** View name */
                            name?: (string|null);

                            /** View displayName */
                            displayName?: (string|null);

                            /** View table */
                            table?: (factset.protobuf.stach.v3.ITableView|null);
                        }

                        /** Represents a View. */
                        class View implements IView {

                            /**
                             * Constructs a new View.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v3.Views.IView);

                            /** View name. */
                            public name: string;

                            /** View displayName. */
                            public displayName: string;

                            /** View table. */
                            public table?: (factset.protobuf.stach.v3.ITableView|null);

                            /** View type. */
                            public type?: "table";

                            /**
                             * Creates a new View instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns View instance
                             */
                            public static create(properties?: factset.protobuf.stach.v3.Views.IView): factset.protobuf.stach.v3.Views.View;

                            /**
                             * Encodes the specified View message. Does not implicitly {@link factset.protobuf.stach.v3.Views.View.verify|verify} messages.
                             * @param message View message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v3.Views.IView, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified View message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Views.View.verify|verify} messages.
                             * @param message View message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v3.Views.IView, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a View message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns View
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v3.Views.View;

                            /**
                             * Decodes a View message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns View
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v3.Views.View;

                            /**
                             * Verifies a View message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a View message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns View
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v3.Views.View;

                            /**
                             * Creates a plain object from a View message. Also converts values to other types if specified.
                             * @param message View
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v3.Views.View, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this View to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }
            }
        }
    }

    /** Namespace google. */
    namespace google {

        /** Namespace protobuf. */
        namespace protobuf {

            /** Properties of a Struct. */
            interface IStruct {

                /** Struct fields */
                fields?: ({ [k: string]: google.protobuf.IValue }|null);
            }

            /** Represents a Struct. */
            class Struct implements IStruct {

                /**
                 * Constructs a new Struct.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.IStruct);

                /** Struct fields. */
                public fields: { [k: string]: google.protobuf.IValue };

                /**
                 * Creates a new Struct instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Struct instance
                 */
                public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

                /**
                 * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
                 * @param message Struct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
                 * @param message Struct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Struct message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Struct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

                /**
                 * Decodes a Struct message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Struct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

                /**
                 * Verifies a Struct message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Struct message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Struct
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

                /**
                 * Creates a plain object from a Struct message. Also converts values to other types if specified.
                 * @param message Struct
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Struct to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Value. */
            interface IValue {

                /** Value nullValue */
                nullValue?: (google.protobuf.NullValue|null);

                /** Value numberValue */
                numberValue?: (number|null);

                /** Value stringValue */
                stringValue?: (string|null);

                /** Value boolValue */
                boolValue?: (boolean|null);

                /** Value structValue */
                structValue?: (google.protobuf.IStruct|null);

                /** Value listValue */
                listValue?: (google.protobuf.IListValue|null);
            }

            /** Represents a Value. */
            class Value implements IValue {

                /**
                 * Constructs a new Value.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.IValue);

                /** Value nullValue. */
                public nullValue: google.protobuf.NullValue;

                /** Value numberValue. */
                public numberValue: number;

                /** Value stringValue. */
                public stringValue: string;

                /** Value boolValue. */
                public boolValue: boolean;

                /** Value structValue. */
                public structValue?: (google.protobuf.IStruct|null);

                /** Value listValue. */
                public listValue?: (google.protobuf.IListValue|null);

                /** Value kind. */
                public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

                /**
                 * Creates a new Value instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Value instance
                 */
                public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

                /**
                 * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Value message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

                /**
                 * Decodes a Value message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

                /**
                 * Verifies a Value message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Value
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

                /**
                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                 * @param message Value
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Value to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** NullValue enum. */
            enum NullValue {
                NULL_VALUE = 0
            }

            /** Properties of a ListValue. */
            interface IListValue {

                /** ListValue values */
                values?: (google.protobuf.IValue[]|null);
            }

            /** Represents a ListValue. */
            class ListValue implements IListValue {

                /**
                 * Constructs a new ListValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.IListValue);

                /** ListValue values. */
                public values: google.protobuf.IValue[];

                /**
                 * Creates a new ListValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListValue instance
                 */
                public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

                /**
                 * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
                 * @param message ListValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
                 * @param message ListValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

                /**
                 * Decodes a ListValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

                /**
                 * Verifies a ListValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListValue
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

                /**
                 * Creates a plain object from a ListValue message. Also converts values to other types if specified.
                 * @param message ListValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
