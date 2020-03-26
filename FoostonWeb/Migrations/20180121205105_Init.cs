using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using System;
using System.Collections.Generic;

namespace FoostonWeb.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmailRegistrations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Email = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmailRegistrations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Standings",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Change = table.Column<string>(nullable: true),
                    GamesBack = table.Column<string>(nullable: true),
                    Losses = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: false),
                    Percent = table.Column<string>(nullable: true),
                    PlusMinus = table.Column<string>(nullable: true),
                    PreviousPoints = table.Column<string>(nullable: true),
                    PreviousRank = table.Column<string>(nullable: true),
                    Rank = table.Column<int>(nullable: false),
                    Rating = table.Column<string>(nullable: false),
                    TimeStamp = table.Column<DateTime>(nullable: false),
                    WeeksOff = table.Column<string>(nullable: true),
                    Wins = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Standings", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Standings_Name",
                table: "Standings",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_Standings_TimeStamp",
                table: "Standings",
                column: "TimeStamp");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmailRegistrations");

            migrationBuilder.DropTable(
                name: "Standings");
        }
    }
}
