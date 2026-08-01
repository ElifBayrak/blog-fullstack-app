using BlogApi.Models;
using BlogApi.DTOs;

namespace BlogApi.Services;

public interface IPostService
{
    Task<List<Post>> GetPosts();

    Task<Post?> GetPost(int id);

    Task<Post> CreatePost(CreatePostDto dto);

    Task<bool> UpdatePost(int id, UpdatePostDto dto);

    Task<bool> DeletePost(int id);
}